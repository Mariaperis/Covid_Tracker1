import  "./CardCountry.css"

export const CardCountry = ({flagUrl, countryName}) => {
    return (
        <div className="card-country-container">
            <img src={flagUrl} alt={countryName} className="country-flag"/>
            <p className="country-name">{countryName}</p>
        </div>

    )
}
