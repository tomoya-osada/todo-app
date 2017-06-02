import React, { Component } from 'react';
import Form from './Form'
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const title = e.target.elements[0].value
    if(!title){
      return
    }
    const desc = e.target.elements[1].value
    const todos = this.state.todos.slice()

    todos.push({
      title: title,
      desl: desc,
      done: false
    })
    this.setState({ todos: todos })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
