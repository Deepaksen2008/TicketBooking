import { useState } from 'react';
import './Modal.css'; 
import { languages, theaters, seatCategories, showTimes } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [selectedTheater, setSelectedTheater] = useState('INOX');
  const [selectedCategory, setSelectedCategory] = useState('Lower');
  const [selectedShowTime, setSelectedShowTime] = useState(showTimes[0]);

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleIncrease = () => setTicketCount(ticketCount + 1);
  const handleDecrease = () => setTicketCount(ticketCount > 1 ? ticketCount - 1 : 1);

  const handleBook = () => {
    const selectedData = {
      ticketCount,
      language: selectedLanguage,
      theater: selectedTheater,
      category: selectedCategory,
      showTime: selectedShowTime,
      totalPrice: seatCategories[selectedCategory] * ticketCount
    };

    console.log(selectedData);
    navigate('/Orderplace', { state: selectedData });
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Select Tickets</h2>

<div className='model'>
        <div className='modal-select'>
          <label htmlFor='language'>Language:</label>
          <select 
            id='language'
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map(language => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className='modal-select'>
          <label htmlFor='theater'>Theater:</label>
          <select 
            id='theater'
            value={selectedTheater}
            onChange={(e) => setSelectedTheater(e.target.value)}
          >
            {theaters.map(theater => (
              <option key={theater} value={theater}>
                {theater}
              </option>
            ))}
          </select>
        </div>
</div>
<div className='model'>

        <div className='modal-select'>
          <label htmlFor='category'>Seat Category:</label>
          <select 
            id='category'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(seatCategories).map(category => (
              <option key={category} value={category}>
                {category} - ₹{seatCategories[category]}
              </option>
            ))}
          </select>
        </div>

        <div className='modal-select'>
          <label htmlFor='showTime'>Show Time:</label>
          <select 
            id='showTime'
            value={selectedShowTime}
            onChange={(e) => setSelectedShowTime(e.target.value)}
          >
            {showTimes.map(showTime => (
              <option key={showTime} value={showTime}>
                {showTime}
              </option>
            ))}
          </select>
        </div>
</div>
        <div className='ticket-controls'>
          <button onClick={handleDecrease}>-</button>
          <span>{ticketCount}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

        <button className='modal-close' onClick={onClose}>Close</button>
        <button className='modal-book' onClick={handleBook}>Book {ticketCount} Ticket(s)</button>
      </div>
    </div>
  );
};

export default Modal;
