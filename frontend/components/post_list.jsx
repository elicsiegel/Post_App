import React from 'react';
import PostListItem from './post_list_item'; 
import PostForm from './post_form'; 

class PostList extends React.Component {

  render() {
    const { posts, receivePost } = this.props;

    const postItems = posts.map(post => (
        <PostListItem
          key={`post-list-item${post.id}`}
          post={post}
          receivePost={ receivePost } />
      )
    );

    debugger
    return(
      <div>
        <ul className="post-list">
          { postItems }
        </ul>
        <PostForm receivePost={ receivePost }/>
      </div>
    );
  }
}

export default PostList; 