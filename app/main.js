import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';

const store = configureStore(window.INITIAL_STATE);
function handleUpdate() {
  let {
    action
  } = this.state.location;

  if (action === 'PUSH') {
    window.scrollTo(0, 0);
  }

}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)} onUpdate={handleUpdate}/>
  </Provider>,
  document.getElementById('app')
);
