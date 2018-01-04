import {ADD_TODO, DELETE_TODO, CHANGE_TODO, DELETE_DONE, CHANGE_DONE} from './type'

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function deleteTodo(index) {
    return { type: DELETE_TODO, index }
}

export function changeTodo(index){
    return { type: CHANGE_TODO, index }
}
export function deleteDone(index) {
    return { type: DELETE_DONE, index }
}

export function changeDone(index){
    return { type: CHANGE_DONE, index }
}