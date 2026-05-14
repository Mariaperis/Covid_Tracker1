import React from 'react'
import './cardglobal.css'

export const CardToday = ({flagUrl, countryName, todayCases}) => {
    return (
        <>
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag"/>
            <div className="text-cointainer">
                <h3 className="country-name">{countryName}</h3>
                <p className="country-tiles">{todayCases}</p>      
            </div>
        </div>
        </>
    )
}
