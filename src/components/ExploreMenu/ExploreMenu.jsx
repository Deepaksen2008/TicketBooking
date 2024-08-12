import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const ExploreMenu = () => {

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/movies/${itemId}`)
  }

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Recommended movies</h1>
      <p className='explore-menu-text'>Book Your Tickets Now: Enjoy a Diverse Selection of Exciting Movies!</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=> handleItemClick(item._id)} key={index} className='explore-menu-list-item'>
              <img className='' src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}


export default ExploreMenu;
