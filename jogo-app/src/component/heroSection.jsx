import React, { Component } from 'react';
import Nature from '../videos/natures.mp4';
import '../jogo-shop-home.css';
const HeroSelection = () =>
{
    
    return (
        <>
        <header className="hero-section">
            <div className="content">
                {/* Might contain something */}
            </div>
        </header>

    
        <video src ={ Nature } muted loop autoPlay className="vid-nature"></video>
    </>);
}
 
export default HeroSelection ;