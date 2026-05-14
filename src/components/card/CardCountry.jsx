import React from 'react'
import '../cardCountry.css'

export const CardCountry = ({flagUrl, countryName, totalCases, active, onClick}) => {
    return (
        <>
        <div className={`card-country-container ${active ? "active" : ""}`} onClick={onClick}>
            <img src={flagUrl} alt={countryName} className="country-flag"/>
            <div className="text-cointainer">
                <h3 className="country-name">{countryName}</h3>
                <p className="country-total-cases">{totalCases}</p>
            </div>
        </div>
        </>
    )
}
