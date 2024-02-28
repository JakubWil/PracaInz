import React, { useState } from 'react';

const ScannerComponent = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);

  const handleScan = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error during scan:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleScan}>Scan</button>

      {results && (
        <div>
          <h2>Scan Results:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ScannerComponent;
