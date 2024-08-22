import { useState } from "react";

export default function Form(){
   const [name,setName] = useState({firstName:"" , lastName:""});

   //creamos la funcion para manejar el submit y en este caso
   // añadimos un console log para revisar si efectivamente nos devuelve por consola
   // lo ingresado en los inputs 
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }

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
                {/*Para manejar los submit de un form podemos primero definir que 
                la pagina no se recarge ya que esto limpia los datos almacenados en los estados 
                por lo que añadimos un  evento onClick que previene el Refresh */}
                <button onClick={(e)=>handleSubmit(e)}>Add</button>
            </form>
        </div>
    );
}