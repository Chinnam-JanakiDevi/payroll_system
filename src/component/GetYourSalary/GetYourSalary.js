import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './GetYourSalary.css';

function GetYourSalary() {
    const [e_sal_emp_code, sete_sal_emp_code] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState(null);

    const getEmployeeDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/salary_details_read/${e_sal_emp_code}`);
            setEmployeeDetails(response.data);
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    const downloadDetails = () => {
        if (employeeDetails) {
          const pdf = new jsPDF();
        //   const startX = 20;
          let startY = 20;
          const lineHeight = 12;
      
          // Heading row centered
          pdf.setFont('georgia', 'bold');
          pdf.setFontSize(18);
          // pdf.text('NEC Pay Slip', startX, startY);
      
          // Employee details in a table format
          const employeeDetailsTable = [
            ['Nec Pay Slip']
          ];
          
          pdf.autoTable({
            startY: startY + lineHeight,
            // body: employeeDetailsTable,
            theme: 'plain',
            styles: {
              cellPadding: 2,
              fontSize: 18, // Set the font size for the heading
              fontStyle: 'bold', // Set the font style to bold
              halign: 'center', // Center align the text horizontally
              
            },
          });
          
      
          pdf.autoTable({
            startY: startY + lineHeight,
            body: employeeDetailsTable,
            theme: 'plain',
            styles: {
              cellPadding: 2,
              fontSize: 18,
              lineWidth: 0.1,
              fontStyle: 'bold', // Set the font style to bold
              halign: 'center', // Center align the text horizontally
              
              font: 'georgia',
              fillColor: [0, 102, 204], // Background color for the heading
              textColor: [255, 255, 255], // Text color for the heading
              
            },
          });
      
          startY = pdf.autoTable.previous.finalY-12;
      
          // Define table data for "Gross Details"
          const grossDetailsTable = [
            ['Salary Year', employeeDetails[1]],
            ['Basic Salary', employeeDetails[5]],
            ['Special pay', employeeDetails[4]],
            ['Dearness Allowances(DA)', employeeDetails[6]],
            ['House Rent Allowances(HRA)', employeeDetails[7]],
            ['Transport Allowance', employeeDetails[11]],
            ['Lic Deduction', employeeDetails[9]],
            ['Advance', employeeDetails[10]],
          ];
      
          // Define table data for "Gross Deductions"
          const grossDeductionsTable = [
            
            
            ['Employee State Insurance(ESI)', employeeDetails[12].toFixed(2)],
            ['Provident Fund(PF)', employeeDetails[15].toFixed(2)],
            ['Employee Provident Fund (EPF)', employeeDetails[13].toFixed(2)],
            ['Family Pension Fund', employeeDetails[14].toFixed(2)],
            ['Others', employeeDetails[16]],
            ['Gross Salary', employeeDetails[8]],
            ['Gross Deductions', employeeDetails[17].toFixed(2)],
            [{ content: 'Net salary', styles: { fillColor: [255, 255, 0] } }, { content: parseFloat(employeeDetails[18]).toFixed(2), styles: { fillColor: [255, 255, 0] } }],
    
          ];
      
          // Calculate the maximum number of rows in "Gross Details" and "Gross Deductions"
          const maxRows = Math.max(grossDetailsTable.length, grossDeductionsTable.length);
      
          // Create a combined table with "Gross Details" and "Gross Deductions" side by side
          const additionalRow = [{ content: 'Name', styles: { fillColor: [255, 255, 0] } }, employeeDetails[19], { content: 'Employee Id', styles: { fillColor: [255, 255, 0] } }, employeeDetails[2], { content: 'Month', styles: { fillColor: [255, 255, 0] } }, employeeDetails[0]];
    
          pdf.autoTable({
            startY: startY + lineHeight,
            body: [additionalRow],
            theme: 'grid', // Use 'grid' theme for borders
            styles: {
              cellPadding: 2,
              fontSize: 12,
              font: 'georgia',
              valign: 'middle',
              halign: 'center',
            },
            didDrawCell: (data) => {
              // Draw background color for specific cells (Name, Employee ID, Month)
              const cellIndexesToHighlight = [0, 2, 4]; // Adjust cell indexes as needed
              if (cellIndexesToHighlight.includes(data.cell.index)) {
                pdf.setFillColor(166, 166, 166); // Background color
                pdf.rect(data.cell.x, data.cell.y, data.cell.width, data.cell.height, 'F');
              }
          
              // Remove vertical lines between cells
              if (cellIndexesToHighlight.includes(data.cell.index)) {
                pdf.setLineWidth(0);
                pdf.line(data.cell.x + data.cell.width, data.cell.y, data.cell.x + data.cell.width, data.cell.y + data.cell.height);
              }
          
              // Reset line width for subsequent cells
              pdf.setLineWidth(0.1);
            },
          });
          
        startY = pdf.autoTable.previous.finalY + 0.2
          const combinedTable = [];
          for (let i = 0; i < maxRows; i++) {
            const row = [];
            if (i < grossDetailsTable.length) {
              row.push(grossDetailsTable[i][0], grossDetailsTable[i][1]);
            } else {
              row.push('', ''); // Empty cells if no more rows in "Gross Details"
            }
      
            if (i < grossDeductionsTable.length) {
              row.push(grossDeductionsTable[i][0], grossDeductionsTable[i][1]);
            } else {
              row.push('', ''); // Empty cells if no more rows in "Gross Deductions"
            }
      
            combinedTable.push(row);
          }
      
          // Create a table for combined "Gross Details" and "Gross Deductions"
          pdf.autoTable({
            startY,
            body: combinedTable,
            theme: 'plain',
            styles: {
              cellPadding: 2,
              fontSize: 12,
              lineWidth: 0.1,
              font: 'georgia',
            },
          });
      
          // Add the third table - "Salary Details"
          startY = pdf.autoTable.previous.finalY + 5;
      
          // const salaryDetailsTable = [
          //   ['Salary Year', employeeDetails[1]],
            
          // ];
      
          // pdf.autoTable({
          //   startY,
          //   body: salaryDetailsTable,
          //   theme: 'plain',
          //   styles: {
          //     cellPadding: 2,
          //     fontSize: 12,
          //     lineWidth: 0.1,
          //     font: 'georgia',
          //   },
          // });
      
          // Save the PDF as a blob
          const pdfBlob = pdf.output('blob');
      
          // Create a download link
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(pdfBlob);
          downloadLink.download = `salary_details_${e_sal_emp_code}.pdf`;
      
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      };
    return (
        <div className="container">
            <div className="sal">
                <div className="inp">
                    <br />
                    <div className="divinp">
                        <input
                            type="text"
                            placeholder="Enter Employee Code"
                            id="tragss"
                            value={e_sal_emp_code}
                            onChange={(e) => sete_sal_emp_code(e.target.value)}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={getEmployeeDetails}>Get Details</button>
                    </div>

                    <br />
                    {employeeDetails && (
                        <div>
                            <h3 align="center">Salary Details</h3>

                            <table className="tables">
                                <tbody>
                                    <tr>
                                        <td>Employee Name:</td>
                                        <td>{employeeDetails[19]}</td>
                                    </tr>
                                    <tr>
                                        <td>Employee Code:</td>
                                        <td>{employeeDetails[2]}</td>
                                    </tr>
                                    <tr>
                                        <td>Salary Month:</td>
                                        <td>{employeeDetails[0]}</td>
                                    </tr>
                                    <tr>
                                        <td>Net salary:</td>
                                        <td>
                                            <b>{parseFloat(employeeDetails[18]).toFixed(2)}</b>
                                        </td>
                                    </tr>
                                    {/* Add other rows as needed */}
                                </tbody>
                            </table>

                            <br />
                            <br />
                            <div className="tabs">
                                <table className="tab1">
                                    <h3 align="center">Gross Details</h3>

                                    <tbody>
                                        {/* <caption>Gross Details</caption> */}
                                        <tr>
                                            <td>Basic Salary:</td>
                                            <td>{employeeDetails[5]}</td>
                                        </tr>
                                        <tr>
                                            <td>Special pay:</td>
                                            <td>{employeeDetails[4]}</td>
                                        </tr>
                                        <tr>
                                            <td>Dearness Allowances(DA):</td>
                                            <td>{employeeDetails[6]}</td>
                                        </tr>
                                        <tr>
                                            <td>House Rent Allowances(HRA):</td>
                                            <td>{employeeDetails[7]}</td>
                                        </tr>
                                        <tr>
                                            <td>Transport Allowance:</td>
                                            <td>{employeeDetails[11]}</td>
                                        </tr>
                                        <tr>
                                            <td>Gross Salary:</td>
                                            <td>{employeeDetails[8]}</td>
                                        </tr>
                                        {/* Add other rows as needed */}
                                    </tbody>
                                </table>

                                <table className="tab2">
                                    <tbody>
                                        {/* <caption>Gross Deductions</caption> */}
                                        <h3 align="center">Gross Deductions</h3>
                                        <tr>
                                            <td>Lic Deduction:</td>
                                            <td>{employeeDetails[9]}</td>
                                        </tr>
                                        <tr>
                                            <td>Advance:</td>
                                            <td>{employeeDetails[10]}</td>
                                        </tr>
                                        <tr>
                                            <td>Employee State Insurance(ESI):</td>
                                            <td>{employeeDetails[12].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Provident Fund(PF):</td>
                                            <td>{employeeDetails[15].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Employee Provident Fund (EPF):</td>
                                            <td>{employeeDetails[13].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Family Pension Fund:</td>
                                            <td>{employeeDetails[14].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Others:</td>
                                            <td>{employeeDetails[16]}</td>
                                        </tr>
                                        <tr>
                                            <td>Gross Deductions :</td>
                                            <td>{employeeDetails[17].toFixed(2)}</td>
                                        </tr>
                                        {/* Add other rows as needed */}
                                    </tbody>
                                </table>
                            </div>

                            <button id="but" onClick={downloadDetails}>Download Details (PDF)</button>
                            <br></br>
                            <br></br>
                        </div>
                    )}
                </div>
            </div>

        </div>

    );
}

export default GetYourSalary;