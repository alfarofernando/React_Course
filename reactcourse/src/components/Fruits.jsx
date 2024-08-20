export default function Fruits() {
// para renderizar un array de objetos primero creamos los mismos
    const fruits = [
        {
            name: "apple",
            description: "apple from argentina",
            price: 3.5,
        },
        {
            name:"mango",
            description:"mango from chile",
            price: 2.9,
        },
        {
            name:"banana",
            description:"banana from ecuador",
            price:5,
        },
        {
            name:"orange",
            description:"orange from bolivia",
            price: 2,
        },
        {
            name:"pineapple",
            description:"pineapple from brazil",
            price:4.8,
        },
    ];
// ahora para renderizar nuestro array de objetos
// en lugar de llamar directamente al objeto debemos llamar al elemento del objeto
// seguido de el atributo que queremos mostrar del mismo en las iteraciones
// tambien usaremos como unique key el nombre de la fruta en cuestion ya que los mismos
// no se repiten. aunque tambien podemos usar como unique key la letra i de index
    return (
        <div>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.name}>
                        <p>Fruit: {fruit.name}</p> 
                        <p>Description: {fruit.description}</p> 
                        <p>Price: ${fruit.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}