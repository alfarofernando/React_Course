import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    //se puede tambien utilizar states para modificar otros states
    // definimos nuestro nuevo estado
    const [value, setValue] = useState(1);
    //añadimos nuestra variable del segundo estado para que modifique 
    //la variable del primer estado
    function increment(){
        setCount(count+value);
    }

    function decrement(){
        setCount(count-value);
    }
    //creamos las funciones para manejar nuestro nuevo estado 
    function increaseValue(){
        setValue(value + 1);
    }
    function decreaseValue(){
        setValue (value -1);
    }

    return (
        <div>
           <h1> Count value is: {count} </h1> 
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <hr/>
            <h1>Change value of buttons by: {value}</h1>
            <button onClick={increaseValue}>Increase</button>
            <button onClick={decreaseValue} >Decrease</button>
        </div>);
}