export default function Fruit({name, description, price }) {
    
    // tambien a partir de ahora a menos que necesitemos hacerlo , vamos a dejar de retornar <div> para comenzar a utilizar
    // React.Fragment o simplemente <> vacio que retornara solamente la informacion sin necesidad de crear un nuevo contenedor 
    return (
        <>
            
                {/* <p>Fruit: {name}</p>
                <p>Description: {description}</p>
                <p>Price: ${price}</p> */}

                { /*  Para renderizar condicionalmente items de una lista una solucion podria ser
                utilizar un operador ternario en sete caso (price>3) que evalua si en la iteracion del array de objetos
                el precio de cada objeto es mayor a 3 , en caso de ser true se le indica que retorne 
                un <h3> con informacion de lo contrario se le indica que mediante "" que devuelva un string vacio 
                por lo que se da que aparecen los puntos de la Unordered List pero sin ningun dato */}
                {price > 3 ? <li><h3>Fruit: {name} <br/> Description:  {description} <br/>Price: ${price} </h3><hr/></li>: ""}

            
        </> 
    );
}