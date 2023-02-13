import { ADD_TODO, COMPLETE, DELETE_TODO, FILTER_TASK, UPDATE_TODO } from "./actionTypes"



const init ={todos:
    [{id:Math.random(), task:"learn state", isdone:false},
    {id:Math.random(), task:"HTML JSX", isdone:true},
    {id:Math.random(), task:"React Bootstrap", isdone:false}],
    filter:false,
}

export const reducer=(state=init,{type,payload})=>{
   
    switch(type){
        
        case ADD_TODO:
            
            return {...state,todos:[...state.todos,payload]};

        case DELETE_TODO:
            
            return {...state,todos:state.todos.filter(todo => todo.id !== payload)};  
            
        // case UPDATE_TODO:
           

            case COMPLETE:
                
                
                return {...state,todos:state.todos.map(todo => (todo.id === payload?{...todo,isdone:!todo.isdone}:todo))}; 
            
            case FILTER_TASK:
                return {...state,filter:!state.filter}

        case  UPDATE_TODO:
            return {...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)}       
                default:
                return state
    }
}
