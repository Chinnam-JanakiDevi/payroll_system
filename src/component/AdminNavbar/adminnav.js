import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Attendence from "../Attendence/Attendence";
import AllEmployeeSalaries from "../AllEmployeeSalaries/allemployeesalries";
import "./adminnav.css";
function AdminNavbar() {
    return (
        <>
            <nav className="adminnavbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Attendence">Get All Employee Details</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AllEmployeeSalaries">Get All Employee Salaries</a>
                        </li>
                        <li className="nav-item">
                            <button className="admin_button"><a className="nav-link" href="">Logout</a></button>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route exact path="/Attendence" element={<Attendence />} />
                <Route exact path="/AllEmployeeSalaries" element={<AllEmployeeSalaries />} />

            </Routes>
        </>
    );
}

export default AdminNavbar;
