import { useState } from "react";

export default function Form({ setToDoList, toDoList }) { // Recibe las props desde el componente padre
    
    const [toDo, setTodo] = useState("");// Estado para almacenar la lista de tareas

    function handleSubmit(e) {
        e.preventDefault(); // Previene que el formulario recargue la página al hacer submit
        console.log(toDo);  // Muestra en consola el valor actual del input
        setToDoList([...toDoList , toDo]); // Agrega el nuevo ítem a la lista
        setTodo(""); // Limpia el input después de añadir la tarea
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setTodo(e.target.value) /* Pasamos las funciones como props */} 
                    value={toDo}
                    type="text"
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}
