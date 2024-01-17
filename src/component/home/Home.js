import React, { useState } from 'react';

const Home = () => {
    const [emp_esi_flag, setemp_esi_flag] = useState(''); // State for ESI flag
    const [emp_esi_no, setemp_esi_no] = useState('');     // State for ESI number

    const handleESIFlagChange = (e) => {
        setemp_esi_flag(e.target.value);
        // Reset ESI number when the flag changes
        setemp_esi_no('');
    };

    return (
        <div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                    ESI flag
                </label>
                <select
                    id="inputState"
                    className="form-select"
                    value={emp_esi_flag}
                    onChange={handleESIFlagChange}
                >
                    <option value="">Select</option>
                    <option value="y">Yes</option>
                    <option value="n">No</option>
                </select>
            </div>

            {emp_esi_flag === 'y' && (
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
    );
};

export default Home;
