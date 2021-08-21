import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Userspage()
{
    return (

        <>

        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home"><b>Explore College and Universities</b></Navbar.Brand>
            <Nav className="ms-auto">

            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            </Nav>

            </Container>
        </Navbar>

        </>

    )
}

export default Userspage;