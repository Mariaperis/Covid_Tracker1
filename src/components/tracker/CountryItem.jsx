function CountryItem({
  country,
  flag,
  total,
}) {

  return (

    <div className="country-item">

      <div className="country-info">

        <img
          src={flag}
          alt={country}
          className="country-flag"
        />

        <span>{country}</span>

      </div>

      <strong>
        {Number(total).toLocaleString()}
      </strong>

    </div>

  );
}

export default CountryItem;