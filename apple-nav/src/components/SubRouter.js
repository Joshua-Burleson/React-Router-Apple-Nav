import React from 'react';
import {Route} from 'react-router-dom';
import Test from './Test';

const SubRouter = props => {
    return (
        <Route path="/:selection" render = {props => <Test {...props} />} />
    );
};

export default SubRouter;