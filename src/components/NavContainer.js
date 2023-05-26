import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';

function NavContainer() {
  return (
    <>
      <Navbar bg="white" variant="light">
        <Container>
          <div className='title'>
            <img src={logo} className='logo' alt='dibooking'/>
            <Navbar.Brand href="#home">Dibooking</Navbar.Brand>
          </div> 
          <Nav className="ml-auto">
            <Nav.Link href="#home">Promo</Nav.Link>
            <Nav.Link href="#features">Rekomendasi</Nav.Link>
            <Nav.Link href="#pricing">Kategori</Nav.Link>
            <Nav.Link href="#pricing">Tentang Kami</Nav.Link>
            <Button className='login'>Masuk</Button>
            <Button className='daftar'>Daftar</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavContainer;