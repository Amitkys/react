import { useRecoilValue } from "recoil"
import { todoAtom } from "../store/atoms/todo"
import React from "react";

export function ShowTodo(){
    let todos = useRecoilValue(todoAtom);
    console.log(todos);
    return(
        <div>
            {todos.map((todo, index) => {
                return(
                    <div key={index}>
                    <h1>{todo.title} </h1>
                    <h3>{todo.description}</h3>
                    </div>
                )
            })}
        </div>
    )
}

