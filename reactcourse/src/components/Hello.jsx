function Hello(props) {
// como cualquier otra funcion somos capaces de pasarle parametros a la misma 
// los parametros son OBJETOS los cuales no pueden renderizarce directamente en html sino que deben ser llamados
// por lo que la sintaxis seria   nombreObjetoParametroFuncion .(punto) nombrePropiedadEtiquetaComponente
    return (
        <div>
            <h1>{props.message} { props.name }</h1>
        </div>
    );
}

export default Hello;