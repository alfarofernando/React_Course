import Hello from './components/Hello';

function App() {
 
const seatNumbers = [1,4,7];
// asi como se pueden pasar datos por props se pueden pasar objetos
//primero los creamos y le asignamos atributos como un json 
const person = {
  name: "fer",
  message: "Hi there, ",
  seatNumbers: [1,4,7],
};

  return (
  
    <div className="App">
      {/*luego pasamos como propiedad el objeto creado*/}
      <Hello person={person} />
    </div>
  );
}

export default App
