import React from 'react'
import './cardToday.css'

export const CardTotalRecovered = ({flagUrl, countryName, totalrecovered}) => {
    return (
        <>
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag"/>
            <div className="text-cointainer">
                <h3 className="country-name">{countryName}</h3>
                <p className="country-tiles">{totalrecovered}</p> 
            </div>           
        </div>
        </>
    )
}
