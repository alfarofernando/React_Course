export default function Fruit({name, description, price, soldout}) {
    
    // tambien a partir de ahora a menos que necesitemos hacerlo , vamos a dejar de retornar <div> para comenzar a utilizar
    // React.Fragment o simplemente <> vacio que retornara solamente la informacion sin necesidad de crear un nuevo contenedor 
    return (
        <>    
                { /* Podemos tambien imprimir un mensaje en pantalla utilizando ternarioses este caso particular
                creamos la variable en el componente Fruits y la pasamos como props , la cual usamos para comprobar
                si es true muestra un mensaje de lo contrario no mostrara dicho mensaje */}
            
                <li>
                    <h3>
                        Fruit: {name} <br />
                        Description:  {description} <br />
                        Price: ${price} <br />
                        { soldout ? "SoldOut" : "" }
                    </h3> <hr />
                </li> 
            
        </> 
    );
}