import React from 'react';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import '../findings.css';

function Findings({ scanResults }) {
  if (!scanResults || !scanResults.vulnerabilities) {
    return (
      <div className='containerSP'>
        <p>No findings available.</p>
      </div>
    );
  }

  const { vulnerabilities } = scanResults;

  return (
    <>
      <div className='containerSP'>
        <p className="findings-header">Findings</p>
        <hr />

        <div>
          {vulnerabilities.map((vulnerability, index) => (
            <div key={index}>
              <p className="vulnerability-header">{vulnerability.description}</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>{vulnerability.location || "Not found"}</p>
                    </td>
                    <td>{vulnerability.type}</td>
                    <td>{vulnerability.risk}</td>
                  </tr>
                </tbody>
              </Table>

              <Accordion defaultActiveKey={index.toString()}>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>Vulnerability-{index + 1}</Accordion.Header>
                  <Accordion.Body>
                    <p className='heh'>Risk description:</p>
                    <p>{vulnerability.risk_description || 'N/A'}</p>

                    <p className='heh'>Recommendations:</p>
                    <ul>
                      {vulnerability.recommendations?.map((recommendation, i) => (
                        <li key={i}>{recommendation}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <hr />
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}

export default Findings;
