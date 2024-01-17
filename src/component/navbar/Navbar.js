import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Employee from '../employee/Employee';
import Home from '../home/Home';
import Hra from '../hra/Hra';
import Da from '../da/Da';
import Pf from '../pf/Pf';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1><b>PayRoll</b></h1>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
              <Link to="/Employee">Employee</Link>
              <Link to="/Hra">Hra</Link>
              <Link to="/Da">Da Table</Link>
              <Link to="/Pf">Pf Table</Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/Employee" element={<Employee />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Hra" element={<Hra />} />
        <Route exact path="/Da" element={<Da />} />
        <Route exact path="/Pf" element={<Pf />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default Navbar;
