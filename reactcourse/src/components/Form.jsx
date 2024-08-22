import { useState } from "react";

export default function Form(){
    //para manejar eventos en multiples inputs lo que se puede hacer es 
    // crear un objeto en el state con los corchetes e indicando
    //las propiedades que va a poseer dicho objeto
    const [name,setName] = useState({firstName:"" , lastName:""});
    // y para capturar la informacion que ingresa por el form
    // hay que tener en cuenta que setName ahora va a recibir valores para dos propiedades
    // diferentes de un mismo objeto por lo que hay que indicarle en que propiedad 
    // se va a almacenar el input
    // tambien para mantener lo capturado anteriormente por uno u otro input 
    // se coloca entre llaves ...objeto, propiedadAModificar
    // para indicarle al estado 
    //que no importa las propiedades que tengo el objeto en cuestion 
    // solo vamos a estar modificando una propiedad en concreto
    // esto hace que no tengamos que llamar a todas las pripiedades para cambiar una sola
    return (
        <div>

            <h2>Nombre ingresado: {name.firstName}</h2>
            <h2>Apellido ingresado: {name.lastName}</h2>
            <hr/>
            <form action="">
               Nombre: <input 
                    onChange={
                        (e)=>setName(
                            {...name , firstName:e.target.value}
                            
                        )} 
                    type="text"
                    value={name.firstName}
                /><br/>
                Apellido<input
                    onChange={
                        (e)=>setName(
                            {...name, lastName:e.target.value}
                        )}
                    type="text"
                    value={name.lastName}
                />
            </form>
        </div>
    );
}