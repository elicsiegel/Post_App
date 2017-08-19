import { connect } from 'react-redux';
import PostList from './post_list';

import { allPosts } from '../reducers/selectors';
import { createPost, deletePost, updatePost, removePost, fetchPosts } from '../actions/post_actions';

const mapStateToProps = state => ({
  posts: allPosts(state)
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: (post) => dispatch(deletePost(post)), 
  requestPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);