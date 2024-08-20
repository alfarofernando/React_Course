import Code from "./Code";
import Code2 from "./Code2";

export default function ConditionalComponent2() {

    const display = true;
//como no es una buena practica el tener dos o mas returns desntro
//de una estuctura de control lo que se hace es 
// crear un elemento variable al cual no se le asigna ningun valor
// y dependioendo de la condicion a esta variable se le asiganara como valor
// un componente u otro 
    let message;

    if (display) {
        message = <Code/> ;
    } else {
        message = <Code2/> ;
    }

    return message;
}