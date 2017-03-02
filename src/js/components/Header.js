/**
 * Created by mac on 10/16/16.
 */
import React from "react";
import Title from "./Header/Title";
import Login from "./Header/Login"

export default class Header extends React.Component {
    render() {
        return (
                <nav>
                    <a href="#">
                        <Title />
                    </a>
                    <Login/>
                </nav>
        );
    }
}