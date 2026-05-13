import { InfoHook } from "./UseApi";
import { DateHook } from "./HistoricalApi";

export function MergedApi() {
    const { countries, loading } = InfoHook();
    const { historical } = DateHook();

    if (loading) return { loading: true, getTop: () => [] };

    const histMap = Object.fromEntries(
        historical.map(h => [h.country, h])
    );

    const merged = countries.map(c => {
        const hist = histMap[c.country] || {};

        return {
            ...c,
            todayCases: hist.todayCases ?? 0,
            todayDeaths: hist.todayDeaths ?? 0

        };
    });

    const getTop = (key) =>
        [...merged]
            .filter(item => typeof item[key] === "number")
            .sort((a, b) => b[key] - a[key])
            .slice(0, 10);

    return { loading: false, getTop };
}
