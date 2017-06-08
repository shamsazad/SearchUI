/**
 * Created by mac on 9/12/16.
 */
import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <SearchBar />
                    <Footer />
                </div>
            </div>
        );
    }
}
