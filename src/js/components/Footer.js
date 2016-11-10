/**
 * Created by mac on 10/16/16.
 */
import React from "react";
import Radium from "radium";

const styles = {
    base: {
        position: 'absolute',
        bottom: 0,
        background: 'gray',
        border: 0,
        borderRadius: 0,
        color: 'white',
        padding: '0.5em',
        width: '100%',
    },
    text: {
        textAlign: 'center',
    }
}

@Radium
export default class Footer extends React.Component {
    render() {
        return (
            <div style={styles.base}>
                <footer style={styles.text}>
                    <p>Footer</p>
                </footer>
            </div>
        );
    }
}