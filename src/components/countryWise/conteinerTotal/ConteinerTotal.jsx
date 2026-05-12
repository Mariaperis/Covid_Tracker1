
import dataTotal from '../../../assets/data/data-total'
import { TotalCard } from '../../common/total-cards/TotalCard.jsx'
import "./ConteinerTotal.css";

export const ConteinerTotal = () => {
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
