import ConditionalComponent2 from "./components/ConditionalComponent2";
//import ConditionalComponent from "./components/ConditionalComponent";

function App() {
 
// al intentar renderizar el componente como no se le pasa ninguna propiedad
// y al mismo tiempo en la logica de nuestro componente definimos 
// a nuestra variable de control como FALSE 
// nuestro componente imprimira por pantalla la sentencia FALSE de nuestra
// estructura de control
  return (
  
    <div className="App">
      <ConditionalComponent2 />
    </div>
  );
}

export default App
