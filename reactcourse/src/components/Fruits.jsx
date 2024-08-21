import Fruit from './Fruit';

export default function Fruits() {
    // para poder tratar la impresion en pantalla de la leyenda "Soldout" debemos crear primero una propiedad dentro de nuestro objetos
    // que sirva para comprobar su estado, en este ejemplo utilizamos una variable booleana
    const fruits = [
        {
            name: "apple",
            description: "apple from argentina",
            price: 3.5,
            soldout: false,
        },
        {
            name: "mango",
            description: "mango from chile",
            price: 2.9,
            soldout: true,
        },
        {
            name: "banana",
            description: "banana from ecuador",
            price: 5,
            soldout: false,
        },
        {
            name: "orange",
            description: "orange from bolivia",
            price: 2,
            soldout: false,
        },
        {
            name: "pineapple",
            description: "pineapple from brazil",
            price: 4.8,
            soldout: true,
        },
    ];

    // luego debemos incluirla en la llamada al componente-vista como props para que se vaya pasando en cada iteracion del 
    // mapeo del array de objetos
    return (
        <div>
            <ul>
                {fruits.map(fruit => (
                    <Fruit
                        key={fruit.name}
                        name={fruit.name}
                        description={fruit.description}
                        price={fruit.price}
                        soldout={fruit.soldout}
                    />
                ))}
            </ul>
        </div>
    );
}