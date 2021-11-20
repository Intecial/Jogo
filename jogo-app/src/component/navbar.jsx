import React, { Component } from 'react';
import user from '../images/user.PNG';
import logo from '../images/jogo-logo.PNG';
import cart from '../images/cart.PNG';
import '../jogo-shop-nav.css';
import '../jogo-shop-home.css';
class NavBar extends React.Component {
    render() { 
        return (
        <>
        <nav style={{
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%" ,
            marginBottom: 0
        }}>
            <div className="shop-nav"> 
                <img src={ logo } className="jogo-logo" alt=""></img>
                <div className="nav-items">
                    <div className="search">
                        <input type="text" className="search-box" placeholder="  what do you want to buy ?"></input>
                        <button className="search-button">search</button>
                    </div>
                    <div className="user-points-box">
                        <span className="points">0</span> <span className="point-text">points</span>
                    </div>
                    <a href="#"><img src={ user } alt=""></img></a>
                    <a href="#"><img src={ cart } alt=""></img></a>
                    <a href="#"><img src='...' alt=""></img></a>
                </div>
            </div>
            <div className="sub-shop-nav">
                <ul className="links-container">
                    <li className="link-item"><a href="#" className="link">home</a></li>
                    <li className="link-item"><a href="#" className="link">recycled</a></li>
                    <li className="link-item"><a href="#" className="link">eco</a></li>
                </ul>
            </div>

        </nav>
        </>);
    }
}
 
export default NavBar;