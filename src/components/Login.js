import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";

import Header from './Header'
import { checkValidateData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleSignInClick = (event) => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
        let user = '';
        if (!isSignInForm) {
            //logic to create user with email and password
            user = "Harshal Donge";
        } else {
            user = 'Harshal Donge';
        }
        navigate('/browse');
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt='log'
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                <input type='email' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                {!isSignInForm && <input type='text' placeholder='Mobile' className='p-4 my-4 w-full bg-gray-700' />}
                <input type='text' ref={password} placeholder='password' className='p-4 my-4 w-full bg-gray-700' />
                {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleSignInClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign in now'}</p>
            </form>
        </div>
    )
}

export default Login