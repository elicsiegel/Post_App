import { connect } from 'react-redux';
import PostList from './post_list';

import { allPosts } from '../reducers/selectors';
import { createPost, removePost, fetchPosts } from '../actions/post_actions';

const mapStateToProps = state => ({
  posts: allPosts(state)
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  removePost: (post) => dispatch(removePost(post)), 
  requestPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);