import React, { Component } from 'react';
import Button from './button'
import Text from './text'
const SignInForm = () => 
{
    const styles = {
        width: 900
    }
        return (
            <div class="card" style = {styles}>
                <div class="card-body">
                    <h5 class="card-title">Sign Up</h5>
                    <br></br>
                    <Text>Given Name</Text>
                    <br></br>
                    <Text>Family Name</Text>
                    <br></br>
                    <Text>Phone Number</Text>
                    <br></br>
                    <Text>Email</Text>
                    <br></br>
                    <Text>Password</Text>
                    <br></br>
                    <Button>Sign Up</Button>
                    <br></br>
                </div>
            </div>
        );
}
 
export default SignInForm;