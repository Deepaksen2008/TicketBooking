import "./MyOrder.css"
import { useLocation } from "react-router-dom";
import { assets } from '../../../assets/assets';

const MyOrder = () => {

    const location = useLocation();
    const ticketData = location.state
    console.log(ticketData);

    return (
        <div className='my-orders'>
            <h2>My Ticket</h2>
            <div className='container'>
            {ticketData.users.map((item, index) => (
                <div key={index} className='my-orders-order'>
                    <p>{index+1}.</p>
                    <p>{item.name}</p>
                    <p>{item.phone}</p>
                    <p>{item.age}</p>
                    <p><span>&#x25cf;F1{index}</span></p>
                    <button>Booked</button>
                </div>
            ))}
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Ticket details</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Number of Ticket</p>
                            <p>{ticketData.ticketData.ticketCount}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total Ticket Price</p>
                            <p>{ticketData.ticketData.totalPrice}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Show Time</p>
                            <p>02:45pm</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Processing fees</p>
                            <p>33.07</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Bill Amount</b>
                            <b>{ticketData.ticketData.totalPrice + 33.07}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrder