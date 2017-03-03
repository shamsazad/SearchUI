/**
 * Created by mac on 10/16/16.
 */
import React from "react";
import Title from "./Header/Title";
import Login from "./Header/Login"

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <div className="nav-elements">
                        <div className="branding">
                            <a href="#home">
                                <Title />
                            </a>
                        </div>
                    <Login/>
                    </div>
                </nav>
            </header>

        );
    }
}