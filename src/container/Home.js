import React from 'react';
import './Home.css';
import {MainPage} from '../components/MainPage';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

const placeHolder = ()=>{
    return (
        // this is simple placeholder for different pages, 
        // replace this component reference as you make the newer components available.
        <div style={{padding:200}}>
            <h4 style={{textAlign:'center'}}>This is just a placeHolder</h4>
            <p style={{textAlign:'center'}}>Please look at code for further instructions</p>
            <a style={{textAlign:'center',display:'block'}} href="/">Go Back</a>
        </div>
    )
}

export const Home = ()=>{
    return(
        <Router>
            <div className="main-page">
                    <Route exact path="/" component={MainPage} />
                    <Route path="/about" component={placeHolder} />
                    <Route path="/category" component={placeHolder} />
                    <Route exact path="/request" component={placeHolder} />
                    <Route path="/signup" component={placeHolder} />
                    <Route exact path="/login" component={placeHolder} />
                
            </div>
        </Router>
    )
}