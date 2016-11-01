/**
 * Created by mac on 9/12/16.
 */
import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Radium from 'radium';

const styles = {
    base: {
        height: '100%',
    },
}

@Radium
export default class Layout extends React.Component {
    render() {
        return (
            <div style={styles.base}>
                <Header />
                <SearchBar />
                <Footer />
            </div>
        );
    }
}
