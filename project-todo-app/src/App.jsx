import InlineComponent from "./components/InLineComponent"
import OutlineComponent from "./components/OutlineComponent"
import Todo from "./components/Todo"

function App() {
  
  return (
    <div className="App"> 
    {/*Componente que maneja el input de la lista*/}
      {/* <Todo/> */}
      <InlineComponent />
      <OutlineComponent/>
    </div>
  )
}

export default App
