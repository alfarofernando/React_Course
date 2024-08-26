import styles from "./FoodItem.module.css";

export default function FoodItem({ food }) {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={food.image} alt="" />
            <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{food.title}</p>

                <button className={styles.cardButton} >View Recipe</button>
            </div>
        </div>
    );
}