import { useState } from "react";
import './OrderPlace.css';
import { useNavigate, useLocation } from "react-router-dom";

const OrderPlace = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const ticketData = location.state;

    const [data, setData] = useState({
        firstName: "",
        age: "",
        phone: "",
    });

    const [users, setUsers] = useState([{ name: "", age: "", phone: "" }]);
    let orderItems = {users,ticketData};

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUserChange = (index, event) => {
        const { name, value } = event.target;
        const newUsers = [...users];
        newUsers[index] = { ...newUsers[index], [name]: value };
        setUsers(newUsers);
    };

    const addUser = () => {
        if (users.length < ticketData.ticketCount) {
            setUsers([...users, { name: "", age: "", phone: "" }]);
        }
    };

    const placeOrder = async (event) => {
        event.preventDefault();

    };

    const MyOrder = () => {
        navigate("/myorders", { state: orderItems });
    };

    return (
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
                <p className="title">Information</p>
                {users.map((user, index) => (
                    <div key={index} className="multi-fields">
                        <input
                            name="name"
                            onChange={(e) => handleUserChange(index, e)}
                            value={user.name}
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            name="age"
                            onChange={(e) => handleUserChange(index, e)}
                            value={user.age}
                            type="number"
                            placeholder="Age"
                        />
                        <input
                            name="phone"
                            onChange={(e) => handleUserChange(index, e)}
                            value={user.phone}
                            type="text"
                            placeholder="Phone"
                        />
                            <button type="button" onClick={addUser}>Add More</button>
                    </div>
                ))}
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Ticket Details</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Number of Ticket</p>
                            <p>{ticketData.ticketCount}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total Ticket Price</p>
                            <p>{ticketData.totalPrice}</p>
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
                            <b>Total Amount</b>
                            <b>{ticketData.totalPrice + 33.07}</b>
                        </div>
                    </div>
                    <button type="submit" onClick={()=>MyOrder()}>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default OrderPlace;
