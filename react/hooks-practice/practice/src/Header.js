import React from 'react';
import { Link, Switch } from "react-router-dom";
import  './scss/Header.scss'

const Header = () => (
    <Switch>  
        <div className="header">
                <span><Link to="/">SetState</Link></span>
                <span><Link to="input">SetInput</Link></span>
        </div>
        <hr/>
    </Switch>
)

export default Header
