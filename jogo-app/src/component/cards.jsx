import React, { Component } from 'react';
import products from './exampledata';
import Card from './card';
import './cards.css';
const Cards = ({src}) =>
{
    
    return (
        <div className="shops">
            {products.map((item) => (
                    <Card item={item.img} key={item.id}></Card>
                )
            )}
        </div>
    )
}
 
export default Cards;