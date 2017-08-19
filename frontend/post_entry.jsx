import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import { receivePost, receivePosts } from './actions/post_actions'; 


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PostListContainer} />
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store; 
  window.receivePost = receivePost;
  window.receivePosts = receivePosts; 

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});