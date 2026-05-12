const YEAR = "22";

export function getDate() {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getDate()}/${YEAR}`;
}

export function getTodayValue(timeline, key) {
    const data = timeline?.[key];
    if (!data) return 0;

    const today = getDate();
    const dates = Object.keys(data);
    const index = dates.indexOf(today);

    if (index <= 0) return 0;

    return data[dates[index]] - data[dates[index - 1]];
}
