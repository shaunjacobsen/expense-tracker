import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../actions/auth';

export const Header = (props) => (
  <div>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
    <button onClick={props.startLogout}>Log out</button>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
