import React, { Component } from 'react';
const Card = ({item}) =>
{
    
    return (
    <div class="card" style={{width: 300, height: 400}}>
        <img class="card-img-top" src={item} alt="Card image cap"></img>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>);
}
 
export default Card;