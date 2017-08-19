import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { receivePost, receivePosts } from './actions/post_actions'; 

// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store; 
  window.receivePost = receivePost;
  window.receivePosts = receivePosts; 
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hello</h1>, root);
});