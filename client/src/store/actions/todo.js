
import {ADD_TODO, GET_TODOS} from './constants';

export const addTodoDispatcher = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const addTodo = (todo) => async dispatch => {
    let token = localStorage.getItem('token');
    try{
        let response = await fetch('http://localhost:8000/api/todo/', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            }
        });
        console.log(response)
        if(response.status === 201){
            let result = await response.json();
            dispatch(addTodoDispatcher(result.todo));
        }
    } catch(err) {
        console.log(err);
    }
}

const getTodosDispatcher = (todos) => ({
    type: GET_TODOS,
    payload: todos
});

export const getTodos = () => async dispatch => {
    let token = localStorage.getItem('token');
    try{
        let response = await fetch('http://localhost:8000/api/todo/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            }
        });
        console.log(response)
        if(response.status === 200){
            let result = await response.json();
            dispatch(getTodosDispatcher(result.todos));
        }
    } catch(err) {
        console.log(err);
    }
}