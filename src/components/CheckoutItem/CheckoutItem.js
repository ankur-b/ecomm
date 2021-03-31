import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({cartItem:{name,imageUrl,price,quantity}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="imge"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{price}</span>
        <span className="price">{quantity}</span>
        <span className="remove-button">&#10005;</span>
    </div>
)
export default CheckoutItem;