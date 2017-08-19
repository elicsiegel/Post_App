import { RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const initialState = {
    postDisplay: null
};

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_POST: 
      const requestedPost = {postDisplay: action.post.id};
      return requestedPost;
    default:
      return state;
  }
};

export default uiReducer;