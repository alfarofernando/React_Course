export default function Message() {

    //una de las formas de manejar eventos en react es a travez de la prop onClick
    // a dicha propiedad podemos pasarle una funcion que crearemos a continuacion

    function handleClick(){
        console.log("button clicked");
    }

    return (
        <div>
            <button onClick={handleClick}>Click to get a message</button>
        </div>
    );
}