export default function Fruits() {
    //para renderisar un array primero debemos crearlo  
    const fruits = ["apple", "mango", "banana", "orange", "pineapple"];
    // luego debemos llamar al metodo map del array para poder recorrerlo 
    // los parametros del array sera el mismo nombre del array en singular para
    // indicar que sera un solo elemento de la lista de elementos 
    // el cual retornara mediante una funcion flecha algo
    // en este caso devolveremos un h1 con el contenido directo de el elemento actual
    // en la iteracion del metodo map aplicado al array
    // tambien hace falta colocar una key para indicar la posicion unica
    // del elemento que se retorna 


    return (
        <div>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit}>
                        {fruit}
                    </li>
                ))}
            </ul>
        </div>
    );
}