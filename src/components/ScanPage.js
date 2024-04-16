import React, { useState } from 'react';
import axios from 'axios';

const ScanPage = () => {
  const [targetUrl, setTargetUrl] = useState('');
  const [scanStatus, setScanStatus] = useState('');
  const [vulnerabilities, setVulnerabilities] = useState([]);

  const handleScan = async () => {
    try {
      
      const startScanResponse = await axios.get('http://localhost:8080/JSON/spider/action/scan/', {
        params: { url: targetUrl }
      });

      const scanId = startScanResponse.data.scan;

      
      let isScanComplete = false;
      while (!isScanComplete) {
        const scanStatusResponse = await axios.get(`http://localhost:8080/JSON/spider/view/status/?scanId=${scanId}`);
        isScanComplete = scanStatusResponse.data.status === '100';
        await new Promise(resolve => setTimeout(resolve, 1000)); 
      }

     
      const resultsResponse = await axios.get(`http://localhost:8080/JSON/spider/view/fullResults/?baseurl=${targetUrl}&start=${scanId}`);
      setVulnerabilities(resultsResponse.data);
      setScanStatus('Skanowanie zakończone');
    } catch (error) {
      console.error('Błąd podczas skanowania:', error);
      setScanStatus('Wystąpił błąd podczas skanowania');
    }
  };

  return (
    <div id ="home">
      <input
        type="text"
        placeholder="Wprowadź adres URL"
        value={targetUrl}
        onChange={(e) => setTargetUrl(e.target.value)}
      />
      <button onClick={handleScan}>Skanuj</button>

      <div>
        <h2>Status skanowania: {scanStatus}</h2>
        <h2>Wyniki skanowania:</h2>
        <ul>
          {vulnerabilities.map((vuln, index) => (
            <li key={index}>{vuln.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScanPage;
