import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'resetcss';
import './scss/Custom.scss';
import Header from "./Header";
import State from "./use/State";
import Input from "./use/Input";
import Tabs from "./use/Tabs";
import Effect from "./use/Effect";
import Title from "./use/Title";
import Click from "./use/Click";
import Confirm from "./use/Confirm"

const App = () => {
    return (
        <>
            <Router>   
            <Header/>
                <Route path="/confirm"    component={Confirm}/>
                <Route path="/click"    component={Click}/>
                <Route path="/title"    component={Title}/>
                <Route path="/effect"   component={Effect}/>
                <Route path="/input"    component={Input}/>
                <Route path="/tabs"     component={Tabs}/>
                <Route exact path="/"   component={State}/>
            </Router>
        </>
    )
}

export default App

