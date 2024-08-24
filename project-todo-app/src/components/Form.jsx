import { useState } from "react";
import styles from './Form.module.css';

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
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <input
                    className={styles.todoinput}
                    onChange={(e) => setTodo(e.target.value) /* Pasamos las funciones como props */} 
                    value={toDo}
                    type="text"
                    placeholder="...Enter Task To Do..."
                />
                <button
                    className={styles.todobutton}
                    type="submit">Add</button>
            </form>
        </>
    );
}
