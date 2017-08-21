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
  updatePost: post => dispatch(updatePost(post)),
  fetchPost: (post) => dispatch(fetchPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);