import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = props => {
    return (
        <div>
            <NavLink to = "/mac">Mac</NavLink>
            <NavLink to = "/ipad">iPad</NavLink>
            <NavLink to = "/iphone">iPhone</NavLink>
            <NavLink to = "/watch">Watch</NavLink>
            <NavLink to = "/tv">TV</NavLink>
            <NavLink to = "/music">Music</NavLink>
            <NavLink to = "/support">Support</NavLink>
        </div>
    );
};

export default NavBar;