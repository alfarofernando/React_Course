/* function Hello(props) {
    // se le pasa por parametro el objeto props
    //el cual viene cargado con el objeto person
    // porlo que al ser dos objetos, para acceder a sus datos 
    //debemos primero llamar al objetoProps.objetoPerson.propiedad
    return (
        <div>
            <h1>
                {props.person.message} {props.person.name} {props.person.seatNumbers}
            </h1>
        </div>
    );
} */
//destructurando el objeto props podemos directamente pasarle el objeto person
// para asi directamente acceder a los atributos del objeto person sin pasar por el objeto props
function Hello({person}) {
    return (
        <div>
            <h1>
                {person.message} {person.name} {person.seatNumbers}
            </h1>
        </div>
    );
}

export default Hello;