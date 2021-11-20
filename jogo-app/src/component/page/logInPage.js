import React from 'react';
import LogInForm from '../logInForm';
import bgImage from '../Earth.jpeg';
import './logInPage.css';


export default function Login(){
    return (
        <>
        <div className="child"></div>
        <div className="container">
            <div className="login-component">
                <LogInForm/>
            </div>
            
        </div>
        <div className="child"></div>
        </>
    );
}