import React from 'react';
import {Route} from 'react-router-dom';
import Test from './SubNav';

const SubRouter = props => {
    return (
        <section className = "router">

            {/* External Links */}
            <Route path ="/support" component = {() => {
                window.location.href = 'https://www.apple.com/support/';
                return null;
            }} />

            <Route path = "/apple" component = {() => {
                window.location.href = "https://www.apple.com/";
                return null;
            }} />

            <Route path = "/search" component = {() => {
                window.location.href = "https://www.apple.com/us/search";
                return null;
            }} /> */}

            <Route path = "/shop" component = {() => {
                window.location.href = "https://www.apple.com/us/shop/goto/bag";
                return null;
            }} />

            {/* Internal Links */}
            <Route path="/:selection" render = {props => <Test {...props} />} />
        </section>
        
    );
};

export default SubRouter;