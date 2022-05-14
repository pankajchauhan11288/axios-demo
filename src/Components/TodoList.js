import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToDos } from "../Services/ToDo";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ToDos().then(todos=>setTodos(transformTodos(todos)))
  }, []);
  // fetch(`https://jsonplaceholder.typicode.com/todos`)
  //   .then((response) => response.json())
  //   .then((todos) => {
  //     todos = todos.map((todo) => {
  //       return {
  //         ...todo,
  //         completed: todo.completed ? "✔️" : "⌛",
  //       };
  //     });
  //     setTodos(todos);
  //   });

  const transformTodos = (todos) =>
    todos.map((todo) => {
      return {
        ...todo,
        completed: todo.completed ? "✔️" : "⌛",
      };
    });
  const clickHandle = (todo) => {
    navigate(`/todos/${todo.id}`);
  };
  if (!todos.length) {
    return <p className="alert alert-info">Loading..........</p>;
  }
  return (
    <>
      <h1 className="text-center text-white bg-success">ToDo List</h1>
      <div className="container-fluid mt-3">
        <table className="table table-primary table-striped table-hover table-bordered table-sm table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">USER ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">ID</th>
              <th scope="col">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} onClick={() => clickHandle(todo)}>
                <th scope="row">{todo.id}</th>
                <td className="hand">{todo.title}</td>
                <td>{todo.userId}</td>
                <td>{todo.completed + ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;
