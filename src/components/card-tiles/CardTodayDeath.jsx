import React from 'react'
import './cardglobal.css'

export const CardTodayDeath = ({flagUrl, countryName, todaydeaths}) => {
    return (
        <>
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag"/>
            <div className="text-cointainer">
                <h3 className="country-name">{countryName}</h3>
                <p className="country-tiles">{todaydeaths}</p> 
            </div>           
        </div>
        </>
    )
}
