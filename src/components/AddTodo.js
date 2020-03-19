import React, {Component} from 'react';
import axios from 'axios';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", isFormShowing: false};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {title, body} = this.state;

    axios.post("http://localhost:4000/api/v1/todos", {title, body})
      .then( () => {
        this.setState({title: "", body: ""})
        this.props.getExistingTodos();
      })
      .catch( (err) => console.log(err));
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  render(){
    return (
      <div>

          <form>
            <label>Title</label>
            <input type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange} />
            <br />
            <label>Add details</label>
            <input type="text"
              name="body"
              value={this.state.body}
              onChange={(e) => this.handleChange(e)} />
            <br />
            <button onClick={this.handleSubmit}>Add</button>
          </form>
      </div>
    )
  }
}

export default AddTodo;