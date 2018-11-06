import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgray};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;

  img {
    margin-right: 10px;
  }

  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => (
  <CartItemStyles>
    <img src={cartItem.item.image} width="100" alt={cartItem.item.title} />
    <div className="cart-item-details">
      <h3>{cartItem.item.title}</h3>
      <p>
        {formatMoney(cartItem.quantity * cartItem.item.price)}
        {" - "}
        <em>
          {cartItem.quantity} &times; {formatMoney(cartItem.item.price)} each
        </em>
      </p>
    </div>
  </CartItemStyles>
);

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
