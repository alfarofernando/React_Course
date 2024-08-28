import FoodDetailsIngredient from "./FoodDetailsIngredient";

export default function FoodDetailsIngredientsList({ food, isLoading }) {
  return (
    <div>
      <h2>Ingredients</h2>
      {isLoading ? (
        <p>Select recipe to load ingredients...</p>
      ) : (
        <ul>
          {food.extendedIngredients.map((ingredient, index) => (
            <FoodDetailsIngredient
              food={food}
              ingredient={ingredient}
              index={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
