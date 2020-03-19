import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={TodosList} />
          <Route path="/" component={AddTodo} />
        </Switch>
      </div>
    );
  }
}

export default App;
