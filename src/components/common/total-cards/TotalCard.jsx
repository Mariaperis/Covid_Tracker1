import "./TotalCard.css";
import covidIcon from "../../../assets/icons/covid-defult.svg";

export const TotalCard = ({title, number, color}) => {    
  return (
                                           
    <div className="total-card-container">
      <div className="card-wigget">
        <div className="covid-icon">
            <img src={covidIcon} alt="Covid icon" className={color}/>
        </div>
        <div className="info">
          <h3 className="total-tit">{title}</h3>  
          <h2 className= {color}> {number}</h2>         
        </div>
      </div>
    </div>
  );
};
