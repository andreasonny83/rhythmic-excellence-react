import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({isOpen, onStateChange}) => (
  <BurgerMenu right isOpen={isOpen} onStateChange={onStateChange}>
    <NavLink exact to="/"
             onClick={ onStateChange }
             activeClassName="selected">
      Home
    </NavLink>
    <NavLink to="/News"
             onClick={ onStateChange }
             activeClassName="selected">
      News
    </NavLink>
    <NavLink to="/Team"
             onClick={ onStateChange }
             activeClassName="selected">
      Meet our team
    </NavLink>
    <NavLink to="/bla"
             onClick={ onStateChange }
             activeClassName="selected">
      Not found
    </NavLink>
  </BurgerMenu>
);

export default reduxBurgerMenu(Navbar);
