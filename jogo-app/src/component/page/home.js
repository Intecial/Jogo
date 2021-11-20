import React from 'react';
// import './logInPage.css';
import NavBar from '../navbar';
import HeroSelection from '../heroSection';
import Cards from '../cards';
import '../../jogo-shop-home.css';
export default function Home(){
    return (
        <>
        <NavBar className='navbar'/>
        <HeroSelection className='hero-section'/>
        <Cards className='product'/>
        </>
    );
}