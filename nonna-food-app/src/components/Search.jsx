import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import RandomFood from "./RandomFood";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "03539d53cece40dc8ed02b29d023b710";

export default function Search({setFoodData , triggerSearch , setTriggerSearch }) {
  const [query, setQuery] = useState("");

  //sintax of useEffect Hook
  useEffect(() => {
    if (triggerSearch) {
      async function fetchFood() {
        try {
          console.log("search Triggered");
          const reponse = await fetch(
            `${URL}?query=${query}&apiKey=${API_KEY}`
          );
          const data = await reponse.json();
          setFoodData(data.results);
        } catch (error) {
          console.error("Error fetching data", error);
        } finally {
          setTriggerSearch(false);
        }
      }
      fetchFood();
    }
  }, [triggerSearch, query]);

  const handleSearch = () => {
    setTriggerSearch(true);
  };
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search in Nonna's Recipes' Grandbook"
      />
      <button className={styles.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

