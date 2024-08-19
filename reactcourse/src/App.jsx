import Hello from './components/Hello';

function App() {
  // asi como las etiquetas HTML aceptan atributos como style , name, class, etc 
  // las etiquetas de componentes pueden aceptar propiedades o props
  // que pueden modificar la vista de los componentes dinamicamente de acuerdo a las propiedades que estos adquieren
  // la posicion de las props en la implementacion del componente no modifica la logica del mismo
  // por lo que en est eejemplo colocar message antes que name no modifica el output
  return (
  
    <div className="App">
      <Hello name="Fer" message="Hi There , " />
      <Hello name="Lean" message="Hello There , "/>
      <Hello  message="Long time no see , "  name="Denu"/>
      <Hello name="Vicky" message="I have been waiting for you , " />
      <Hello name="Luquis" message="It has been a while , " />
    </div>
  );
}

export default App
