import React, { Component } from 'react';

const Text = ({ children, type }) =>
{
    return (
        <div class="form-group">
            <input type={ type } class="form-control" placeholder={ children }></input>
        </div>
    )
}

export default Text;