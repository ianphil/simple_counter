import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch(this.props.url)
        .then(res => res.json())
        .then(json => this.setState({data: json}));
  }
  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;
