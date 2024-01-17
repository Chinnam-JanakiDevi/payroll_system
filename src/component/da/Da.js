import './Da.css';
import axios from 'axios';
import React, { useState } from 'react';

const Da = () => {
    const [wef_date, setwef_date] = useState('');
    const [catg, setcatg] = useState('');
    const [da_per, setda_per] = useState('');
    const handleInsert = async () => {
        try {
            await axios.post('http://localhost:3001/da_insert', { wef_date, catg, da_per });
            console.log('Data insert request sent');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className='daform'>
                <form>
                    <div className='box'>
                        <label htmlFor='wef_date'>Wef_date:</label>
                        <input type='date' id='wef_date' value={wef_date} onChange={(e) => setwef_date(e.target.value)}></input>

                        <label htmlFor='catg'>Catg:</label>
                        <input type='text' id='catg' placeholder='Enter DA category' value={catg} onChange={(e) => setcatg(e.target.value)}></input>

                        <label htmlFor='da_per'>Da_per:</label>
                        <input type='number' id='da_per' placeholder='Enter DA percentage' value={da_per} onChange={(e) => setda_per(e.target.value)}></input>

                        <button type="button" className="btn btn-primary" onClick={handleInsert} value="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
};

export default Da;
