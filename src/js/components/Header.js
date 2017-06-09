/**
 * Created by mac on 10/16/16.
 */
import React from "react";


const Header = () => {
    return (
        <header className="header">
            <div className="box branding">
                <a href="#home">
                    <img className="title" src="../../../images/logo.png" alt="Logo - Search" />
                </a>
            </div>
            <div className="box nav">
                <nav>
                    <ul className="navbar">
                        <li className="nav-item"><a href="Login" >Login</a></li>
                        <li className="nav-item"><a href="Signup.html" >Sign UP </a></li>
                        <li className="nav-item"><a href="Help" >Help</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;
