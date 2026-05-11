import React from 'react'
import './cardToday.css'

export const CardCases = ({flagUrl, countryName, totalCases}) => {
    return (
        <>
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag"/>
            <div className="text-cointainer">
                <h3 className="country-name">{countryName}</h3>
                <p className="country-tiles">{totalCases}</p>
            </div>
        </div>
        </>
    )
}