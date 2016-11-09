/**
 * Created by mac on 10/16/16.
 */
import React from "react";
import Radium from 'radium';

const styles = {
    base: {
        textAlign: 'center'
    }
}

@Radium
export default class Title extends React.Component {
    render() {
        return (
            <h1 style={styles.base}>Search Appartment</h1>
        );
    }
}