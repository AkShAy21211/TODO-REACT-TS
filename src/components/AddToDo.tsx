import React, { FormEvent, useState } from "react";
import {  useTodos } from "../context/todoContext";
import ListTodos from "./ListTodos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const {todos,handleAddTodo} = useTodos()
  const handleForm = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo('')
  };
  return (
    <>
     <form className="flex mt-5 justify-center" onSubmit={handleForm}>
      <input
        className="border border-black mx-3 rounded-xl"
        type="text"
        name=""
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="bg-blue-500 rounded-lg w-12 text-xs" type="submit">
        Add
      </button>
    </form>
    <ListTodos  />
    </>
   
  );
};

export default AddToDo;
