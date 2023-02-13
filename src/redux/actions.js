import {ADD_TODO,COMPLETE,DELETE_TODO,FILTER_TASK,UPDATE_TODO}  from './actionTypes'

export function addTodo(todo){
    return{
        type:ADD_TODO,
        payload:todo,
    }
}

export function deleteTodo(todoId){
    return{
        type:DELETE_TODO,
        payload:todoId,
    }
}

export function updateTodo(todo){
    return{
        type:UPDATE_TODO,
        payload:todo,
    }
}

export function complete(todoId){
    return {
        type:COMPLETE,
        payload:todoId,
    }
}

export function filter(){
    return{
        type:FILTER_TASK,
        
    }
}