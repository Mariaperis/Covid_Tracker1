import React from 'react'
import './cardToday.css'

export const CardActive = ({flagUrl, countryName, totalactive}) => {
    return (
        <>
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag mask-clip-border border-3 p-1.5 mask-"/>
            <div className="text-cointainer">
                <h3 className="country-name">{countryName}</h3>
                <p className="country-total-active">{totalactive}</p>  
            </div>   
        </div>
        </>
    )
}
