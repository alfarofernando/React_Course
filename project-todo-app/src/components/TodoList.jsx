import ToDoItem from "./ToDoItem";

export default function TodoList({ toDoList }) {
    //recorremos el array que nos llega del padre por props
    return (
        toDoList.map((item) => ( 
            <ToDoItem key={item} item={item} />    
        ))
    );
}