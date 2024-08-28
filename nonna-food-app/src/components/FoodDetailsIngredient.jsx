import styles from "./FoodDetailsIngredient.module.css";

export default function FoodDetailsIngredient({ ingredient, index }) {
  return (
    <div key={index} className={styles.ingredientContainer}>
      <div className={styles.ingredientImage}>
        <img
          src={
            `https://spoonacular.com/cdn/ingredients_100x100/` +
            ingredient.image
          }
          alt="imagen de ingrediente"
        />
      </div>
      <div className={styles.ingredientName}>
        <h3>{ingredient.name}</h3>
      </div>
      <div className={styles.ingredientAmount}>
        <h3>
          {ingredient.amount} {ingredient.unit}
        </h3>
      </div>
    </div>
  );
}
