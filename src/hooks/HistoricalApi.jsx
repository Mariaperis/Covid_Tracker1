import { useState, useEffect } from "react";
import { getTodayValue } from "../utils/Prueba";

export function DateHook() {
    const api_url_historical = import.meta.env.VITE_API_URL_HISTORICAL;
    const [historical, setHistorical] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const api = async (url) => {
            try {
                const result = await fetch(url);
                const covid_data = await result.json();

                const parsed = covid_data.map(item => ({
                    country: item.country,
                    todayCases: getTodayValue(item.timeline, "cases"),
                    todayDeaths: getTodayValue(item.timeline, "deaths")
                }));
                setHistorical(parsed);
                setLoading(false); 

            } catch (error) {
                console.error("Error fetching API data:", error);
                setLoading(false);
            }
        };
        api(api_url_historical);
    }, [api_url_historical]);
    return { historical, loading };
}