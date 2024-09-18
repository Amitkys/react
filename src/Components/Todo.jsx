import React from "react";
export function Todo({ todos }) {
    return (
      <>
        {todos.map((todo, key) => (
          <div key={key}>
            <h1>{todo.todo}</h1>
            <p>{todo.userId}</p>
            {/* <p>{key}</p> */}
          </div>
        ))}
      </>
    );
  }
  



// export function Todo({ todos }) {
//     return (
//       <div>
//         {todos.map((todo, index) => (
//           <div key={index}>
//             <h3>{todo.todo}</h3>
//             <p>Completed: {todo.completed ? "Yes" : "No"}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  