/**
 * Created by bdesai on 2016-11-09.
 */
import React from "react";
import Radium from 'radium';

const styles = {
    base: {

    },
    each: {

    }
}

@Radium
export default class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <a href="Login" >Login</a>
                <a href="Signup.html" >Sign UP </a>
                <a href="Help" >Help</a>
            </div>
        );
    }
}