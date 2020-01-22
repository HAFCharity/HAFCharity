import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from './../TodoForm/todoForm';
import Header from './../Header/header';
import { getTodos } from './../../store/actions/todo';

export class home extends Component {
  
  componentDidMount(){
    this.props.getTodos();
  }

  render() {
    console.log(this.props.todos)
    return (
      <div>
        <Header/>
        <TodoForm/>
        <div>
        {
          this.props.todos.map((todo, i) => <div key = {i}>{todo.title}</div>)
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(home)

