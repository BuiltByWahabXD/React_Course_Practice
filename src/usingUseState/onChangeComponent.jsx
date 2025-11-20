import React, { useState } from 'react';

const OnChangeComponent = () => {

    const [name, setName] = useState("Guest");
    const [quantity, setquantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setpayment] = useState("Cash on Delivery");
    const [shipping, setshipping] = useState("Standard Shipping");

    function handleNameChange(event) {
        setName(event.target.value);
    };
    function handleQuantityChange(event) {
        setquantity(event.target.value);
    };
    function handleCommentChange(event) {
        setComment(event.target.value);
    };
    function handlePaymentChange(event) {
        setpayment(event.target.value);
    };
    function handleShippingChange(event) {
        setshipping(event.target.value);
    };


    return (
        <div 
            style={{backgroundColor: "lightgray", margin: "20px", padding: "20px", border: "2px solid black", borderRadius: "10px", maxWidth: "400px"}}>
            
            <h3>Name: {name}</h3>
            <input placeholder="Enter Name" value={name} onChange={handleNameChange}></input>

            <h3>Quantity: {quantity}</h3>
            <input placeholder="Enter Quantity" type="number" value={quantity} onChange={handleQuantityChange}></input>

            <h3>Comment: {comment}</h3>
            <textarea placeholder="Enter Comment" value={comment} onChange={handleCommentChange}></textarea>

            <h3>Payment: {payment}</h3>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Credit Card">Credit Card</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>   
             </select>

            <h3>Shipping: {shipping}</h3>
            <label>
                <input type="radio" value="Standard Shipping" checked={shipping === "Standard Shipping"} onChange={handleShippingChange} /> Standard Shipping
            </label><br/>
            <label>
                <input type="radio" value="Express Shipping" checked={shipping === "Express Shipping"} onChange={handleShippingChange} /> Express Shipping
            </label>
        </div>

    )

};
export default OnChangeComponent;