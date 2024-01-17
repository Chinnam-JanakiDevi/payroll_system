import './Hra.css';
import axios from 'axios';
import React, { useState } from 'react';

const Hra = () => {
    const [wef_date, setwef_date] = useState('');
    const [catg, setcatg] = useState('');
    const [hra_per, sethra_per] = useState('');
    const handleInsert = async () => {
        try {
            await axios.post('http://localhost:3001/hra_insert', { wef_date, catg, hra_per });
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
                        <input type='text' id='catg' placeholder='Enter hra category' value={catg} onChange={(e) => setcatg(e.target.value)}></input>

                        <label htmlFor='hra_per'>hra per:</label>
                        <input type='number' id='hra_per' placeholder='Enter hra percentage' value={hra_per} onChange={(e) => sethra_per(e.target.value)}></input>

                        <button type="button" className="btn btn-primary" onClick={handleInsert} value="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
};

export default Hra;
