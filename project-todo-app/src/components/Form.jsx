import { useState } from "react";
import styles from './Form.module.css';

export default function Form({ setToDoList, toDoList }) { // Recibe las props desde el componente padre
    
    //estado que guarda un array de objetos con propiedades nombre y si estan completas o no
    const [toDo, setTodo] = useState({name:"",done:false});
    

    function handleSubmit(e) {
        e.preventDefault(); // Previene que el formulario recargue la página al hacer submit
        console.log(toDo);  // Muestra en consola el valor actual del input
        setToDoList([...toDoList , toDo]); // Agrega el nuevo ítem a la lista
        setTodo({name:"",done:false}); // Limpia el input después de añadir la tarea
    }

    return (
        <>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <input
                    className={styles.todoinput}
                    onChange={(e) => setTodo({ name: e.target.value , done:false }) /* camputarmos el valor del input en la propiedad name del objeto */} 
                    value={toDo.name}
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
