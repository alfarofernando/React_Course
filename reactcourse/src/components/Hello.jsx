//function Hello(props) {
// La destructuracion es una practica usual de javascript
// esta nos permite prescindir de tener que llamar al objeto y luego al atributo
// dandonos la posibilidad de llamar directamente a los atributos 
//const {name,message} = props;
// se crean dos constantes en este caso name y message donde se guardan los valores
// que le llegan al objeto por las propiedades.
function Hello({name,message}){
//tambien se puede reemplazar al objeto props y pasar por parametro directamente
//los atributos que figuran al momento de llamar el componente
return (
        <div>
            <h1>{message} { name }</h1>
        </div>
    );
}

export default Hello;