import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './../../store/actions/todo';

export class todoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    handleTextChange(e){
        let text = e.target.value;
        this.setState(() => ({text}));
    }

    onAddTodo(e){
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState(() => ({text: ''}))
    }

    render() {
        return (
            <form onSubmit = {this.onAddTodo}>
                <input type = 'text' value = {this.state.text} onChange = {this.handleTextChange} />
                <button>Add</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(todoForm)
