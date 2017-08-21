import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PostListContainer from './components/post_list_container'; 
import PostDetailContainer from './components/post_detail_container';
import PostFormContainer from './components/post_form_container'; 

import { receivePost, receivePosts, fetchPosts, fetchPost } from './actions/post_actions'; 

const App = () => (
  <div className="app">
    <Route path="/" exact component={PostListContainer} />
    <Route path="/posts/:postId/edit" component={PostFormContainer} />
    <Route exact path="/posts/:postId" component={PostDetailContainer} />
    
  </div>
);

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store; 
  window.receivePost = receivePost;
  window.fetchPost = fetchPost; 
  window.receivePosts = receivePosts;
  window.fetchPosts = fetchPosts;  

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});