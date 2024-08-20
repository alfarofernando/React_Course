import Fruit from './Fruit';

export default function Fruits() {

    const fruits = [
        {
            name: "apple",
            description: "apple from argentina",
            price: 3.5,
        },
        {
            name: "mango",
            description: "mango from chile",
            price: 2.9,
        },
        {
            name: "banana",
            description: "banana from ecuador",
            price: 5,
        },
        {
            name: "orange",
            description: "orange from bolivia",
            price: 2,
        },
        {
            name: "pineapple",
            description: "pineapple from brazil",
            price: 4.8,
        },
    ];
// para renderizar componentes en loop
// se junta la logica de renderizar arrays de objetos sumado 
// a que al componente se le pasan como props los atributos del elemento del array de objetos
    return (
        <div>
            <ul>
                {fruits.map(fruit => (
                    <Fruit
                        key={fruit.name}
                        name={fruit.name}
                        description={fruit.description}
                        price={fruit.price}
                    />
                ))}
            </ul>
        </div>
    );
}