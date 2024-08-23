const style = { color: "blue", fontSize: "140px" }
//otra manera es creando una variable que contenga el objeto de estilos oara llamarlo desde la etiqueta mas abajo
export default function InlineComponent() {
    return(
        <div>
           {/*  una manera de aplicar efectos de css en React es medianto el uso de estilos en linea; */}
            {/* <h1 style={{ color: "blue", fontSize: "140px" }} > */}
             <h1 style={style} >
                Inline Component
             </h1>
        </div>
    )
}