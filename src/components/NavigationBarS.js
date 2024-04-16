import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavigationBarS() {





  return (
    <>
      <Navbar bg="light" style={{ backgroundColor: '#8AAAE5', height: '80px' }} variant="white">
        <Container>
          <Navbar.Brand href="http://localhost:3000/#home" >
            
            Webscanner JW</Navbar.Brand>
         
        </Container>
      </Navbar>
     

    
    </>
  );
}

export default NavigationBarS;