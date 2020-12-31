import React, { useState,useEffect } from 'react';
import './Nav.css';
import Logo from "../../../../assets/netflixClone.png";
import Fake from "../../../../assets/netflix-background.jpg";

function Nav() {
    const [show,setShow] = useState(false);

    useEffect(() => {
        let scrollEffect = () => {
            if(window.scrollY > 100) {
                setShow(true);
            }else setShow(false);
        }
        window.addEventListener('scroll', scrollEffect());
        return () => {
            window.removeEventListener("scroll", scrollEffect());
        };
    },[]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="logo_img"
                src={Logo}
                alt="Netflix Logo"
            />
            <img
                className="fake"
                src={Fake}
                alt="To be Replaced"
            />
        </div>
    )
}

export default Nav;
