import React from 'react';
import './logInPage.css';
import SignInForm from '../signInForm';


export default function SignUp(){
    return (
        <>
        <div className="child"></div>
        <div className="container">
            <div className="login-component">
                <SignInForm/>
            </div>
            
        </div>
        <div className="child"></div>
        </>
    );
}