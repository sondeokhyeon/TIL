import React from 'react';
import { Link, Switch } from "react-router-dom";
import  './scss/Header.scss'

const Header = () => (
    <Switch>
        <>  
        <header className="header">
            <span><Link to="/">SetState</Link></span>
            <span><Link to="input">SetInput</Link></span>
        </header>
        </>
    </Switch>
)

export default Header
