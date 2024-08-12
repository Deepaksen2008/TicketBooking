import './Navbar.css';
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets';


const Navbar = () => {


  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt='' className='logo' /></Link>

      <ul className="navbar-menu">
        <Link to='/' >Home</Link>
        <a href='#explore-menu'>Recommended</a>
        <a href='#premiere' >Premieres</a>
        <a href='#footer'>contact</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          Bhopal
          <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
        </div>
         <button >sign in</button>
          <div className='navbar-profile'>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
