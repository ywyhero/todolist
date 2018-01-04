import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, CHANGE_TODO, DELETE_DONE, CHANGE_DONE } from './type'

function todos (state = [], action) {
    switch (action.type) {
        case ADD_TODO :
            return [
                ...state, 
                action.text
            ]
        case DELETE_TODO:
            let delete_todos = state.filter(item => item.done === false)
            let delete_dones = state.filter(item => item.done)
            delete_todos.splice(action.index, 1);
            return [...delete_todos, ...delete_dones]
        case CHANGE_TODO:
            let change_todos = state.filter(item => item.done === false)
            let change_todo = change_todos[action.index];
            change_todos.splice(action.index, 1);
            change_todo = {...change_todo,  done: true}
            let change_dones = state.filter(item => item.done)
            change_dones = [...change_dones, change_todo]
            return [...change_todos, ...change_dones]
        case CHANGE_DONE:
            let change_dones1 = state.filter(item => item.done)
            let change_done = change_dones1[action.index];
            change_dones1.splice(action.index, 1);
            change_done = {...change_done,  done: false}
            let change_todos1 = state.filter(item => item.done === false)
            change_todos1 = [...change_todos1, change_done]
            return [...change_todos1, ...change_dones1]
        case DELETE_DONE:
            let delete_todos1 = state.filter(item => item.done === false)
            let delete_dones1 = state.filter(item => item.done)
            delete_dones1.splice(action.index, 1);
            return [...delete_todos1, ...delete_dones1]
        default: 
            return state
    }
}

const todoApp = combineReducers({
    todos
  })

export default todoApp