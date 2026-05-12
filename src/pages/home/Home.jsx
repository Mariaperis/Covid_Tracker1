import Navigation from "../../components/layout/navbar/Navigation";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="hero">
        <div className="hero-text">
          <h1>
            Stay Home, And Prayer For Victim Of Corona virus.
          </h1>

          <p>
            Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
            alt="covid"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;