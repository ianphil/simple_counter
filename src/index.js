import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import './index.css';

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App url="https://randomuser.me/api/" />,
  document.getElementById('root')
);
