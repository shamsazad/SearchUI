/**
 * Created by bdesai on 2016-11-09.
 */
import React from "react";
import Radium from 'radium';

const styles = {
    base: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: 20,
    },
    each: {
        marginRight: 20
    }
}

@Radium
export default class Login extends React.Component {
    render() {
        return (
            <div style={styles.base}>
                <a href="Login" style={styles.each}>Login</a>
                <a href="Signup.html" style={styles.each}>Sign UP </a>
                <a href="Help" style={styles.each}>Help</a>
            </div>
        );
    }
}