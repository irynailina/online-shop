import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

// Actions
import {toggleCartHidden} from "../../redux/cart/cartActions";

// Styles
import './CartIcon.styles.scss';

// Assets
import {ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg";

// Selectors
import {selectCartItemsCount} from "../../redux/cart/cartSelectors";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);