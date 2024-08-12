import { useState } from 'react';
import './Movies.css';
import { menu_list } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';

const Movies = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movie = menu_list.find(item => item._id === id);
  console.log(movie);

  const handleBookNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='movie-container'>
        <img className='movie' src={movie.menu_card} alt={movie.menu_name} />
      </div>
      <div className='movie-contents'>
        <button onClick={handleBookNowClick}>Book now</button>
      </div>
      <div className='food-display' id='food-display'>
        <h2>About the movie</h2>
        <p className='explore-menu-text'>Wolverine is recovering from his injuries when he meets the loudmouth, Deadpool. They team up to defeat a common enemy.</p>
        <div className='food-display-list'>
          <button onClick={handleBookNowClick}>Book now</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Movies;
