import { useRecoilValue } from "recoil"
import { todoAtom } from "../store/atoms/todo"
import React from "react";

// export function ShowTodo(){
//     let todos = useRecoilValue(todoAtom);
//     console.log(todos);
//     return(
//         <div>
//             {todos.map((todo, index) => {
//                 return(
//                     <div key={index}>
//                     <h1>{todo.title} </h1>
//                     <h3>{todo.description}</h3>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

export function ShowTodo(){
    let todos = useRecoilValue(todoAtom);
    return(
        <>
            {todos.map((todo, index) => (
                <div key={index}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                </div>
            ))}
        </>
    )
}

// difference between both of them:
/* in first: we use {} after '=>' so we have to return value explicitly
in second we do not use {} after '=>' instead i have use () so I do not need to return anythintg
js code autometaclly will help to return things
*/

