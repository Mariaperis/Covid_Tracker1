import { useState, useEffect } from "react";

export function InfoHook() {
    const api_url = import.meta.env.VITE_API_URL;
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        try {
            const api = async(url) => {
                const result = await fetch(url);
                let covid_data = await result.json();
                setCountries(covid_data);
                setLoading(false);
            };
            api(api_url);
        } catch (error) {
            console.error("Error fetching API data:", error);
            setLoading(false);
        }
    }, [api_url]);
    return {countries, loading};
}
