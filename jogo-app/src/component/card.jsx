import React, { Component } from 'react';
import '../jogo-shop-nav.css';
import '../jogo-shop-home.css';
import Card1 from '../images/card1.jpg';
const Card = () =>
{
    
    return (
    <div className="product-card">
        <div className="product-image">
            <span className="disc-tag">50% off</span>
            <img src={ Card1 } className="product-thumb" alt=""></img>
            <button className="card-btn">add to wishlist</button>
        </div>
        <div className="product-info">
            <h2 className="product-brand">brand</h2>
            <p className="product-short-desc">blablabla</p>
            <span className="price">$20</span> <span class="actual-price">$40</span>
        </div>
    </div>);
}
 
export default Card;