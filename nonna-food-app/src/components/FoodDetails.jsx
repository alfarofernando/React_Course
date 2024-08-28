import { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import FoodDetailsIngredientsList from "./FoodDetailsIngredientList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "03539d53cece40dc8ed02b29d023b710";

  useEffect(() => {
    if (foodId) {
      async function fetchFood() {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      }
      fetchFood();
    }
  }, [foodId]);

  return (
    <div className={styles.recipeMain}>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            ⏰<strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            🍽<strong> Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          💲 <span>{(food.pricePerServing / 100).toFixed(2)} Per Serving</span>
        </div>

        <FoodDetailsIngredientsList food={food} isLoading={isLoading} />

        <div className={styles.recipeInstructions}>
          <h2>Instructions</h2>
          {isLoading ? (
            <p>Select recipe to load instuctions...</p>
          ) : (
            <ol>
              {food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
