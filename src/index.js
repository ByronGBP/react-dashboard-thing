// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

const container: HTMLElement | null = document.getElementById('main-container');

if (!container) {
  throw new Error(`Container doesn't exist`);
}

ReactDOM.render(<Main/>, container);
