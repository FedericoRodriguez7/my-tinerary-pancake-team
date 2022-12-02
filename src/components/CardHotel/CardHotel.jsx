import './CardHotel.css'
import dataCities from '../../dataCities'
import dataHotels from '../../dataHotels'
import FotoCard from '../FotoCard/TituloyFotoCard'
import TituloCard from '../TituloCard/TituloCard'
import ContinenteCity from '../ContinenteCity/ContinenteCity'
import PopulationCity from '../PopulationCity/PopulationCity'
import Capacity from '../CapacityCard/Capacity'
import {Link as LinkRouter} from 'react-router-dom'


export default function CardHotel({ datos }) {

    return (

        <>
            <div className='card-Hotel'>

                <FotoCard foto={datos.photo[0]} />
                <div className='TituloCard2'>
                <TituloCard titulo={datos.name} />
                </div>
                <div className='UnderCard2'>
                    <Capacity Campo='Capacity' dato={datos.capacity} />

               
              
                </div>

                {dataHotels.map( everyHotel =>
                <LinkRouter to={`/Hotels/${everyHotel._id}`} key={everyHotel._id}>
                  <div className='botonCard2'  >
                    <button>More</button>
                   </div>  
                   </LinkRouter> )}
            </div>


        </>

    )






}