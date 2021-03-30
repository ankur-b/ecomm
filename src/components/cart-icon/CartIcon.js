import React from "react";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cartActions";
import {selectCartItemsCount} from "../../redux/cart/cartSelector"
import { ReactComponent as ShopingBag } from "../../assets/shopping-bag.svg";
import "./Cart.scss";
const CartIcon = ({ ToggleCartHidden,itemCount}) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShopingBag className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
