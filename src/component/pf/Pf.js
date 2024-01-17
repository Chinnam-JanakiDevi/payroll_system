import './Pf.css';
import axios from 'axios';
import React, { useState } from 'react';

const Pf = () => {
    const [wef_date, setwef_date] = useState('');
    const [pf_per, setpf_per] = useState('');
    const [epf_per, setepf_per] = useState('');
    const [fpf_per, setfpf_per] = useState('');
    const [catg, setcatg] = useState('');
    const handleInsert = async () => {
        try {
            await axios.post('http://localhost:3001/pf_insert', { wef_date, pf_per, epf_per, fpf_per, catg });
            console.log('Data insert request sent');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className='pfform'>
                <form>
                    <div className='box'>
                        <label>WEF Date:</label>
                        <input type="date" value={wef_date} onChange={(e) => setwef_date(e.target.value)} />

                        <label>PF Percentage:</label>
                        <input type="number" value={pf_per} placeholder="enter pf per" onChange={(e) => setpf_per(e.target.value)} />

                        <label>EPF Percentage:</label>
                        <input type="number" value={epf_per} placeholder="enter epf per" onChange={(e) => setepf_per(e.target.value)} />

                        <label>FPF Percentage:</label>
                        <input type="number" value={fpf_per} placeholder="enter fpf per" onChange={(e) => setfpf_per(e.target.value)} />

                        <label>CATG:</label>
                        <input type="text" value={catg} placeholder="enter category" onChange={(e) => setcatg(e.target.value)} />

                        <button type="button" className="btn btn-primary" onClick={handleInsert} value="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
};

export default Pf;
