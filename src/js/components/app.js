import React, { Component } from 'react';
import Header from "./Header";
import SearchBar from './SearchBar';
import Footer from "./Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron">
                    <SearchBar />
                </div>
                <div className="jumbotron jumbotron-fluid">
                </div>
                <Footer/>
            </div>
        )
    }
}