import React from 'react'
import Logo from "./img/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    

    const menuToggle = () => {
        document.querySelector("body").classList.toggle("menu-active")
    }




    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link to="/" style={{textDecoration: "none"}} className="navbar-logo no-select">
                    <img src={Logo} alt="logo"></img>
                    <div>COINCHECK</div>
                </Link>
                <div className="navbar-links">
                    <Link to="/" style={{textDecoration: "none"}} onClick={menuToggle}>
                        <div>
                            <i className='bx bx-home'></i>Home
                        </div>
                    </Link>
                    <Link to="/cryptocurrencies" style={{textDecoration: "none"}} onClick={menuToggle}>
                        <div>
                            <i className='bx bx-bitcoin' ></i>Cryptocurrencies
                        </div>
                    </Link>
                    <Link to="/news" style={{textDecoration: "none"}} onClick={menuToggle}>
                        <div>
                            <i className='bx bx-news' ></i>News
                        </div>
                    </Link>
                </div>
               
            </div>
            <span className="menu-icon"><i className='bx bx-menu' onClick={menuToggle}></i></span>
        </div>
    )
}

export default Navbar