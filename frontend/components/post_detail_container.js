import { connect } from 'react-redux';
import PostDetail from './post_detail';

import { fetchPost } from '../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    post: state
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (post) => dispatch(fetchPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);