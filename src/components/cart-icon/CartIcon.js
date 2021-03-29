import React from 'react'
import {connect} from 'react-redux';
import {ToggleCartHidden} from '../../redux/cart/cartActions'
import { ReactComponent as ShopingBag} from '../../assets/shopping-bag.svg'
import './Cart.scss'
const CartIcon = ({ToggleCartHidden}) =>(
    <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShopingBag className="shopping-icon"/>
    <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps = dispatch =>({
    ToggleCartHidden:() =>dispatch(ToggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon)