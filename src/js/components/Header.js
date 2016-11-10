/**
 * Created by mac on 10/16/16.
 */
import React from "react";
import Title from "./Header/Title";
import Login from "./Header/Login"
import Radium from 'radium';

const styles = {
    base: {
        background: 'lightblue',
        border: 0,
        borderRadius: 0,
        color: 'white',
        padding: '0.5em',
    }
};

@Radium
export default class Header extends React.Component {
    render() {
        return (
          <div style={styles.base}>
              <Title />
              <Login />
          </div>
        );
    }
}