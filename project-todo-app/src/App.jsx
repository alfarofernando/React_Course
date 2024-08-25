import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/*Componente que maneja el input de la lista*/}
      <Todo />
    </div>
  );
}

export default App;
