import React, { useRef, useState } from 'react';
import { useAuth } from '../../Contexts/AuthContexts';
import { Link, useHistory } from 'react-router-dom';
import '../SignUp/signup.scss';
import SignInHeader from '../SignInHeader/SignInHeader';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    // const { logIn, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        // if (passwordRef.current.value !== 
        // passwordConfirmRef.current.value) {
        //     return setError('Passwords do not match');
        // }

        // try {
        //     setError('')
        //     setLoading(true)
        //     await signUp(emailRef.current.value, passwordRef.current.value)
        //     history.push('/');
        // } catch {
        //     setError("Failed to create an account")
        // } 

        // setLoading(false);
    }

    return (
        <>
        <SignInHeader />
        <div className="signUp">
            <form className="signUp__form">
                <div className="signUp__group">
                    <label className="signUp__label" htmlFor="">Email</label>
                    <input className="signUp__input" type="email" ref={emailRef} required></input>
                </div>
                <div className="signUp__group">
                    <label className="signUp__label" htmlFor="">Password</label>
                    <input className="signUp__input" type="password" ref={passwordRef} required></input>
                </div>
                <button className="signUp__btn">Log In</button>
            </form>
            <div className="signUp__footer">
                <h6 className="signUp__footerText">Need an account? <Link className="signUp__link" to="/login">Sign Up</Link></h6> 
            </div>
        </div>
        </>
    )
}
