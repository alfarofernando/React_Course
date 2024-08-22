import { useState } from "react";

export default function Form(){

    //en react el value de los forms deben ser manejados por estados
    //por lo que usaremos el atributo onChange en el input para manejar los cambios
 /*    function handleChange(e){
        console.log(e.target.value);
    } */
    // y crearemos un estado para cambiar el value del input
    const [name,setName] = useState("");
    /* 
    function demo(e){
        return handleChange(e);
    }
 */
    //finalmente simplificamos el codigo para que dentro del atributo onChange 
    //con una funcion flecha con el objeto evento de parametro 
    //setiemos el nombre llamando a ese objeto con target.value y lo pasemos 
    //a la variable del estado name
    return (
        <div>
            <form action="">
                <input 
                    onChange={(e)=>setName(e.target.value)} 
                    type="text"
                    value={name} />
            </form>
        </div>
    );
}