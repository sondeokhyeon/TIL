import React from 'react';
import { Link } from "react-router-dom";
import  './scss/Header.scss'

const Header = () => (
    <>
        <ul>
            <il className="btn"><Link to="/">SetState</Link></il>
            <il className="btn"><Link to="input">SetInput</Link></il>
        </ul>
        <hr/>
    </>
)

export default Header
