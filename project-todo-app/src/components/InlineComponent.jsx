import '../css/style.css';   
//una manera de darle estilos personalizados a nuestro react es medianto la importacion de archivos css
//
//otra manera es creando una variable que contenga el objeto de estilos oara llamarlo desde la etiqueta mas abajo
// const style = { color: "blue", fontSize: "140px" }
export default function InlineComponent() {
    return(
        <div>
           {/*  una manera de aplicar efectos de css en React es medianto el uso de estilos en linea; */}
            {/* <h1 style={{ color: "blue", fontSize: "140px" }} > */}
            {/* <h1 style={style} > */}
            {/*             cuando trabajamos con archivos css llamamos a los estilos definidos mediante el uso de className */}
            <h1 className='header' >
                Inline Component
             </h1>
        </div>
    )
}