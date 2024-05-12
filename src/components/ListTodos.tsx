import React, { useEffect, useState } from "react";
import { Todo, useTodos } from "../context/todoContext";

const ListTodos = () => {
  const { todos ,delteTodo} = useTodos();
  const [complete, setComplete] = useState<string[]>([]);



  return (
    <div className="flex justify-center mt-5">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="px-4 py-2 text-white">Task</th>
            <th className="px-4 py-2 text-white">Status</th>
            <th className="px-4 py-2 text-white">Mark as complete</th>
            <th className="px-4 py-2 text-white">Created At</th>
            <th className="px-4 py-2 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo: Todo) => (
            <tr key={todo.id} className="text-gray-500">
              <td className=" px-4 py-2">{todo.task}</td>
              <td className={todo.completed || complete.includes(todo.id) ? 'text-green-500' : 'text-orange-400'} style={{ fontSize: "10px", padding: "14px" }}>{todo.completed || complete.includes(todo.id)? "Completed" : "Pending"}</td>
              <td className=" px-4 py-2">{todo.createdAt.toLocaleString()}</td>
              <td className=" px-5 py-5"><input onClick={() => setComplete([...complete, todo.id])} type="checkbox" name="" id="" /> </td>
              {complete?.includes(todo.id) &&
                <td className=" px-4 py-2"><button onClick={() => delteTodo(todo.id)} className="text-red-500 text-xs">Delete</button> </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
