import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import ToDoDetails from "./Components/ToDoDetails";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/todos/:id" element={<ToDoDetails />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<TodoList />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
