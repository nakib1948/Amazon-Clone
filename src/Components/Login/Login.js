import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'

const Login = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]= useState('')
    const login=event=>{
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((auth)=>{
            navigate('/')
        })
        .catch(e=> alert(e.message))
    }

    const register=event=>{
        event.preventDefault()
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth)=>{
            navigate('/')
        })
        .catch(e=> alert(e.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />
                    <button onClick={login} type='submit' className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By Signing-in you agree to my Conditions of Service Agreement. For
                    more info see our privacy Notice, our cookies Notice and gather data.
                </p>
                <button onClick={register} className='login_registerButton'>Create Your own account</button>
            </div>
            
        </div>
    );
};

export default Login;