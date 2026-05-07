import "./leftPanel.css";

function LeftPanel() {
  return (
    <div className="left-panel">

      <h1 className="dashboard-title">
        COVID-19 Tracker
      </h1>

      {/* SUMMARY CARDS */}

      <div className="summary-container">

        <div className="summary-card total">
          <div>
            <h3>Total Case</h3>
          </div>

          <div className="summary-info">
            <span className="summary-badge">
              +607496
            </span>

            <h2>581511314</h2>
          </div>
        </div>

        <div className="summary-card active">
          <div>
            <h3>Active Case</h3>
          </div>

          <div className="summary-info">
            <h2>575101133</h2>
          </div>
        </div>

        <div className="summary-card recovered">
          <div>
            <h3>Recovered Case</h3>
          </div>

          <div className="summary-info">
            <span className="summary-badge">
              +0
            </span>

            <h2>0</h2>
          </div>
        </div>

        <div className="summary-card deaths">
          <div>
            <h3>Deaths Case</h3>
          </div>

          <div className="summary-info">
            <span className="summary-badge">
              +2143
            </span>

            <h2>6410181</h2>
          </div>
        </div>

      </div>

      {/* COUNTRIES */}

      <div className="countries-section">

        <h2 className="countries-title">
          Top 10 Country
        </h2>

        <div className="country-item">
          <span>🇺🇸 USA</span>
          <strong>86503057</strong>
        </div>

        <div className="country-item">
          <span>🇮🇹 Italy</span>
          <strong>17490451</strong>
        </div>

        <div className="country-item">
          <span>🇬🇧 United Kingdom</span>
          <strong>22305893</strong>
        </div>

        <div className="country-item">
          <span>🇪🇸 Spain</span>
          <strong>12403245</strong>
        </div>

        <div className="country-item">
          <span>🇦🇫 Afghanistan</span>
          <strong>180615</strong>
        </div>

        <div className="country-item">
          <span>🇦🇱 Albania</span>
          <strong>276342</strong>
        </div>

        <div className="country-item">
          <span>🇦🇩 Andorra</span>
          <strong>42894</strong>
        </div>

        <div className="country-item">
          <span>🇦🇹 Austria</span>
          <strong>4264738</strong>
        </div>

        <div className="country-item">
          <span>🇧🇿 Belize</span>
          <strong>59788</strong>
        </div>

      </div>

    </div>
  );
}

export default LeftPanel;