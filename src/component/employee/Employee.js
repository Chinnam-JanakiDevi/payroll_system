
import './Employee.css';
import axios from 'axios';
import React, { useState } from 'react';

function Employee() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const [emp_code, setemp_code] = useState('');
  const [emp_name, setemp_name] = useState('');
  const [emp_qual, setemp_qual] = useState('');
  const [emp_join_date, setemp_join_date] = useState('');
  const [emp_resignation_date, setemp_resignation_date] = useState('');
  const [emp_pan_no, setemp_pan_no] = useState('');
  const [emp_aadhar_no, setemp_aadhar_no] = useState('');
  const [emp_pf_flag, setemp_pf_flag] = useState('');
  const [emp_pf_no, setemp_pf_no] = useState('');
  const [emp_esi_no, setemp_esi_no] = useState('');
  const [emp_est_flag, setemp_est_flag] = useState('');
  const [emp_gst_no, setemp_gst_no] = useState('');
  const [emp_basic, setemp_basic] = useState('');
  const [emp_dept, setemp_dept] = useState('');
  const [emp_hno, setemp_hno] = useState('');
  const [emp_street, setemp_street] = useState('');
  const [emp_city, setemp_city] = useState('');
  const [emp_pincode, setemp_pincode] = useState('');
  const [emp_state, setemp_state] = useState('');
  const [emp_ph_no, setemp_ph_no] = useState('');
  const [emp_email_id, setemp_email_id] = useState('');
  const [emp_cons_res_flag, setemp_cons_res_flag] = useState('');
  const [emp_spl_pay, setemp_spl_pay] = useState('');
  const [emp_bank_ifsc, setemp_bank_ifsc] = useState('');
  const [emp_bank_name, setemp_bank_name] = useState('');
  const [emp_bank_account_no, setemp_bank_account_no] = useState('');
  // const [emp_spl_pay, setemp_spl_pay] = useState('');
  // const [emp_bank_ifsc, setemp_bank_ifsc] = useState('');
  // const [emp_bank_account_no, setemp_bank_account_no] = useState('');
  const handleInsert = async () => {
    try {
      await axios.post('http://localhost:3001/employee_insert', { emp_code, emp_name, emp_qual, emp_join_date, emp_resignation_date, emp_pan_no, emp_aadhar_no, emp_pf_flag, emp_pf_no, emp_esi_no, emp_est_flag, emp_gst_no, emp_basic, emp_dept, emp_hno, emp_street, emp_city, emp_pincode, emp_state, emp_ph_no, emp_email_id, emp_cons_res_flag, emp_spl_pay, emp_bank_ifsc, emp_bank_name, emp_bank_account_no });
      console.log('Data insert request sent');
      
    } catch (error) {
      console.error(error);
    }
  };
  // State for PF number

  const handleFlagChange = (e) => {
    setemp_pf_flag(e.target.value);
    // Reset PF number when the flag changes
    setemp_pf_no('');
  };
  const handleESIFlagChange = (e) => {
    setemp_est_flag(e.target.value);
    // Reset ESI number when the flag changes
    setemp_esi_no('');
  };

  return (
    <>
      {step === 1 && (
        <form className="employee-form">
        <h2>Employee Information - Step 1</h2>
        <div className="form-group">
            <label htmlFor="emp_code">Employee Code:</label>
            <input type="text" id="emp_code" value={emp_code} onChange={(e) => setemp_code(e.target.value)} required />
          </div>
          <div className="form-group">
            <label for="validationDefault02" class="form-label">Name</label>
            <input type="text" class="form-control" id="validationDefault02" value={emp_name} onChange={(e) => setemp_name(e.target.value)} required></input>
          </div>
          <div className="form-group">
            <label for="inputState" class="form-label">Qualification</label>
            <select id="inputState" class="form-select" value={emp_qual} onChange={(e) => setemp_qual(e.target.value)}>
              <option selected>Choose..</option>
              <option>M.Tech</option>
              <option>B.Tech</option>
              <option>phd</option>
            </select>
          </div>
          {/* <div className="form-group">
           <label for="inputState" class="form-label">Gender</label>
           <select id="inputState" class="form-select" value={e_code} onChange={(e) => sete_code(e.target.value)}>
             <option selected>Male</option>
             <option>Female</option>
             <option>others</option>
           </select>
         </div> */}
          <div className="form-group">
            <label for="inputPassword4" class="form-label">Join Date</label>
            <input type="date" class="form-control" id="inputPassword4" value={emp_join_date} onChange={(e) => setemp_join_date(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="validationDefaultUsername" class="form-label">PAN Number</label>
            <div class="input-group">
              <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" value={emp_pan_no} onChange={(e) => setemp_pan_no(e.target.value)} required></input>
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress" class="form-label">Aadhar Number</label>
            <input type="text" class="form-control" id="inputAddress" value={emp_aadhar_no} onChange={(e) => setemp_aadhar_no(e.target.value)}></input>
          </div>


          <div className="form-group">
            <label for="inputAddress2" class="form-label">GST Number</label>
            <input type="text" class="form-control" id="inputAddress2" value={emp_gst_no} onChange={(e) => setemp_gst_no(e.target.value)}></input>
          </div>
          {/* <div className="form-group">
           <label for="inputAddress2" class="form-label">category</label>
           <input type="text" class="form-control" id="inputAddress2" value={e_code} onChange={(e) => sete_code(e.target.value)}></input>
         </div> */}
          <div className="form-group">
            <label for="inputCity" class="form-label">Basic</label>
            <input type="text" class="form-control" id="inputCity" value={emp_basic} onChange={(e) => setemp_basic(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">phone number</label>
            <input type="text" class="form-control" id="inputZip" value={emp_ph_no} onChange={(e) => setemp_ph_no(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">Email</label>
            <input type="text" class="form-control" id="inputZip" value={emp_email_id} onChange={(e) => setemp_email_id(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputState" class="form-label">Department</label>
            <select id="inputState" class="form-select" value={emp_dept} onChange={(e) => setemp_dept(e.target.value)}>
              <option selected>Choose..</option>
              <option>cse</option>
            </select>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">HouseNo</label>
            <input type="text" class="form-control" id="inputZip" value={emp_hno} onChange={(e) => setemp_hno(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label for="inputZip" class="form-label">Street</label>
            <input type="text" class="form-control" id="inputZip" value={emp_street} onChange={(e) => setemp_street(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">City</label>
            <input type="text" class="form-control" id="inputZip" value={emp_city} onChange={(e) => setemp_city(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">PinCode</label>
            <input type="text" class="form-control" id="inputZip" value={emp_pincode} onChange={(e) => setemp_pincode(e.target.value)}></input>
          </div>
          <div className="button-container">
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="employee-form">
        <h2>Employee Information - Step 2</h2>
        <div className="form-group">
            <label htmlFor="emp_state">State:</label>
            <input type="text" id="emp_state" value={emp_state} onChange={(e) => setemp_state(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label for="inputState" class="form-label">Consolidated/Regular Flag</label>
            <select id="inputState" class="form-select" value={emp_cons_res_flag} onChange={(e) => setemp_cons_res_flag(e.target.value)}>
              <option selected>Choose..</option>
              <option>c</option>
              <option>r</option>
            </select>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">special pay</label>
            <input type="text" class="form-control" id="inputZip" value={emp_spl_pay} onChange={(e) => setemp_spl_pay(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">Bank Name</label>
            <input type="text" class="form-control" id="inputZip" value={emp_bank_name} onChange={(e) => setemp_bank_name(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">Account Number</label>
            <input type="text" class="form-control" id="inputZip" value={emp_bank_account_no} onChange={(e) => setemp_bank_account_no(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">Bank IFSC</label>
            <input type="text" class="form-control" id="inputZip" value={emp_bank_ifsc} onChange={(e) => setemp_bank_ifsc(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="inputZip" class="form-label">Resignation Date</label>
            <input type="date" class="form-control" id="inputZip" value={emp_resignation_date} onChange={(e) => setemp_resignation_date(e.target.value)}></input>
          </div><br />
          <div >
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                PF flag
              </label>
              <select
                id="inputState"
                className="form-select"
                value={emp_pf_flag}
                onChange={handleFlagChange}
              >
                <option value="">Select</option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            {emp_pf_flag === 'y' && (
              <div className="col-md-4">
                <label htmlFor="inputAddress" className="form-label">
                  PF number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  value={emp_pf_no}
                  onChange={(e) => setemp_pf_no(e.target.value)}
                ></input>
              </div>
            )}
          </div>
          <div >
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                ESI flag
              </label>
              <select
                id="inputState"
                className="form-select"
                value={emp_est_flag}
                onChange={handleESIFlagChange}
              >
                <option value="">Select</option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            {emp_est_flag === 'y' && (
              <div className="col-md-4">
                <label htmlFor="inputAddress2" className="form-label">
                  ESI number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  value={emp_esi_no}
                  onChange={(e) => setemp_esi_no(e.target.value)}
                ></input>
              </div>
            )}
          </div>
          <div className="button-container">
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={handleInsert}>
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Employee;

//import './Employee.css'
// import axios from 'axios';
// import React, { useState } from 'react';

// function Employee() {
//   const [emp_code, setemp_code] = useState('');
//   const [emp_name, setemp_name] = useState('');
//   const [emp_qual, setemp_qual] = useState('');
//   const [emp_join_date, setemp_join_date] = useState('');
//   const [emp_resign_date, setemp_resign_date] = useState('');
//   const [emp_pan_no, setemp_pan_no] = useState('');
//   const [emp_aadhar_no, setemp_aadhar_no] = useState('');
//   const [emp_pf_flag, setemp_pf_flag] = useState('');
//   const [emp_pf_no, setemp_pf_no] = useState('');
//   const [emp_esi_no, setemp_esi_no] = useState('');
//   const [emp_est_flag, setemp_est_flag] = useState('');
//   const [emp_gst_no, setemp_gst_no] = useState('');
//   const [emp_basic, setemp_basic] = useState('');
//   const [emp_dept, setemp_dept] = useState('');
//   const [emp_hno, setemp_hno] = useState('');
//   const [emp_street, setemp_street] = useState('');
//   const [emp_city, setemp_city] = useState('');
//   const [emp_pincode, setemp_pincode] = useState('');
//   const [emp_state, setemp_state] = useState('');
//   const [emp_ph_no, setemp_ph_no] = useState('');
//   const [emp_email_id, setemp_email_id] = useState('');
//   const [emp_cons_res_flag, setemp_cons_res_flag] = useState('');
//   const [emp_spl_pay, setemp_spl_pay] = useState('');
//   const [emp_bank_ifsc, setemp_bank_ifsc] = useState('');
//   const [emp_bank_name, setemp_bank_name] = useState('');
//   const [emp_bank_account_no, setemp_bank_account_no] = useState('');
//   // const [emp_spl_pay, setemp_spl_pay] = useState('');
//   // const [emp_bank_ifsc, setemp_bank_ifsc] = useState('');
//   // const [emp_bank_account_no, setemp_bank_account_no] = useState('');
//   const handleInsert = async () => {
//     try {
//       await axios.post('http://localhost:3001/employee_insert', { emp_code, emp_name, emp_qual, emp_join_date, emp_resign_date, emp_pan_no, emp_aadhar_no, emp_pf_flag, emp_pf_no, emp_esi_no, emp_est_flag, emp_gst_no, emp_basic, emp_dept, emp_hno, emp_street, emp_city, emp_pincode, emp_state, emp_ph_no, emp_email_id, emp_cons_res_flag, emp_spl_pay, emp_bank_ifsc, emp_bank_name, emp_bank_account_no });
//       console.log('Data insert request sent');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // State for PF number

//   const handleFlagChange = (e) => {
//     setemp_pf_flag(e.target.value);
//     // Reset PF number when the flag changes
//     setemp_pf_no('');
//   };
//   const handleESIFlagChange = (e) => {
//     setemp_est_flag(e.target.value);
//     // Reset ESI number when the flag changes
//     setemp_esi_no('');
//   };
//   return (
//     <>
//       <form class="row g-3 p-3">
//         <div class="col-md-4">
//           <label for="validationDefault01" class="form-label">Employee_code</label>
//           <input type="text" class="form-control" id="validationDefault01" value={emp_code} onChange={(e) => setemp_code(e.target.value)} required></input>
//         </div>
//         <div class="col-md-4">
//           <label for="validationDefault02" class="form-label">Name</label>
//           <input type="text" class="form-control" id="validationDefault02" value={emp_name} onChange={(e) => setemp_name(e.target.value)} required></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputState" class="form-label">Qualification</label>
//           <select id="inputState" class="form-select" value={emp_qual} onChange={(e) => setemp_qual(e.target.value)}>
//             <option selected>Choose..</option>
//             <option>M.Tech</option>
//             <option>B.Tech</option>
//             <option>phd</option>
//           </select>
//         </div>
//         {/* <div class="col-md-4">
//           <label for="inputState" class="form-label">Gender</label>
//           <select id="inputState" class="form-select" value={e_code} onChange={(e) => sete_code(e.target.value)}>
//             <option selected>Male</option>
//             <option>Female</option>
//             <option>others</option>
//           </select>
//         </div> */}
//         <div class="col-md-4">
//           <label for="inputPassword4" class="form-label">Join Date</label>
//           <input type="date" class="form-control" id="inputPassword4" value={emp_join_date} onChange={(e) => setemp_join_date(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="validationDefaultUsername" class="form-label">PAN Number</label>
//           <div class="input-group">
//             <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" value={emp_pan_no} onChange={(e) => setemp_pan_no(e.target.value)} required></input>
//           </div>
//         </div>
//         <div class="col-md-4">
//           <label for="inputAddress" class="form-label">Aadhar Number</label>
//           <input type="text" class="form-control" id="inputAddress" value={emp_aadhar_no} onChange={(e) => setemp_aadhar_no(e.target.value)}></input>
//         </div>


//         <div class="col-md-4">
//           <label for="inputAddress2" class="form-label">GST Number</label>
//           <input type="text" class="form-control" id="inputAddress2" value={emp_gst_no} onChange={(e) => setemp_gst_no(e.target.value)}></input>
//         </div>
//         {/* <div class="col-md-4">
//           <label for="inputAddress2" class="form-label">category</label>
//           <input type="text" class="form-control" id="inputAddress2" value={e_code} onChange={(e) => sete_code(e.target.value)}></input>
//         </div> */}
//         <div class="col-md-4">
//           <label for="inputCity" class="form-label">Basic</label>
//           <input type="text" class="form-control" id="inputCity" value={emp_basic} onChange={(e) => setemp_basic(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputState" class="form-label">Department</label>
//           <select id="inputState" class="form-select" value={emp_dept} onChange={(e) => setemp_dept(e.target.value)}>
//             <option selected>Choose..</option>
//             <option>cse</option>
//           </select>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">HouseNo</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_hno} onChange={(e) => setemp_hno(e.target.value)}></input>
//         </div>

//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">Street</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_street} onChange={(e) => setemp_street(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">City</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_city} onChange={(e) => setemp_city(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">PinCode</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_pincode} onChange={(e) => setemp_pincode(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">State</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_state} onChange={(e) => setemp_state(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">phone number</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_ph_no} onChange={(e) => setemp_ph_no(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">Email</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_email_id} onChange={(e) => setemp_email_id(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputState" class="form-label">Consolidated/Regular Flag</label>
//           <select id="inputState" class="form-select" value={emp_cons_res_flag} onChange={(e) => setemp_cons_res_flag(e.target.value)}>
//             <option selected>Choose..</option>
//             <option>c</option>
//             <option>r</option>
//           </select>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">special pay</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_spl_pay} onChange={(e) => setemp_spl_pay(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">Bank Name</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_bank_name} onChange={(e) => setemp_bank_name(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">Account Number</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_bank_account_no} onChange={(e) => setemp_bank_account_no(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">Bank IFSC</label>
//           <input type="text" class="form-control" id="inputZip" value={emp_bank_ifsc} onChange={(e) => setemp_bank_ifsc(e.target.value)}></input>
//         </div>
//         <div class="col-md-4">
//           <label for="inputZip" class="form-label">Resignation Date</label>
//           <input type="date" class="form-control" id="inputZip" value={emp_resign_date} onChange={(e) => setemp_resign_date(e.target.value)}></input>
//         </div><br />
//         <div>
//           <div className="col-md-4">
//             <label htmlFor="inputState" className="form-label">
//               PF flag
//             </label>
//             <select
//               id="inputState"
//               className="form-select"
//               value={emp_pf_flag}
//               onChange={handleFlagChange}
//             >
//               <option value="">Select</option>
//               <option value="y">Yes</option>
//               <option value="n">No</option>
//             </select>
//           </div>

//           {emp_pf_flag === 'y' && (
//             <div className="col-md-4">
//               <label htmlFor="inputAddress" className="form-label">
//                 PF number
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="inputAddress"
//                 placeholder=""
//                 value={emp_pf_no}
//                 onChange={(e) => setemp_pf_no(e.target.value)}
//               ></input>
//             </div>
//           )}
//         </div>
//         <div>
//           <div className="col-md-4">
//             <label htmlFor="inputState" className="form-label">
//               ESI flag
//             </label>
//             <select
//               id="inputState"
//               className="form-select"
//               value={emp_est_flag}
//               onChange={handleESIFlagChange}
//             >
//               <option value="">Select</option>
//               <option value="y">Yes</option>
//               <option value="n">No</option>
//             </select>
//           </div>

//           {emp_est_flag === 'y' && (
//             <div className="col-md-4">
//               <label htmlFor="inputAddress2" className="form-label">
//                 ESI number
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="inputAddress2"
//                 value={emp_esi_no}
//                 onChange={(e) => setemp_esi_no(e.target.value)}
//               ></input>
//             </div>
//           )}
//         </div>
//         <button type="button" class="btn btn-primary" onClick={handleInsert} value="submit">submit</button>
//       </form>
//     </>
//   )
// }
// export default Employee


