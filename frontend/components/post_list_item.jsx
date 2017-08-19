import React from 'react'; 
import { Link } from 'react-router-dom';

class PostListItem extends React.Component {

  render() {
    return (
      <li>
        <Link to={`/posts/${this.props.post.id}`}>
          <h3>{this.props.post.title}</h3>
        </Link>
        <button onClick={() => this.props.deletePost(this.props.post)}>Remove Post</button>
      </li>
    ); 
  }
}

export default PostListItem; 