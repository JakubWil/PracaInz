import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../style.css';

function Section() {


  const handleCheckClick = () => {
   
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };


  return (
    <>
      
      <div class='container2' id ="features">
        <h1 class='section-heading'>Features</h1>
      <div class='grid-template22'>
        <div class='grid-element-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" viewBox="0 0 256 256" class='icn-style'><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
          <div class='element-1-text'>
            <p class='feature-heading'>Scan</p>
            <p class='feature-desc'>Website scanning engine is backed up with reliable infrastructure and it is undergoing harness tests to deliver exceptional performance</p>
          </div>
        </div>
        <div class='grid-element-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" viewBox="0 0 256 256" class='icn-style'><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path></svg>
          <div class='element-1-text'>
            <p class='feature-heading'>Fix</p>
            <p class='feature-desc'>Our seasoned information security experts are right hands to be in when you face online attack</p>
          </div>
        </div>
        <div class='grid-element-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" viewBox="0 0 256 256" class='icn-style'><path d="M248,112H220.08l-47.5-65.41a16,16,0,0,0-25.31-.72l-12.85,14.9-.2.23a7.95,7.95,0,0,1-12.44,0l-.2-.23-12.85-14.9a16,16,0,0,0-25.31.72L35.92,112H8a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM96.34,56l.19.23,12.85,14.89a24,24,0,0,0,37.24,0l12.85-14.89c.06-.08.1-.15.17-.23l40.66,56H55.69ZM180,144a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144ZM76,200a20,20,0,1,1,20-20A20,20,0,0,1,76,200Zm104,0a20,20,0,1,1,20-20A20,20,0,0,1,180,200Z"></path></svg>
          <div class='element-1-text'>
            <p class='feature-heading'>Detect</p>
            <p class='feature-desc'>We are committed to innovation and consistently enhancing malware detection capabilities to give our customers effective tools against sophisticated and evolving web threats</p>
          </div>
        </div>
        <div class='grid-element-1'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" viewBox="0 0 256 256" class='icn-style'><path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path></svg>
          <div class='element-1-text'>
            <p class='feature-heading'>Protect</p>
            <p class='feature-desc'>Our Web Application Firewall (WAF) blocks malicious visitors and requests from accessing your website</p>
          </div>
        </div>
      </div>
      <Button variant="primary" onClick={handleCheckClick}>Check</Button>{' '}
      </div>

    
    </>
  );
}

export default Section;
