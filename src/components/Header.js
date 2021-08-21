import {Navbar, Nav, Container} from 'react-bootstrap';  
import {Link} from 'react-router-dom';

function Header() 
{
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Schools</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/add" style={{ textDecoration:'none' }} className="me-3">Add Schools</Link>
                    <Link to="/update" style={{ textDecoration:'none' }} className="me-3">Update Schools</Link>
                    <div className="float-end">
                    <Link to="/login" style={{ textDecoration:'none' }} className="me-3 float-end">Login</Link>
                    <Link to="/register" style={{ textDecoration:'none' }} className="me-3 float-end">Register</Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>

        </>
    )
}

export default Header;