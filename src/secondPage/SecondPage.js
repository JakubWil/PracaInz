import React from 'react';
import ColorSchemesExample from '../components/ColorSchemesExample';
import Summary from './components/Summary';
import Findings from './components/Findings';
import './secondPage.css';
import { useLocation } from 'react-router-dom'; // Dodaj import



const SecondPage = () => {
  const location = useLocation(); // Użyj useLocation, aby pobrać dane z poprzedniej ścieżki

  // Poniżej mógłbyś wydobyć dane, które przekazałeś z poprzedniej ścieżki
  const scanResults = location.state?.scanResults;


  return (
    <div>
      <ColorSchemesExample />
      <Summary scanResults={scanResults} /> {/* Przekaż wyniki skanowania do komponentu Summary */}
      <Findings scanResults={scanResults} />
    </div>
  );
};

export default SecondPage;