import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './app';
import './styles/global-style.css';

const Render = () => {
  return <Dashboard />;
};

ReactDOM.render(<Render />, document.querySelector('#root'));
