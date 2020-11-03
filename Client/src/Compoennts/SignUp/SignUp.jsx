import React, { useRef, useState } from 'react';
import { useAuth } from '../../Contexts/AuthContexts';
import { Link, useHistory } from 'react-router-dom';
import '../SignUp/signup.scss';
import SignInHeader from '../SignInHeader/SignInHeader';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    // const { signUp, currentUser } = useAuth();
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
        <div className="body">
            <form>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" ref={emailRef} required></input>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" ref={passwordRef} required></input>
                </div>
                <div>
                    <label htmlFor="">Password Confirmation</label>
                    <input type="password" ref={passwordConfirmRef} required></input>
                </div>
                <button>Sign Up</button>
            </form>
            <div>
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </div>
        </>
    )
}
