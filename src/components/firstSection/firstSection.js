import React from 'react';
import './firstSection.css';
import logo from '../../assets/netflixClone.png';
import NetflixHomePage from './NetflixHomePage/NetflixHomePage';
import NtfLandingPage from '../../container/NtfLandingPage';

const FirstSection = (props) => {
    return (
        <div className="firstSection">
            <div className="topLayer">
                <img src={logo} className="netflix_logo" alt="netflix logo" />
                <button className="sign_in">Sign in</button>
            </div>
            <section className="text_section">
                <h1 className="text_cap">Unlimited movies, TV shows, and more.</h1>
                <h3 className="sub_text">Watch anywhere. Cancel anytime.</h3>
                <p className="text_watch">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input_button">
                    <input type="email" placeholder="Email address" className="email_input1" />
                    <button className="start_btn1">
                            <a href="./NetflixHomePage/NetflixHomePage.js" target="_blank" >GET STARTED</a>
                        </button>
                </div>
            </section>
        </div>
    );
}

export default FirstSection;