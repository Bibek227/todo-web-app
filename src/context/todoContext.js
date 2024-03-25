import { useContext,createContext } from "react";

export const todoContext=createContext({
    todos:[
        {
            id:1,
            todo:'todo msg',
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    tooggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(todoContext)
}

export const TodoProvider=todoContext.Provider