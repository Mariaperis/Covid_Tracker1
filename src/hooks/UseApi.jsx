import { useState, useEffect } from "react";
import { getCountries } from '../api/endPoint';

export function InfoHook() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        try {
            const api = async() => {
                const result = await getCountries();
                setCountries(result);
                setLoading(false);
            };
            api();
        } catch (error) {
            console.error("Error fetching API data:", error);
            setLoading(false);
        }
    }, []);
    return {countries, loading};
}
