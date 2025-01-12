import React from "react";
import { Pexel } from "../assets/images";
import { Link } from "react-router-dom";
import "../styles/index.css";


function Header () {
    return (
        <header className="header">
            {/* <h2 style={{fontSize: 10}}>Logo header</h2> */}
            <img src={Pexel} alt="sample image" style={{width: "50px", height: 50, display: "block"}} />
            <div className='nav-link'>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link  to="/abouts">About Us</Link>
                <Link  to="/support">Support</Link>
                <Link  to="/contacts">Contact</Link>
                <Link to="/blog">Blog</Link>
            </div>

            <div>
                <button className="redbtn">Join</button>
            </div>
        </header>
    )
}

export default Header;