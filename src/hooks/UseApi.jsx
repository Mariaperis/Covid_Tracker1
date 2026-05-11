import { useState, useEffect } from "react";

export function TilesHook() {
    const api_url = import.meta.env.VITE_API_URL;
    //const api_url = "https://disease.sh/v3/covid-19/countries"
    //HOOK PRUEBA useState
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    //HOOK PRUEBA useState
    useEffect(() => {
        const api = async(url) => {
            const result = await fetch(url);
            let covid_data = await result.json();
            setCountries(covid_data);
            setLoading(false);
        };
        api(api_url);
    }, [api_url]);

    return {countries, loading};
}