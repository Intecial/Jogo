import React, { Component } from 'react';

const Button = ({ children }) =>
{
    return(
        <button className="btn btn-primary"> { children } </button>
    )
}
 
export default Button;