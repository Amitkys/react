/*
import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/todo";


export function AddTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Setter to update the Recoil atom state
    const setTodos = useSetRecoilState(todoAtom);

    function saveData() {
        const newTodo = { title, description };
        // Update Recoil state by adding new todo to the existing list
        setTodos((oldTodos) => [...oldTodos, newTodo]);
  }
  console.log('hi form addtodo')
    return(
        <div>
            <lable>Add Title</lable> <br />
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" /> <br />
            <lable>Add Description</lable> <br/>
            <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text"></input> <br/>
            <button onClick={saveData}>Save</button>
        </div>
    )
} */

// optimized way 



import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/todo";

export function AddTodo() {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const setTodos = useSetRecoilState(todoAtom);

  function saveData() {
    const newTodo = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
    // clear input field
    titleRef.current.value = '';
    descriptionRef.current.value = '';
  }
  console.log('checking re rendering in add todo component');
  return (
    <div>
      <label>Add Title</label> <br />
      <input ref={titleRef} type="text" /> <br />
      <label>Add Description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <button onClick={saveData}>Save</button>
    </div>
  );
}
