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

        <div class="showcase">
            <video src ={ Nature } muted loop autoPlay></video>
                <div class="title-text">
                    <h2 class="bigger-title">protect our home</h2>
                    <h3 class="bigger-title">and our loved ones...</h3>
                    <h4 class="subtitle">Earth Day Sale All Items 50% off !!!</h4>
                    <button href="" class="why-btn"><p>why</p></button> <button href="" class="donate-btn"><p>donate</p></button>
                </div>
        </div>
        
    </>);
}
 
export default HeroSelection ;