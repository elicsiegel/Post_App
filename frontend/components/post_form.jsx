import React from 'react'; 
import { Redirect } from 'react-router-dom'; 

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  componentDidMount() {
    if (this.props.match) {
      this.props.fetchPost(this.props.match.params.postId).then( (res) => { 
        this.setState({ title: res.post.title, body: res.post.body, id: res.post.id })
      }) 
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = Object.assign({}, this.state);

    // signals if page is edit page or not
    if (this.props.match) {
      this.props.updatePost({post}).then(({post}) => {
        this.props.history.push(`/posts/${post.id}`)
      })
    } 
    else {
      this.props.createPost( { post } ).then(
        () => this.setState({ title: '', body: '' })
      );
    }

    
  }

  render() {
    let title;

    if (this.props.match) {
      title = <h3>Edit Post</h3>
    }  else {
      title = <h3>Create New Post</h3>
    } 
    return (
      <div className="post-form">
        {title}
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              className="input"
              ref="title"
              value={this.state.title}
              placeholder="Title goes here!"
              onChange={this.update('title')}
              required/>
          </label>
          <label>Body: 
            <input
              className="input"
              ref="body"
              cols='20'
              value={this.state.body}
              rows='5'
              placeholder="Body goes here!"
              onChange={this.update('body')}
              required></input>
          </label>
          <button className="create-button">Submit</button>
        </form>
      </div> 
    );
  }
}

export default PostForm; 


