import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";

export default function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodData={setFoodData} />
        </InnerContainer>
      </Container>
    </div>
  );
}
