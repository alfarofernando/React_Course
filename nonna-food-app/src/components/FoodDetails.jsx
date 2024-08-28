import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {

    const [food, setFood] = useState({});

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "03539d53cece40dc8ed02b29d023b710";

    useEffect(() => {
        if (foodId) {

            async function fetchFood() {
                const response = await fetch(`${URL}?apiKey=${API_KEY}`);
                const data = await response.json();
                console.log(data);
                setFood(data)
            }
            fetchFood()
        }
    }, [foodId])

    return (
        <div>
            <h1>{food.title}</h1>
            <img src={food.image} />
        </div>
    );
}

