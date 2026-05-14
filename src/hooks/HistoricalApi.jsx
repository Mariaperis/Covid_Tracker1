import { useState, useEffect } from "react";
import { getHistorical } from "../api/endPoint";
import { getTodayValue } from "../utils/dateInfo";

export function DateHook() {
    const [historical, setHistorical] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const api = async () => {
            try {
                const covid_data = await getHistorical(); // already JSON

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
        api();
    }, []);

    return { historical, loading };
}