import { useState } from 'react';

import { login, signup } from '../../firebase';

import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';

export default function Login() {
    const [signState, setSignState] = useState('Sign In');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const userAuth = async function(e) {
        e.preventDefault();

        setLoading(true);

        if (signState === 'Sign In') {
            await login(email, password);
        } else {
            await signup(name, email, password);
        }

        setLoading(false);
    }

    return (
        <>
            {loading 
                ? (
                <div className="loading-spinner">
                    <img src={netflix_spinner} alt="" />
                </div>
                ) 
                : (
                <div className="login">
                    <img className="login-logo" src={logo} alt="Logo" />
                    <div className="login-form">
                        <h1>{signState}</h1>
                        <form onSubmit={userAuth}>
                            {signState === 'Sign Up' && (
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="Your Name"
                                />
                            )}
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Your Email"
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password"
                            />
                            <button type="submit">{signState}</button>
                            <div className="form-help">
                                <div className="remember">
                                    <input type="checkbox" />
                                    <label>Remember Me</label>
                                </div>
                                <p>Need help?</p>
                            </div>
                        </form>
                        <div className="form-switch">
                            {signState === 'Sign In' ? (
                                <p>
                                    New to Netflix?{' '}
                                    <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
                                </p>
                            ) : (
                                <p>
                                    Already have an account?{' '}
                                    <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}