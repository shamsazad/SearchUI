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
                </div>
                <SearchBar />
                <div className="jumbotron jumbotron-fluid">
                </div>
                <div className="jumbotron">
                </div>
                <Footer/>
            </div>
        )
    }
}