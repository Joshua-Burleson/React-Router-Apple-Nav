import React from 'react';
import AppData from '../app-data/subnav.json';
import SubNavItem from '../styles/SubNavItem';
import Nav from '../styles/SubNavigationBar';

const Test = props => {
    console.log(props.match.params.selection);
    return (
        <Nav>
            {AppData.menus[props.match.params.selection].map((navItem, index) => {
                return (
                <SubNavItem key = {navItem.name.concat(index)} href = {navItem.external}>
                    <img src={navItem.img} />
                    <p>{navItem.name}</p>
                    {navItem.new === false && <span>New</span>}
                </SubNavItem>
                );
            })}
        </Nav>
    )
}

export default Test; 