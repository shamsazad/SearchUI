/**
 * Created by mac on 10/16/16.
 */
import React from "react";
import Title from "./Header/Title";
import Login from "./Header/Login"

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-light bg-faded">
                    <a className="navbar-brand" href="#">
                        <Title />
                    </a>
                    <Login/>
            </nav>
        );
    }
}