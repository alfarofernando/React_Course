import styles from './ToDoItem.module.css';

export default function ToDoItem({item, toDoList ,setToDoList}) {
    
    function handleDelete(item){
        //verificamos el correcto funcionamiento del boton
        console.log("delete button clicked for: ",item);
        //seteamos la lista  nueva (todo) con un filtrado donde el item 
        // que llama a la funcion corresponda con el item en el array toDoList
        setToDoList(toDoList.filter((todo) => todo !== item));
    }


    return (
        <div className={styles.item}>
            
            <div className={styles.itemname}>
                {item.name}

                <span>
                    <button
                        onClick={() => handleDelete(item)}
                        className={styles.itembutton}> X 
                    </button>
                </span>
            </div>

            

            <hr  className={styles.line} />
        </div>
    );
}