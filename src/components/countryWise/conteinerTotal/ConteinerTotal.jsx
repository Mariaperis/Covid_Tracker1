
import useCountryWise from "../../../hooks/useCountryWise.js";

import dataTotal from '../../../assets/data/data-total'
import { TotalCard } from '../../common/total-cards/TotalCard.jsx'
import "./ConteinerTotal.css";

export const ConteinerTotal = () => {
    const { filterCountries, loading } = useCountryWise();
  console.log(filterCountries);

  if(loading) {
    return <p>Loading...</p>;
  }
  
    return (
        <ul className='total-conteiner'>
           
            {dataTotal.map((total) => (
            <li key={total.title}>
            <TotalCard 
            title={total.title}    
            number={total.number}
            color={total.color}
            />
            </li>         
            ))            
            }               
        </ul>
    )
}
