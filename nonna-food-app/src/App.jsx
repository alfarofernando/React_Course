import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

export default function App() {

const [foodData,setFoodData] = useState([]);

  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData}  />
      <FoodList foodData={foodData} setFoodData={setFoodData} />
      </div>
  )
}