import React, { Component } from 'react';
import Button from './button'
import Text from './text'
const LogInForm = () => 
{
    const styles = {
        width: 900
    }
        return (
            <div class="card" style = {styles}>
                <div class="card-body">
                    <h5 class="card-title">Log In</h5>
                    <br></br>
                    <br></br>
                    <Text>Email Address</Text>
                    <br></br>
                    <br></br>
                    <Text>Password</Text>
                    <br></br>
                    <br></br>
                    <Button>Log In</Button>
                    <br></br>
                    <br></br>
                    <h6 class="card-subtitle mb-2 text-muted">Create a new account? <a href ="#">SignUp</a></h6>
                </div>
            </div>
        );
}
 
export default LogInForm;