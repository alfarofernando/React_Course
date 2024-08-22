import { useState } from "react";
//importmaos el hook de react

export default function Todo() {

    //creamos el estado todo para guardar el valor ingresado por el input
    const [toDo, setTodo] = useState("");

    // creamos el estado como array para formar una lista
    // con los valores que recoje el estado toDo
    const [toDoList, setToDoList] = useState([]);

    //creamos funcion para manejar el submit del formulario
    //al cual añadimos un console log para verificar la correcta entrada de datos
    //prescindiendo del parrafo en el return
    function handleSubmit(e) {
        //previene recarga de pagina
        e.preventDefault();
        //console log con contenido de variable toDo
        console.log(toDo);
        //setea el array de strings guardando los datos que se van ingresando por el input
        // en el array toDoList
        setToDoList([...toDoList , toDo]);
    }

    return (
        <div>
            {/*colocamos momentaneamente un parrafo para verificar la entrada de datos
            <p>{todo}</p>
    Al tener ya la verificacion en el submit del formulario prescindimos del parrafo*/}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    onChange={(e) => setTodo(e.target.value)}
                    value={toDo}
                    type="text"
                />
                <button type="submit">Add</button>
            </form>
        {
        /*console log verificando el array de strings*/
        console.log(toDoList)
        }
        </div>
    );
}