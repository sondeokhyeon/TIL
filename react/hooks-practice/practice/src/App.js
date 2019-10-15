import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Header";
import State from "./use/State";

const App = () => {
    return (
        <Router>
             <Header/>
             <Route path="/" component={State}/>
        </Router>
    )
}

export default App

