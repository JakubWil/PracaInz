import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import ColorSchemesExample from './components/ColorSchemesExample';
import ButtonsExample from './components/ButtonsExample';
import Section from './components/Section';
import SectionSlogan from './components/SectionSlogan';
import Footer from './components/Footer';
import SecondPage from './secondPage/SecondPage.js'; 
import ScannerComponent from './components/ScannerComponent.js';

function App() {
  return (

    <Router>
      

       

        <Routes>
          <Route path="/" element={<>
            <ColorSchemesExample />
            <ButtonsExample />
            <Section />
            <SectionSlogan />
            
          </>} />

          <Route path="/second" element={<SecondPage />} />
        </Routes>

        <Footer />
    
    </Router>
    
  );
}

export default App;

