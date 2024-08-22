import { useState } from "react";
//importmaos el hook de react

export default function Todo(){

    //creamos el estado todo para guardar las tareas de la aplicacion
    const [todo,setTodo] = useState("");
    return(
        <div>
  {/*colocamos momentaneamente un parrafo para verificar la entrada de datos*/}
            <p>{todo}</p>
            <form>
                <input onChange={(e)=>setTodo(e.target.value)} value={todo} type="text"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}