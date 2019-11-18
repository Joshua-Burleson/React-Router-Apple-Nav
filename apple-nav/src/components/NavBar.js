import React from 'react';
import {NavLink, Link, Route} from 'react-router-dom';
import Nav from '../styles/NavigationBar';

const NavBar = props => {
    return (
        <Nav>

            {/* Apple External Link */}
            <Link to = "/apple"> <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg" /> </Link>
            {/* End External Link */}

            <NavLink to = "/mac">Mac</NavLink>
            <NavLink to = "/ipad">iPad</NavLink>
            <NavLink to = "/iphone">iPhone</NavLink>
            <NavLink to = "/watch">Watch</NavLink>
            <NavLink to = "/tv">TV</NavLink>
            <NavLink to = "/music">Music</NavLink>
            <NavLink to = "/support">Support</NavLink>

            {/* Search and Shop External Routes */}
            <Link to = "/search"> <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" /> </Link>

            <Link to = "/shop"> <img src = "https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" /> </Link>
            {/* external Toutes */}
            
        </Nav>
    );
};

export default NavBar;