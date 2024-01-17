// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { Routes, Route, Link } from 'react-router-dom';

import Navbar from'./component/navbar/Navbar';
// import Employee from './component/employee/Employee';
function App() {
    
      return (
      <>
        <Navbar />
      </>
      )}
        

export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Employee from './component/employee/Employee';'./component/employee/Employee'
// const Data = () => {
//   const [data, setData] = useState([]);
//   const [wef_date, setwef_date] = useState('');
//   const [pf_per, setpf_per] = useState('');
//   const [epf_per, setepf_per] = useState('');
//   const [fpf_per, setfpf_per] = useState('');
//   const [catg, setcatg] = useState('');
//   const [editingItem, setEditingItem] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/data');
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInsert = async () => {
//     try {
//       await axios.post('http://localhost:3001/api/data', { wef_date, pf_per, epf_per, fpf_per, catg });
//       console.log('Data insert request sent');
//       fetchData();
//       setwef_date('');
//       setpf_per('');
//       setepf_per('');
//       setfpf_per('');
//       setcatg('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!editingItem) return;

//     try {
//       await axios.put(`http://localhost:3001/api/data/${editingItem.ID}`, { wef_date, pf_per, epf_per, fpf_per, catg });
//       fetchData();
//       setwef_date('');
//       setpf_per('');
//       setepf_per('');
//       setfpf_per('');
//       setcatg('');
//       setEditingItem(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/data/${id}`);
//       console.log('Data delete request sent');
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEdit = (item) => {
//     setEditingItem(item);
//     setwef_date(item.wef_date);
//     setpf_per(item.pf_per);
//     setepf_per(item.epf_per);
//     setfpf_per(item.fpf_per);
//     setcatg(item.catg);
//   };

//   return (
    
//     <div>
//       <h1>React CRUD</h1>
//       <div>
//         <label>WEF Date:</label>
//         <input type="text" value={wef_date} onChange={(e) => setwef_date(e.target.value)} />
//       </div>
//       <div>
//         <label>PF Percentage:</label>
//         <input type="text" value={pf_per} onChange={(e) => setpf_per(e.target.value)} />
//       </div>
//       <div>
//         <label>EPF Percentage:</label>
//         <input type="text" value={epf_per} onChange={(e) => setepf_per(e.target.value)} />
//       </div>
//       <div>
//         <label>FPF Percentage:</label>
//         <input type="text" value={fpf_per} onChange={(e) => setfpf_per(e.target.value)} />
//       </div>
//       <div>
//         <label>CATG:</label>
//         <input type="text" value={catg} onChange={(e) => setcatg(e.target.value)} />
//       </div>
//       <button onClick={editingItem ? handleUpdate : handleInsert}>
//         {editingItem ? 'Update' : 'Insert'}
//       </button>
//       <ul>
//         {data.map((item) => (
//           <li key={item.ID}>
//             {item.wef_date} - {item.pf_per} - {item.epf_per} - {item.fpf_per} - {item.catg}
//             <button onClick={() => handleEdit(item)}>Edit</button>
//             <button onClick={() => handleDelete(item.ID)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Data;