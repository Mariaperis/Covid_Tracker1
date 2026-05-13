import React from 'react'
import './cardglobal.css'

export const CardTotalDeath = ({flagUrl, countryName, totaldeaths}) => {
    return (
        <>
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag"/>
            <div className="text-cointainer">
                <h3 className="country-name">{countryName}</h3>
                <p className="country-tiles">{totaldeaths}</p>
            </div>
        </div>
        </>
    )
}
/*export const ExportDateApi = (timeline) => {
  if (!timeline || !timeline.cases) return []; // ← evita el error

  const parseApiDate = (fechaString) => {
    const [mes, dia, añoCorto] = fechaString.split("/");
    return {
      dia: Number(dia),
      mes: Number(mes),
      año: 2000 + Number(añoCorto)
    };
  };

  const filterByYear = (year) => (fechaString) =>
    parseApiDate(fechaString).año === year;

  return Object.keys(timeline.cases)
    .filter(filterByYear(2020))
    .map(parseApiDate);
};
*/
