import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";


export default function Todo() {

    // Estado para almacenar la lista de tareas
    const [toDoList, setToDoList] = useState([]);

    return (
        <div>
            {/* Pasamos setToDoList y toDoList como props al componente Form */}
            <Form setToDoList={setToDoList} toDoList={toDoList} />
            <TodoList toDoList={toDoList} />
        </div>
    );
}