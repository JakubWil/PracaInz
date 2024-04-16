import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import backgroundImage from '../img/space.jpg';
import { useNavigate } from 'react-router-dom';




function ButtonsExample() {



  const [urlInput, setUrlInput] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();  

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    height: '100px',
    
    padding: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  const containerStyle1 = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap:"10px"
    
    
  };


  const containerStyle2 = {
    display: 'flex',
    
    
  };

  const inputStyle = {
    width: '1000px',
    margin: '0px 10px 0px 0px',
    padding: '15px',
    border:'0px'
  };

  const buttonStyle = {
    width: '10%',
    backgroundColor: "#8AAAE5",
    color : "white",
  };

  const h1Style = {
    color: "white",
    
  };

  const h3Style = {
    color: "white",
    
  };

  const handleScanClick = async () => {
    if (urlInput.trim() === '') {
      setShowAlert(true);
    } else {
      try {
        setLoading(true); 
        const response = await fetch('http://localhost:5000/scan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: urlInput,
          }),
        });

        if (response.ok) {
          const scanResults = await response.json();
          navigate('/second', { state: { scanResults } });
        } else {
          console.error('Error during scanning:', response.status);
          setShowAlert(true);
        }
      } catch (error) {
        console.error('Error during scanning:', error);
        setShowAlert(true);
      } finally {
        setLoading(false); 
      }
    }
  };



  return (
    <div style={containerStyle}>
      <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
        Please enter a valid URL.
      </Alert>
      <InputGroup className="mb-3">
        <div style={containerStyle1}>
          <h1 style={h1Style}>Free Website Vulnerability Scanner</h1>
          <h3 style={h3Style}>Submit a URL for a complimentary security evaluation of the provided website.</h3>
          <div style={containerStyle2}>
            <Form.Control
              placeholder="Enter a valid URL e.g. https://www.wst.com.pl/ "
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={inputStyle}
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2" style={buttonStyle} onClick={handleScanClick} disabled={loading}>
              {loading ? 'Scanning...' : 'Scan'}
            </Button>
          </div>
        </div>
      </InputGroup>
    </div>
  );
}

export default ButtonsExample;
