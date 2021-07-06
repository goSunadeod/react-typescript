import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './components/Demo';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <>
        <ul>
            <li><a href="#/" data-xt="35">Home</a></li>
            <li><a href="#/demo" data-xt="36">Demo</a></li>
        </ul>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} data-xt="37"></Route>
                <Route exact path="/demo" component={Demo} data-xt="38"></Route>
                <Route exact path="/demo/:id" component={App} data-xt="39"></Route>
            </Switch>
        </HashRouter>
    </>,
    document.getElementById('root')
);
