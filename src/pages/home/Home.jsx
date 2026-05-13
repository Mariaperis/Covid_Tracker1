import Navigation from "../../components/layout/navbar/Navigation";
import "./home.css";

import fondoHome from "../../assets/img/fondoHome.jpg";
import covidLogo from "../../assets/img/banner-right-image1.png";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(4, 17, 45, 0.75),
            rgba(4, 17, 45, 0.75)
          ),
          url(${fondoHome})
        `,
      }}
    >
      <Navigation />

      <div className="hero">

        <div className="hero-text">

          <span className="hero-badge">
            COVID-19 LIVE TRACKER
          </span>

          <h1>
            Stay Home,
            <br />
            Stay Safe.
          </h1>

          <p>
            Human coronaviruses are common and are typically
            associated with mild illnesses similar to the common cold.
            COVID-19 has affected millions worldwide.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Tracker
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

        </div>

        <div className="hero-image">

          <img
            src={covidLogo}
            alt="covid"
          />

        </div>

      </div>
    </div>
  );
};

export default Home;