import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'resetcss';
import './scss/Custom.scss';
import Header from "./Header";
import State from "./use/State";
import Input from "./use/Input";

const App = () => {
    return (
        <>
            <Router>   
            <Header/>
                <Route path="/input" component={Input}/>
                <Route exact path="/" component={State}/>
            </Router>
        </>
    )
}

export default App

