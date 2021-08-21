import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';  
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function Header() 
{
   let history = useHistory();
   let user = JSON.parse(localStorage.getItem('UserInfo'))

   const handleLogout = () => 
   {
     localStorage.removeItem('UserInfo');
     history.push('/login');
   }

    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="me-auto">
                    {
                        localStorage.getItem('UserInfo') ? 
                        <>
                    <Link to="/add" style={{ textDecoration:'none' }} className="me-5">Add Schools</Link>
                    <Link to="/update" style={{ textDecoration:'none' }} className="me-5">Update Schools</Link>
                        </>
                        :
                        <>
                    <Link to="/login" style={{ textDecoration:'none' }} className="me-5 float-end">Login</Link>
                    <Link to="/register" style={{ textDecoration:'none' }} className="me-5 float-end">Register</Link>
                        </>
                    }
                    <div className="float-end">
                    </div>
                </Nav>
                {localStorage.getItem('UserInfo') ? 
                <Nav>
                    <NavDropdown title={user.name}>
                        <NavDropdown.Item onClick={handleLogout} style={{ textDecoration:'none', color: 'red', cursor: 'pointer' }}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
                }
            </Container>
        </Navbar>

        </>
    )
}

export default Header;