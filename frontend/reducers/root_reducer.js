import { combineReducers } from 'redux';

import postsReducer from './posts_reducer';
import uiReducer from './ui_reducer'; 

const rootReducer = combineReducers({
  ui: uiReducer,
  posts: postsReducer
 });

export default rootReducer;