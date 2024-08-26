import { useEffect, useState } from "react";

export default function Search() {

    const [query, setQuery] = useState("");

    //sintax of useEffect Hook
    useEffect(() => {
        function demo() {
            console.log("useEffect used");
        }
        demo();
    }, [query]);

    return (
        <div>
            <input type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Nonna's Recipe" />
        </div>
    );
}