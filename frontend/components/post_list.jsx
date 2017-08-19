import React from 'react';
import PostListItem from './post_list_item'; 
import PostForm from './post_form'; 

class PostList extends React.Component {


  componentDidMount() { 
    this.props.requestPosts();
  }

  render() {
    const { posts, receivePost, removePost } = this.props;

    const postItems = posts.map(post => (
        <PostListItem
          key={`post-list-item${post.id}`}
          post={post}
          removePost={ removePost }
          receivePost={ receivePost } />
      )
    );

    
    return(
      <div>
        <h2>Posts</h2>
        <ul className="post-list">
          { postItems }
        </ul>
        <PostForm receivePost={ receivePost }/>
      </div>
    );
  }
}

export default PostList; 