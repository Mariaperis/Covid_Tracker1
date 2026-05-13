import "./statsCard.css";


function StatsCard({
  title,
  value,
  color,
  icon,
}) {

  return (
    <div className="stats-card">

      <div className="stats-virus-icon">
        <img src={icon} alt="virus-icon" />
      </div>

      <h3>{title}</h3>

      <div className="header-line"></div>

      <h2 className={color}>
        {value.toLocaleString()}
      </h2>

    </div>
  );
}

export default StatsCard;