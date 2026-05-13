import { Wrench } from "lucide-react";

import "./underConstruction.css";

function UnderConstruction({
  title = "Page under construction",
  subtitle = "This section will be available soon.",
}) {
  return (
    <div className="right-panel construction-page">

      <div className="construction-card">

        <div className="construction-icon">
          <Wrench size={50} />
        </div>

        <span className="construction-badge">
          Coming soon
        </span>

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

    </div>
  );
}

export default UnderConstruction;