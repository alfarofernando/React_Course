import Code from "./Code";
import Code2 from "./Code2";

export default function ConditionalComponent2() {

    // tambien podemos usar en este caso un operador ternario
    // primero creamos una variable booleana 
    // let variable = true/false
    // despues creamos una variable donde guardaremos el resultado de la operacion
    // let resultado;
    const display = false;
    // por ultimo le asignamos el valor a resultado mediante la operacion ternaria
    //
    // resultado = variable ? "BoolEsTrue" : "BoolEsFalse"
    let message = display ? <Code /> : <Code2 />;
    // luego retornamos el contenido de la variable resultado
    return message;
}


