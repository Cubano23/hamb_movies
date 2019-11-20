import React from 'react';
import ReactDOM from 'react-dom';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render( < BrowserRouter > < App /> </BrowserRouter> , document.getElementById('root'));
registerServiceWorker();
