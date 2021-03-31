import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import { ToggleCartHidden } from "../../redux/cart/cartActions";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(ToggleCartHidden());
      }}
    >
      Go To Checkout
    </CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
