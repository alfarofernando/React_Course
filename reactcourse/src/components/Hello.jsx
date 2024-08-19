
const name = "Fer";

function displayMessage() {
    return "wow!";
}

function Hello() {
    // JSX mezcla HTML con JS como si de PHP se tratase.
    // por lo que se permite la utilizacion de variables y de funciones dentro de llaves dentro del HTML 
    // en un return solo puede una sola etiqueta padre por lo que si se utilizara mas de una etiqueta deben estar dentro 
    //de una unica etiqueta padre.
    return (
        <div>
            <h1>Hello there, i am {name} learning React</h1>
            <h2>{displayMessage()}</h2>
        </div>
    );
}

export default Hello;