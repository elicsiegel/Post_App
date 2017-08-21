import React from 'react'; 
import { Link } from 'react-router-dom';

class PostListItem extends React.Component {

  render() {
    return (
      <li>
        <div className="post-item">
          <Link to={`/posts/${this.props.post.id}`}>
            <h3>{this.props.post.title}</h3>
          </Link>
          <Link to={`/posts/${this.props.post.id}/edit`}>
            <h3>Edit</h3>
          </Link>
          <button onClick={() => this.props.deletePost(this.props.post)}>Delete</button>
        </div>
      </li>
    ); 
  }
}

export default PostListItem; 