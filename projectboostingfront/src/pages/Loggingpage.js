import '../css/LogPgCss.css'
import React, { useState } from 'react';

function LoggingPage()
{
    return(
        <div className="loggingBG">
            <div className="d-flex justify-content-center align-items-center vh-50 bg-light rounded-4 " style={{padding: "10px"}}>
                <div className="p-4 shadow-lg rounded bg-white" style={{ width: '400px' }}>
                    <div className='text-center mb-4'>
                        <h2>Formularz logowania</h2>
                        <form className='mt-3'>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-50 shadow-lg">Zaloguj się</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
        
}

export default LoggingPage;