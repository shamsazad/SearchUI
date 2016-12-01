/**
 * Created by bdesai on 2016-11-09.
 */
import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav float-xs-right">
                <li className="nav-item"><a className="nav-link" href="Login" >Login</a></li>
                <li className="nav-item"><a className="nav-link" href="Signup.html" >Sign UP </a></li>
                <li className="nav-item"><a className="nav-link" href="Help" >Help</a></li>
            </ul>
        );
    }
}