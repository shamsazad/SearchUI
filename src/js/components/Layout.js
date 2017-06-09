/**
 * Created by mac on 9/12/16.
 */
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Layout = () => {
    return(
        <div>
            <Header />
            <div className="container">
                <SearchBar />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
