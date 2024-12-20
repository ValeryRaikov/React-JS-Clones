import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

export default function Login() {
    const [state, setState] = useState('Login');
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passowrd, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            if (state === 'Login') {
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, passowrd });

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                } else {
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, passowrd });

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (err) {
            console.error(err.message);
            toast.error(data.message);
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <motion.form className="relative bg-white p-10 rounded-xl text-slate-500"
                onSubmit={submitHandler}
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
                <p className="text-sm">Welcome back! Please sign in to continue</p>

                {state !== 'Login' &&
                    <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                        <img src={assets.profile_icon} width={22} />
                        <input 
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="text" 
                            name="name"
                            placeholder="Full Name" 
                            required className="outline-none text-sm" 
                        />
                    </div>
                }

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.email_icon} />
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email" 
                        name="email"
                        placeholder="Email Address" 
                        required className="outline-none text-sm" 
                    />
                </div>

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.lock_icon} />
                    <input 
                        onChange={e => setPassword(e.target.value)}
                        value={passowrd}
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        required className="outline-none text-sm" 
                    />
                </div>

                <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot password?</p>

                <button className="bg-blue-600 w-full text-white py-2 rounded-full">
                    {state === 'Login' ? 'Login' : 'Create Account'}
                </button>

                {state === 'Login'
                    ? 
                    <p className="mt-5 text-center">Don't have an account?
                        <span onClick={() => setState('Sign Up')} className="text-blue-600 cursor-pointer">Sign up</span>
                    </p>
                    :
                    <p className="mt-5 text-center">Already have an account?
                        <span onClick={() => setState('Login')} className="text-blue-600 cursor-pointer">Login</span>
                    </p>
                }

                <img src={assets.cross_icon} onClick={() => setShowLogin(false)} className="absolute top-5 right-5 cursor-pointer" />
            </motion.form>
        </div>
    );
}