import React from 'react';

class PostDetail extends React.Component {

  componentDidMount() {
    const post = this.props.fetchPost(this.props.match.params.postId); 
  }

  componentWillReceiveProps(newProps) {
    if (newProps.post) {
      if (newProps.post.id !== +newProps.match.params.postId) {
        this.props.fetchPost(newProps.match.params.postId);
      }
    }  
  }

  render() {

    if (this.props.post) {
      return (
        <h1>Show page for {this.props.post.title}</h1>
      ); 
    }

    return (
      <div>

      </div>
    );
  }
}

export default PostDetail; 