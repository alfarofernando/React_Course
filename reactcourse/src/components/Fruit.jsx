export default function Fruit({name, description, price }) {
    // primero destructuramos el objeto en sus atributos para simplificar el codigo
    // luego construimos el render del componente
    return (
        <div>
            <li>
                <p>Fruit: {name}</p>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
            </li>
        </div> 
    );
}