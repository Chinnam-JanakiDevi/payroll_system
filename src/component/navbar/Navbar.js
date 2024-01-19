import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Employee from '../employee/Employee';
import Home from '../home/Home';
import Hra from '../hra/Hra';
import Da from '../da/Da';
import Pf from '../pf/Pf';
import GetYourSalary from '../GetYourSalary/GetYourSalary';
import './Navbar.css';

function Navbar() {
  //   return (
  //     <>
  //       <div className="navbar">
  //         <h1><b>PayRoll</b></h1>
  //         <nav>
  //           <ul>
  //             <li>
  //               <Link to="/Home">Home</Link>
  //               <Link to="/Employee">Employee</Link>
  //               <Link to="/Hra">Hra</Link>
  //               <Link to="/Da">Da Table</Link>
  //               <Link to="/Pf">Pf Table</Link>
  //             </li>
  //             {/* Add other navigation links here */}
  //           </ul>
  //         </nav>
  //       </div>
  //       <Routes>
  //         <Route exact path="/Employee" element={<Employee />} />
  //         <Route exact path="/Home" element={<Home />} />
  //         <Route exact path="/Hra" element={<Hra />} />
  //         <Route exact path="/Da" element={<Da />} />
  //         <Route exact path="/Pf" element={<Pf />} />
  //         {/* Add other routes here */}
  //       </Routes>
  //     </>
  //   );
  // }
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
              <Link class="name" to="/Da">
                DA
              </Link>
            </li>
            <li>
              <Link class="name" to="/Hra">
                HRA
              </Link>
            </li>

            <li>
              <Link className="name" to="/Pf">
                PF
              </Link>
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

        {/* Add other routes here */}
      </Routes>

    </>
  );
}

export default Navbar;
