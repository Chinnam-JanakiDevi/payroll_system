import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Employee from '../employee/Employee';
import Home from '../home/Home';
import Hra from '../hra/Hra';
import Da from '../da/Da';
import Pf from '../pf/Pf';
import GetYourSalary from '../GetYourSalary/GetYourSalary';
import Register from '../Register/Register';
import './Navbar.css';

function Navbar() {
  const [showPfDropdown, setshowPfDropdown] = useState(false);
  const [showDaDropdown, setShowDaDropdown] = useState(false);
  const [showHraDropdown, setShowHraDropdown] = useState(false);

  const togglePfDropdown = () => {
    setshowPfDropdown(!showPfDropdown);
  };

  const toggleDaDropdown = () => {
    setShowDaDropdown(!showDaDropdown);
  };

  const toggleHraDropdown = () => {
    setShowHraDropdown(!showHraDropdown);
  };


  return (
    <>

      <div className="navbar">
        <nav>
          {/* <img src="https://lh3.googleusercontent.com/proxy/47cg-CghK5g7wQgwMxyAknhj96S89Df7tqbQ0UJl7uk9-7kiZpq8Q140qLQ09fZ9UljwJqPn0lSmGN9eGrz5PDwsekQ_nflQp_8Un0Ypm41pnj3WUxM6C5vqMag9nQ" width="100" height="65"></img> */}
          <p>
            MITTAPALI SPINNERS PVT.LTD
          </p>
          <ul>
            <li>
              <Link class="name" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link class="name" to="/GetYourSalary">
                GetYourSalary
              </Link>
            </li>
            <li>
              <Link class="name" to="/Employee">
                Employee
              </Link>
            </li>
            <li>
              <div className="dropdown" onMouseEnter={toggleDaDropdown} onMouseLeave={toggleDaDropdown}>
                <Link className="name" to="/Da">DA</Link>
                {showDaDropdown && (
                  <div className="dropdown-content">
                    <Link to="/Da">Insert</Link>
                    <Link to="/Da">Read</Link>
                    <Link to="/Da">Update</Link>
                    <Link to="/Da">Delete</Link>
                    {/* Add more links related to DA */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown" onMouseEnter={toggleHraDropdown} onMouseLeave={toggleHraDropdown}>
                <Link class="name" to="/Hra">HRA</Link>
                {showHraDropdown && (
                  <div className="dropdown-content">
                    <Link to="/Hra">Insert</Link>
                    <Link to="/Hra">Read</Link>
                    <Link to="/Hra">Update</Link>
                    <Link to="/Hra">Delete</Link>
                    {/* Add more links related to DA */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown" onMouseEnter={togglePfDropdown} onMouseLeave={togglePfDropdown}>
                <Link className="name" to="/Pf">PF</Link>
                {showPfDropdown && (
                  <div className="dropdown-content">
                    <Link to="/Pf">Insert</Link>
                    <Link to="/Pf">Read</Link>
                    <Link to="/Pf">Update</Link>
                    <Link to="/Pf">Delete</Link>
                    {/* Add more links related to DA */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link class="name" to="/Register">SignIn/SignUp</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Employee" element={<Employee />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Hra" element={<Hra />} />
        <Route exact path="/Da" element={<Da />} />
        <Route exact path="/Pf" element={<Pf />} />
        <Route exact path="/GetYourSalary" element={<GetYourSalary />} />
        <Route exact path="/Register" element={<Register />} />
        {/* Add other routes here */}
      </Routes>

    </>
  );
}

export default Navbar;
