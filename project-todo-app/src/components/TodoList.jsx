import ToDoItem from "./ToDoItem";
import styles from './TodoList.module.css';

export default function TodoList({ toDoList , setToDoList }) {
    //recorremos el array que nos llega del padre por props
    return (
        <div className={styles.todolist} >
            { toDoList.map((item) => (
                  <ToDoItem key={item} item={item} toDoList={toDoList}  setToDoList={setToDoList} />
             ))}
        </div>
    );
}