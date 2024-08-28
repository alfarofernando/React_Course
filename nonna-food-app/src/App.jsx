import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import OuterContainer from "./components/OuterContainer";
import FoodDetails from "./components/FoodDetails";
import RandomFood from "./components/RandomFood";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);

  return (
    <div className="App">
      <Nav />
      <Search
        foodData={foodData}
        setFoodData={setFoodData}
        triggerSearch={triggerSearch}
        setTriggerSearch={setTriggerSearch}
      />
      <Container>
        <InnerContainer>
          <RandomFood setFoodData={setFoodData} triggerSearch={triggerSearch} />
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <OuterContainer>
          <FoodDetails foodId={foodId} />
        </OuterContainer>
      </Container>
    </div>
  );
}
