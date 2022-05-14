import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToDo } from "../Services/ToDo";

const ToDoDetails = (props) => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then((response) => response.json())
    //   .then((todo) => {
    //     setTodo(todo);
    //   });
    ToDo(id).then(todos=>setTodo(todos))
  });
  return (
    <>
      <h1 className="text-center text-white bg-success">ToDo Details</h1>
      {todo ? (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {todo.id +
                " - " +
                todo.title +
                " -> " +
                (todo.completed ? "✔️" : "⌛")}
            </h4>
          </div>
        </div>
      ) : (
        <p className="alert alert-info">Loading.........</p>
      )}
    </>
  );
};

export default ToDoDetails;
