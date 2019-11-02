import React from 'react';
import {Route} from 'react-router-dom';
import Test from './Test';

const SubRouter = props => {
    return (
        <section className = "router">
            <Route path="/support" component = {() => {
                window.location.href = 'https://www.apple.com/support/';
                return null;
            }} />
            <Route path="/:selection" render = {props => <Test {...props} />} />
        </section>
        
    );
};

export default SubRouter;