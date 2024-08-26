import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "03539d53cece40dc8ed02b29d023b710";

export default function Search({foodData,setFoodData}) {

    const [query, setQuery] = useState("");
    const [triggerSearch, setTriggerSearch] = useState(false);

    //sintax of useEffect Hook
    useEffect(() => {
        if (triggerSearch) {
            async function fetchFood() {
                try {
                    const reponse = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
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

    const handleSearch= ()=> {
        setTriggerSearch(true);
    }
    return (
        <div>
            <input type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Nonna's Recipe" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}