import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "./containers";

const title = 'My Minimal dd';

ReactDOM.render(
  <AppContainer/>,
  document.getElementById('app')
);

module.hot.accept();