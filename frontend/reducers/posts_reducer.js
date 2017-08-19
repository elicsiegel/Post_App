import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap'
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo'
  },
};

const postsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_POSTS:
      nextState = {};
      action.posts.forEach(post => nextState[post.id] = post);
      return nextState;
    case RECEIVE_POST: 
      const newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    default:
      return state;
  }
};

export default postsReducer;