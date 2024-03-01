import React, { useState, useEffect } from "react";
import axios from "axios";
import './allemployeesalries.css';

function AllEmployeeSalaries() {
    const [SalaryDetails, setsalarydetails] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        get_salary_details();
    }, []);

    const get_salary_details = async () => {
        try {
            const salary_details = await axios.get(`http://localhost:3001/all_salary_details_Read`);
            console.log(salary_details.data);
            setsalarydetails(salary_details.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleRead = (employee) => {
        setSelectedEmployee(employee);
    };

    return (
        <>
            <h2>Employee Salaries</h2>
            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th>Employee code</th>
                        <th>Name</th>
                        <th>Read</th>
                    </tr>
                </thead>
                <tbody>
                    {SalaryDetails.length > 0 ? (
                        SalaryDetails.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee[2]}</td>
                                <td>{employee[19]}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleRead(employee)}>Read</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No employee salaries found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {selectedEmployee && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Employee Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setSelectedEmployee(null)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Employee Code: {selectedEmployee[2]}</p>
                                <p>Name: {selectedEmployee[19]}</p>
                                {/* Add more details here based on your array structure */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setSelectedEmployee(null)}>ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AllEmployeeSalaries;
