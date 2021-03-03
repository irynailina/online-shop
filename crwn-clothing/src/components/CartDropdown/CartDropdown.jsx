import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom';

// Components
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

// Styles
import './CartDropdown.styles.scss';

// Selectors
import {selectCartItems} from "../../redux/cart/cartSelectors";

// Actions
import {toggleCartHidden} from "../../redux/cart/cartActions";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>) :
            <span className="empty-message">Your cart is empty</span> }
        </div>

        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));