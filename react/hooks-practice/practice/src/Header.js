import React from 'react';
import { Link, Switch } from "react-router-dom";
import  './scss/Header.scss'

const Header = () => {
    return (
    <Switch>
        <>  
        <header className="header">
            <span><Link to="/">SetState</Link></span>
            <span><Link to="input">SetInput</Link></span>
            <span><Link to="tabs">SetTabs</Link></span>
            <span><h2> | </h2></span>
            <span><Link to="effect">Effect</Link></span>
            <span><Link to="title">SetTitle</Link></span>
            <span><Link to="click">useClick</Link></span>
            <span><h2> | </h2></span>
            <span><Link to="confirm">useConfirm</Link></span>
            <span><Link to="leave">PreventLeave</Link></span>
        </header>
        </>
    </Switch>
    )
}


export default Header
