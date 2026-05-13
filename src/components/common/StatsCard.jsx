import "./statsCard.css";

function StatsCard({
  title,
  value,
  color,
}) {

  return (
    <div className="stats-card">

      <h3>{title}</h3>

      <h2 className={color}>
        {value.toLocaleString()}
      </h2>

    </div>
  );
}

export default StatsCard;