import React from 'react'; 

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

  handleSubmit(e) {
    e.preventDefault();

    const post = Object.assign({}, this.state);

    this.props.createPost( { post } ).then(
      () => this.setState({ title: '', body: '' })
    );
  }

  render() {
    return (
      <div className="post-form">
        <h3>Create New Post</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              className="input"
              ref="title"
              value={this.state.title}
              placeholder="Awesome Post"
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
              placeholder="My day is going awesome!"
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


