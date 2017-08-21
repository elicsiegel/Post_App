import { connect } from 'react-redux';
import PostForm from './post_form';
import { allPosts } from '../reducers/selectors';

import { fetchPost, updatePost } from '../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    posts: allPosts(state)
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: (post) => dispatch(deletePost(post)), 
  requestPosts: () => dispatch(fetchPosts()), 
  fetchPost: (post) => dispatch(fetchPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);