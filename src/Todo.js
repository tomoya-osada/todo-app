import React, { Component } from 'react'

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      desc: props.desc,
      done: props.done
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    const link = this.state.done? 'Undone' : 'Complete'
    const className = this.state.done? 'done' : null
    return (
      <li>
        <span className={className}>{this.state.title}</span>
        <a href="#" onClick={this.handleClick.bind(this)}>{link}</a>
      </li>
    )
  }
}


export default Todo