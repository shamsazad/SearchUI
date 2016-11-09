/**
 * Created by mac on 10/16/16.
 */
import React from "react";
import Radium from "radium";

const styles = {
    base: {
        display: 'block',
        height: '100px',
        width: '100%',
    }
}

@Radium
export default class Footer extends React.Component {
    render() {
        return (
            <div style={styles.base}>
                <footer>footer</footer>
            </div>
        );
    }
}