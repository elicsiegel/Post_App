import React from 'react';
import PostListItem from './post_list_item'; 
import PostForm from './post_form'; 
import PostDetailContainer from './post_detail_container'; 
import { Route } from 'react-router-dom';

class PostList extends React.Component {


  componentDidMount() { 
    this.props.requestPosts();
  }

  render() {
    const { posts, receivePost, deletePost, createPost } = this.props;

    const postItems = posts.map(post => (
        <PostListItem
          key={`post-list-item${post.id}`}
          post={post}
          deletePost={ deletePost }
          receivePost={ receivePost } />
      )
    );

    
    return(
      <div className="index-page">
        <div>
          <h2>All Posts</h2>
          <ul className="post-list">
            { postItems }
          </ul>
        </div>
        <PostForm createPost={ createPost }/>
      </div>
    );
  }
}

export default PostList; 