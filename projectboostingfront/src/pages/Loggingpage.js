import React, { useState } from 'react';
import '../css/LogPgCss.css';

function LoggingPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 


        fetch('https://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(() => {
            console.log('Dane zostały wysłane');
        })
        .catch((error) => {
            console.error('Błąd podczas wysyłania danych:', error);
        });
    };

    return (
        <div className="loggingBG">
            <div className="d-flex justify-content-center align-items-center vh-50 bg-light rounded-4 p-1">
                <div className="p-4 shadow-lg rounded bg-white" style={{ width: '400px' }}>
                    <div className='text-center mb-4'>
                        <h2>Zaloguj się</h2>
                        <form className='mt-3' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
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
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            
                            <button type="submit" className="btn btn-primary w-75 shadow-lg">Zaloguj się</button>
                            
                            {error && <div className="text-danger mt-2">{error}</div>}

                            <div className="mb-3">
                                <small style={{ fontSize: '0.9rem' }}>
                                    <a href="#zarejestruj" className="text-primary">Zarejestruj się</a>
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoggingPage;
