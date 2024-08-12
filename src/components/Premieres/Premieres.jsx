import './Premieres.css'
import { premiere } from '../../assets/assets'

const Premieres = () => {

    return (
        <div className='display' id='premiere'>
            <h2>Premieres</h2>
            <p className='explore-menu-text'>Book Your Tickets Now: Enjoy a Diverse Selection of Exciting Movies!</p>
            <div className='display-list'>
                {premiere.map((item, index) => {
                    return( 
                    <div key={index} className='explore-menu-list-item'>
              <img className='' src={item.premiere_image} alt='' />
              <p>{item.premiere_name}</p>
            </div>
                    )
                })}
            </div>
        </div>
    )
} 

export default Premieres