import { useState } from "react";
//para utilizar los HOOK uno debe importarlos al comienzo del componente
export default function Counter() {
    // debido a que las props son inmutables es que se utilizan los estados
    // los estados son variables que contienen informacion 
    // para crear un estado debemos definir entre corchetes nuesta variable
    // count y una funcion que alterara dicho estado es este caso setCount
    // utilizando el HOOK useState pudiendo tambien darle un valor inicial
    // a la cariable count dentro de los parentesis del HOOK
    const [count, setCount] = useState(0);

    //en este ejemplo usaremos el evento onClick para cambiar los valores del
    //estado
    function increment(){
        //como la variable count es una constante esta no puede ser modificada directamente
        // en su lugar se utiliza la funcion expresada al momento de crear el estado
        //para poder modificarla
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    return (
        <div>
           <h1> Count value is: {count} </h1> <br/>
            <button onClick={increment}>increment</button><br/>
            <button onClick={decrement}>decrement</button>
        </div>);
}