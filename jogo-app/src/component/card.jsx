import React, { Component } from 'react';

class Card extends React.Component {
    render() { 
        return (<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap"></img>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>);
    }
}
 
export default Card;