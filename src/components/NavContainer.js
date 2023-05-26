import logo from '../assets/logo.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavContainer() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='d-flex' style={{alignItems:'center'}}>
        <img src={logo} className="logo_navbar" alt="" />
        <h3>DIBOOKING</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <div className='d-flex justify-content-center' style={{width:'100%'}}>
          <Nav
            className='nav'
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Promosi</Nav.Link>
            <Nav.Link href="#action2">Rekomendasi</Nav.Link>
            <Nav.Link href="#action2">Kategori</Nav.Link>
            <Nav.Link href="#action2">Tentang Kami</Nav.Link>

          </Nav>
          </div>
          <Form className="d-flex">
            <Button className='mx-3' variant="outline-success">Search</Button>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;