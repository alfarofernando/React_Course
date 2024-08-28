import { useEffect } from "react";

const API_KEY = "03539d53cece40dc8ed02b29d023b710";

export default function RandomFood({ setFoodData, triggerSearch }) {
  useEffect(() => {
    if (!triggerSearch) {
      const fetchRandomFood = async () => {
        try {
          const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=5`;
          const response = await fetch(URL);
          const data = await response.json();
          setFoodData(data.recipes); // Asegúrate de acceder a la propiedad correcta
        } catch (error) {
          console.error("Error fetching random food: ", error);
        }
      };

      fetchRandomFood();
    }
  }, [triggerSearch, setFoodData]);

  return null; // No renderiza ningún contenido
}
