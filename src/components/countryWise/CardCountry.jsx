import "./cardCountry.css";

export const CardCountry = ({
  flagUrl,
  countryName,
  onClick,
  active,
}) => {
  return (
    <div
      className={`card-country-container ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <img
        src={flagUrl}
        alt={countryName}
        className="country-flag"
      />

      <p className="country-name">{countryName}</p>
    </div>
  );
};