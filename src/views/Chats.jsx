function RightPanel() {
  return (
    <div className="right-panel">

      <div className="dashboard-header">

        <select className="country-select">
          <option>Afghanistan</option>
        </select>

        <p className="updated-date">
          Updated: June 5, 2022
        </p>

      </div>

      <div className="stats-grid">

        <div className="stats-card">
          <h3>Total Cases</h3>
          <h2 className="blue">86503057</h2>
        </div>

      </div>

    </div>
  );
}

export default RightPanel;