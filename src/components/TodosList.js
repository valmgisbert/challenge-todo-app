import React, {Component} from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';

class TodosList extends Component {
  state = {
    listOfTodos: []
  }

  getExistingTodos = () => {
    axios.get("http://localhost:4000/api/v1/todos")
    .then( (responseFromApi) => {
      this.setState({ listOfTodos: responseFromApi.data})})
    .catch( (err) => console.log(err));
  }

  componentDidMount() {
    this.getExistingTodos();
  }

  deleteTodo = (id) => {
    axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
    .then( () => this.getExistingTodos())
    .catch( (err) => console.log(err));
  }

  render(props) {
    const {listOfTodos} = this.state;

    return (
      <div>
          <h2>Todos</h2>
          <ul>

            {
              listOfTodos.map( (todo) => {
              return(
                <div key={todo._id} className='todo'>
                  <li>
                    <h3>{todo.title}</h3>
                    <p>{todo.body}</p>
                    <button onClick={() => this.deleteTodo(todo._id)}>
                      Delete
                    </button>
                  </li>
                </div>
              )})
            }

          </ul>
          <AddTodo />
      </div>
    )
  }
}

export default TodosList;
