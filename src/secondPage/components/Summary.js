import React from 'react';
import '../summary.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import Findings from './Findings'



function Summary({ scanResults }) {

    if (!scanResults) {
        return null; 
      }


      const {
       
        summary,
       
        overall_risk,
        startTime, 
        finishTime, 
        scanDuration,
        target_url
      } = scanResults;

      
    const getRiskClass = (riskLevel) => {
        switch (riskLevel) {
            case 'High':  return 'risk-high';
            case 'Medium': return 'risk-medium';
            case 'Low':  return 'risk-low';
            default: return ''; 
        }
    }
      

  return (
    <>
    <div class='containerSP'>
        
        <p class='sp-heading'>Summary</p>
        <p class="scanned-page"> Scanned page: {target_url}</p>
        {/* <button onClick={downloadPDF}>Pobierz Raport</button> */}
        <hr/>
        <div class='second-container-sp'>
            {/* OVERALL */}
            <div class='overall-container'>
                <p class='overall-name hea'>Overall risk level:</p>
                <p className={`overall-risk ${getRiskClass(overall_risk)}`}>{overall_risk}</p>
            </div>
            {/* RISK */}
            <div class='risk-container'>
                <p class='risk-name hea'>Risk raitings:</p>
                <div class='risk-high-container ror'>
                    <p class='risk-high-name'>High:</p>
                    <p class='risk-high-level'>{summary.High}</p>
                </div>
                <div class='risk-medium-container ror'>
                    <p class='risk-medium-name'>Medium:</p>
                    <p class='risk-medium-level'>{summary.Medium}</p>
                </div>
                <div class='risk-low-container ror'>
                    <p class='risk-low-name'>Low:</p>
                    <p class='risk-low-level'>{summary.Low}</p>
                </div>
               
            </div>
            {/* SCAN */}
            <div class='scan-container'>
                <p class='scan-name hea'>Scan information:</p>
                <div class='start-time-container lel'>
                    <p class='start-time-name'>Start time:</p>
                    <p class='start-time-date'>{startTime}</p>
                </div>
                <div class='finish-time-container lel'>
                    <p class='finish-time-name'>Finish time:</p>
                    <p class='finish-time-date'>{finishTime}</p>
                </div>
                <div class='scan-duration-container lel'>
                    <p class='scan-duration-name'>Scan duration:</p>
                    <p class='scan-duration-time'>{scanDuration}</p>
                </div>
               
            </div>
        </div>
    </div>
    
    
    </>
  );
}

export default Summary;