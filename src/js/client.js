import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
require('../postcss/style.css');
require('react-datepicker/dist/react-datepicker.css');

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
