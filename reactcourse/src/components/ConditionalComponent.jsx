
export default function ConditionalComponent() {

    //para renderizar elementos condicionalmente
    // primero debemos crear una variable de control
    const display = true;
    
// luego crearemos la sentencia de control en este casi un if
// el mismo evalua si nuestra variable es true o false 
// y en consecuencia devuelve un trozo de html
// considerando que solo un solo return puede ejecutarse ya de entrar en el primer return
// este corta la sentencia de control

    if (display) {
        return (
            <div>
                <h3>Learn by sharing your knowledge</h3>
                <p>Display is activated</p>
            </div>
        );
    } else {
        return (
            <div>
                <h3>For faster learning just CODE EVERYDAY !!</h3>
                <p>Display is deactivated</p>
            </div>
        );
    }

}