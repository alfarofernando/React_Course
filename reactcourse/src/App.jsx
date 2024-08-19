import Hello from './components/Hello';

function App() {
  return (
    // la caracteristica mas importante de React son la utilizacion de componentes
    // trozos de HTML y logica que se llaman logrando una abstraccion de la complejidad de las mismas
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App
