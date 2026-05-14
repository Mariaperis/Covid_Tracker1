function SummaryCard({
  title,
  value,
  badge,
  type,
}) {
  return (
    <div className={`summary-card ${type}`}>

      <div>
        <h3>{title}</h3>
      </div>

      <div className="summary-info">

        {badge && (
          <span className="summary-badge">
            {badge}
          </span>
        )}

        <h2>{Number(value).toLocaleString()}</h2>

      </div>

    </div>
  );
}

export default SummaryCard;