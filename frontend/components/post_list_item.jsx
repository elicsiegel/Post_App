import React from 'react'; 

class PostListItem extends React.Component {

  render() {
    return (
      <li>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <button onClick={() => this.props.removePost(this.props.post)}>Remove Post</button>
      </li>
    ); 
  }
}

export default PostListItem; 