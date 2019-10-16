import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import CreateTokimon from './components/CreateTokimon';
import UpdateTokimon from './components/UpdateTokimon';
import ViewTokimon from './components/ViewTokimon';
import NotFound from './components/NotFound';

export default function getRoutes(store) {
  const ensureAuthenticated = (nextState, replace) => {
    if (!store.getState().auth.token) {
      replace('/login');
    }
  };
  const skipIfAuthenticated = (nextState, replace) => {
    if (store.getState().auth.token) {
      replace('/');
    }
  };
  const clearMessages = () => {
    store.dispatch({
      type: 'CLEAR_MESSAGES'
    });
  };
  return (
    <Route path="/" component={App}>
      {/*<IndexRoute components={{title:homeSlider, main:Home}} onLeave={clearMessages}/>*/}
      <IndexRoute component={Home} onLeave={clearMessages} />
      <Route path="/create" component={CreateTokimon} onLeave={clearMessages}/>
      <Route path='/update/:id' component={UpdateTokimon} onLeave={clearMessages}/>
      <Route path='/tokimon/:id' component={ViewTokimon} onLeave={clearMessages}/>
      <Route path="*" component={NotFound} onLeave={clearMessages}/>
    </Route>
  );
}
