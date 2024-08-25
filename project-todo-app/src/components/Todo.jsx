import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  // Estado para almacenar la lista de tareas
  const [toDoList, setToDoList] = useState([]);
  const completedTasks = toDoList.filter((todo) => todo.done == true).length;
  const uncompletedTasks = toDoList.filter((todo) => todo.done == false).length;

  return (
    <div>
      {/* Pasamos setToDoList y toDoList como props al componente Form */}
      <Form setToDoList={setToDoList} toDoList={toDoList} />
      <TodoList toDoList={toDoList} setToDoList={setToDoList} />
      <Footer
        completedTasks={completedTasks}
        uncompletedTasks={uncompletedTasks}
      />
    </div>
  );
}
