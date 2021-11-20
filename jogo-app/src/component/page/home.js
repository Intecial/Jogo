import React from 'react';
import LogInForm from '../logInForm';
import bgImage from '../Earth.jpeg';
// import './logInPage.css';
import NavBar from '../navbar';
import HeroSelection from '../heroSection';
import Cards from '../cards';
import Card from '../card';
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