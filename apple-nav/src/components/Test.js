import React from 'react';
import AppData from '../app-data/subnav.json';

const Test = props => {
    console.log(props.match.params.selection);
    return (
        <nav>
            {AppData.menus[props.match.params.selection].map((navItem, index) => {
                return (<div key = {navItem.name.concat(index)}>
                    <h3>{navItem.name}</h3>
                    <img src={navItem.img} />
                    {navItem.new === false && <p>New</p>}
                    {navItem.external && <a href={navItem.external}>{navItem.name}</a>}
                </div>);
            })}
        </nav>
    )
}

export default Test; 