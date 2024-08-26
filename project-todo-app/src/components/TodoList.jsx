import ToDoItem from "./ToDoItem";
import styles from './TodoList.module.css';

export default function TodoList({ toDoList, setToDoList }) {

    const sortedToDoList = toDoList
        .slice()
        .sort((a, b) => Number(a.done) - Number(b.done));

    //recorremos el array que nos llega del padre por props
    return (
        <div className={styles.todolist} >
            {sortedToDoList.map((item) => (
                <ToDoItem
                    key={item.name}
                    item={item}
                    toDoList={toDoList}
                    setToDoList={setToDoList} />
            ))}
        </div>
    );
}