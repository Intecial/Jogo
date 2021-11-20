import React, { Component } from 'react';
import Card from './card';
import '../jogo-shop-nav.css';
import '../jogo-shop-home.css';
import arrow from '../images/arrow.png';
const Cards = () =>
{
    
    return (
        <>
        <section class="product">
        <h2 class="product-category">best selling</h2>

        <button class="pre-btn"><img src={arrow} alt=""></img> </button>
        <button class="post-btn"><img src={arrow} alt=""></img> </button>
        <div class="product-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        </section>
        </>
    )
}
 
export default Cards;