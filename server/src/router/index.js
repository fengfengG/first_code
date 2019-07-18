import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from '../containers/home/index';
import Login from '../containers/login/index';

function RouterView({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default RouterView;
