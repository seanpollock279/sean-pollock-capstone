import React, { useRef, useState } from 'react';
import { useAuth } from '../../Contexts/AuthContexts';
import { Link, useHistory } from 'react-router-dom';
import '../SignUp/signup.scss';
import SignInHeader from '../SignInHeader/SignInHeader';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== 
        passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            console.log(emailRef.current.value)
            await signUp(emailRef.current.value, passwordRef.current.value)
            setError('')
            setLoading(true)
            history.push('/');
        } catch {
            setError("Failed to create an account")
        } 

        setLoading(false);
    }

    return (
        <>
        <SignInHeader />
        <div className="signUp">
            <form className="signUp__form" onSubmit={handleSubmit}>
            <h1 className="signUp__title">Sign Up</h1>
                <div className="signUp__group">
                    <label className="signUp__label" htmlFor="">Email</label>
                    <input className="signUp__input" type="email" ref={emailRef} required></input>
                </div>
                <div className="signUp__group">
                    <label className="signUp__label" htmlFor="">Password</label>
                    <input className="signUp__input" type="password" ref={passwordRef} required></input>
                </div>
                <div className="signUp__group">
                    <label className="signUp__label" htmlFor="">Password Confirmation</label>
                    <input className="signUp__input" type="password" ref={passwordConfirmRef} required></input>
                </div>
                <button className="signUp__btn">Sign Up</button>
            </form>
            <div className="signUp__footer">
                <h6 className="signUp__footerText">Already have an account? <Link className="signUp__link" to="/login">Log In</Link></h6> 
            </div>
        </div>
        </>
    )
}
