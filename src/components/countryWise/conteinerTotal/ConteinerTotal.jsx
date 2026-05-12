
import dataTotal from '../../../assets/data/data-total'
import { TotalCard } from '../../common/total-cards/TotalCard.jsx'

export const ConteinerTotal = () => {
    return (
        <div className='total-conteiner'>
            {dataTotal.map((total) => (
            <TotalCard title={total.title}    
            number={total.number}
            color={total.color}
            />
             ))            
            }            
        </div>
    )
}
