import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Nav from '../styles/NavigationBar';

const NavBar = props => {
    return (
        <Nav>
            <Route to = "/apple" component = {() => {
                window.location.href = "https://www.apple.com/";
                return null;
            }}>
                <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" />
            </Route>
            <NavLink to = "/mac">Mac</NavLink>
            <NavLink to = "/ipad">iPad</NavLink>
            <NavLink to = "/iphone">iPhone</NavLink>
            <NavLink to = "/watch">Watch</NavLink>
            <NavLink to = "/tv">TV</NavLink>
            <NavLink to = "/music">Music</NavLink>
            <NavLink to = "/support">Support</NavLink>
        </Nav>
    );
};
//comment
export default NavBar;