import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function ColorSchemesExample() {





  return (
    <>
      <Navbar bg="light" style={{ backgroundColor: '#8AAAE5', height: '80px' }} variant="white">
        <Container>
          <Navbar.Brand href="#home" >
            
            Webscanner JW</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     

    
    </>
  );
}

export default ColorSchemesExample;