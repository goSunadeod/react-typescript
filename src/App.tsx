import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';
import axios from 'axios'

class App extends Component {
    componentDidMount(): void {
        axios.defaults.baseURL = '/api'
        axios({
            method: "get",
            url: '/test'
        })
    }

    render() {
    return (
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
    );
  }
}

export default App;
