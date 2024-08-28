import styles from "./FoodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={food.image} alt={food.title} />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{food.title}</p>
        <button
          onClick={() => {
            console.log(food.id, food.title);
            setFoodId(food.id);
          }}
          className={styles.cardButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
