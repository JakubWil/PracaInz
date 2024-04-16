import React from 'react';
import ColorSchemesExample from '../components/ColorSchemesExample';
import NavigationBarS from '../components/NavigationBarS';
import Summary from './components/Summary';
import Findings from './components/Findings';
import './secondPage.css';
import { useLocation } from 'react-router-dom'; 



const SecondPage = () => {
  const location = useLocation(); 

 
  const scanResults = location.state?.scanResults;


  return (
    <div>
      <NavigationBarS  />
      <Summary scanResults={scanResults} /> {/* Przekaż wyniki skanowania do komponentu Summary */}
      <Findings scanResults={scanResults} />
    </div>
  );
};

export default SecondPage;