import { useContext, useEffect, useState } from "react";

import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

export default function Login() {
    const [state, setState] = useState('Login');
    const { setShowLogin } = useContext(AppContext);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <motion.form className="relative bg-white p-10 rounded-xl text-slate-500"
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
                            type="text" 
                            placeholder="Full Name" 
                            required className="outline-none text-sm" 
                        />
                    </div>
                }

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.email_icon} />
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        required className="outline-none text-sm" 
                    />
                </div>

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.lock_icon} />
                    <input 
                        type="password" 
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