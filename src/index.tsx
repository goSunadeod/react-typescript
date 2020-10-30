import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './components/Demo';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <>
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/demo">Demo</a></li>
        </ul>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/demo" component={Demo}></Route>
                <Route exact path="/demo/:id" component={App}></Route>
            </Switch>
        </HashRouter>
    </>,
    document.getElementById('root')
);
