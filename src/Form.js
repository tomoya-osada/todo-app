import React, { Component } from 'react';

class From extends Component {
  render(){
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" placeholder="title"/><br/>
          <textarea placeholder="description" rows="3"></textarea><br/>
          <button type="submit">登録</button>
        </form>
      </div>
    )
  }
}

export default From