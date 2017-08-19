import { connect } from 'react-redux';
import PostList from './post_list';

import { allPosts } from '../reducers/selectors';
import { receivePost, removePost, fetchPosts } from '../actions/post_actions';

const mapStateToProps = state => ({
  posts: allPosts(state)
});

const mapDispatchToProps = dispatch => ({
  receivePost: (post) => dispatch(receivePost(post)),
  removePost: (post) => dispatch(removePost(post)), 
  requestPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);