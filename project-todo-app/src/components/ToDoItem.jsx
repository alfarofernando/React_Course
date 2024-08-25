import styles from "./ToDoItem.module.css"; // Importa un archivo CSS como un objeto para aplicar estilos modulares al componente.
import TodoList from "./TodoList"; // Importa otro componente llamado 'TodoList', aunque no se utiliza dentro de este componente.

export default function ToDoItem({ item, toDoList, setToDoList }) {
  // Define un componente funcional llamado 'ToDoItem'. Recibe 'item', 'toDoList', y 'setToDoList' como props.

  function handleDelete(item) {
    // Define una función llamada 'handleDelete' que toma 'item' como argumento.
    console.log("delete button clicked for: ", item);
    // Muestra en consola un mensaje para identificar qué elemento se está intentando eliminar.
    setToDoList(toDoList.filter((todo) => todo !== item));
    // Filtra la lista de tareas, eliminando el elemento que coincide con el item que se pasa a la función.
    // Luego, actualiza la lista de tareas llamando a 'setToDoList'.
  }

  function handleComplete(name) {
    // Define una función llamada 'handleComplete' que toma 'name' como argumento.
    console.log("complete button clicked for:", name);
    // Muestra en consola un mensaje indicando qué tarea se está marcando como completa/incompleta.
    const newtoDoList = toDoList.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    // Crea una nueva lista de tareas llamada 'newtoDoList' utilizando 'map' para recorrer 'toDoList'.
    // Si el nombre de la tarea ('todo.name') coincide con 'name', invierte su estado 'done'.
    // Caso contrario, devuelve la tarea sin cambios.
    setToDoList(newtoDoList);
    // Actualiza la lista de tareas con 'newtoDoList' utilizando 'setToDoList'.
    console.log(toDoList);
    // Muestra en consola la lista de tareas actualizada.
  }

  const completedMark = item.done ? styles.completedMark : "";
  // Declara una constante 'completedMark' que almacena una clase CSS (styles.completedMark)
  // si 'item.done' es verdadero. Si 'item.done' es falso, se asigna una cadena vacía.

  return (
    <div className={styles.item}>
      {/* Renderiza un div con la clase CSS 'item' aplicada desde 'ToDoItem.module.css'. */}
      <div className={styles.itemname}>
        {/* Renderiza otro div con la clase CSS 'itemname'. */}
        <span className={completedMark}>{item.name}</span>
        {/* Renderiza el nombre del item dentro de un span.
            Aplica la clase CSS 'completedMark' si la tarea está marcada como completada. */}

        <span>
          {/* Renderiza un span que contendrá los botones de acciones. */}
          <button
            onClick={() => handleDelete(item)}
            // Define un botón que, al ser clickeado, llama a la función 'handleDelete' pasando el 'item' como argumento.
            className={`${styles.itembutton} ${styles.delete}`}
            // Aplica dos clases CSS al botón: 'itembutton' y 'delete'.
          >
            X
            {/* El contenido del botón es la letra 'X', indicando la opción de eliminar la tarea. */}
          </button>

          <button
            onClick={() => handleComplete(item.name)}
            // Define un botón que, al ser clickeado, llama a la función 'handleComplete' pasando 'item.name' como argumento.
            className={`${styles.itembutton} ${styles.complete}`}
            // Aplica dos clases CSS al botón: 'itembutton' y 'complete'.
          >
            ✓
            {/* El contenido del botón es un checkmark (✓), indicando la opción de marcar la tarea como completa/incompleta. */}
          </button>
        </span>
      </div>

      <hr className={styles.line} />
      {/* Renderiza una línea horizontal (hr) para separar visualmente cada ítem en la lista de tareas.
          Se aplica la clase CSS 'line' para estilizar la línea. */}
    </div>
  );
}
