import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "./containers";
import { Provider } from 'react-redux';
import store from "./store";
const title = 'My Minimal dd';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();