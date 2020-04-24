import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './components/Demo';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/demo">Demo</a></li>
      </ul>
      <HashRouter>
          <Switch>
              <Route exact path="/" component={App}></Route>
              <Route exact path="/demo" component={Demo}></Route>
          </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
