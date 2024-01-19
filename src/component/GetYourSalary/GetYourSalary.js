import React, { useState } from 'react';
import axios from 'axios';
import './GetYourSalary.css';

function GetYourSalary() {
    const [e_sal_emp_code, sete_sal_emp_code] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState(null);

    const getEmployeeDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/salary_details_read/${e_sal_emp_code}`);
            setEmployeeDetails(response.data);
            console.log(employeeDetails)
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <div class="inp">
            <div class="divinp">
                <input
                    type="text"
                    placeholder="Enter Employee Code" id="tragss"
                    value={e_sal_emp_code}
                    onChange={(e) => sete_sal_emp_code(e.target.value)}
                />
                &nbsp;
                &nbsp; &nbsp;
                <button onClick={getEmployeeDetails}>Get Details</button>
            </div>


            {employeeDetails && (

                <div class="container">
                    <div class="sal">

                        <table>
                            <tbody>    
                            <h3>Salary Details</h3>
                                                           
                                <tr align="center">
                                    <td>Employee Name:</td>
                                    <td>{employeeDetails[19]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Salary Month:</td>
                                    <td>{employeeDetails[0]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Salary Year:</td>
                                    <td>{employeeDetails[1]}</td>
                                </tr>

                                <tr align="center">
                                    <td>Employee Code:</td>
                                    <td>{employeeDetails[2]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Basic Salary:</td>
                                    <td>{employeeDetails[5]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Special pay:</td>
                                    <td>{employeeDetails[4]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Dearness Allowances(DA):</td>
                                    <td>{employeeDetails[6]}</td>
                                </tr>
                                <tr align="center">
                                    <td>House Rent Allowances(HRA):</td>
                                    <td>{employeeDetails[7]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Transport Allowance:</td>
                                    <td>{employeeDetails[11]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Gross Salary:</td>
                                    <td>{employeeDetails[8]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Lic Deduction:</td>
                                    <td>{employeeDetails[9]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Advance:</td>
                                    <td>{employeeDetails[10]}</td>
                                </tr>

                                <tr align="center">
                                    <td>Employee State Insurance(ESI):</td>
                                    <td>{employeeDetails[12].toFixed(5)}</td>
                                </tr>
                                <tr align="center">
                                    <td>Provident Fund(PF):</td>
                                    <td>{employeeDetails[15]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Employee Provident Fund (EPF):</td>
                                    <td>{employeeDetails[13]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Family Pension Fund:</td>
                                    <td>{employeeDetails[14]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Others:</td>
                                    <td>{employeeDetails[16]}</td>
                                </tr>
                                <tr align="center">
                                    <td>Gross Deductions :</td>
                                    <td>{employeeDetails[17].toFixed(2)}</td>
                                </tr>
                                <tr align="center">
                                    <td>Net salary:</td>
                                    <td>{parseFloat(employeeDetails[18]).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GetYourSalary;