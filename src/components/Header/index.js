import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

const propTypes = {
  cartSize: PropTypes.isRequired,
};

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

Header.propTypes = propTypes;

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
