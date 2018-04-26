import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../actions/auth';

export const Header = props => (
  <header className="header">
    <div className="content-container">
    <div className="header__content">
      <Link to="/dashboard" className="header__title">
        <h1>Expensify</h1>
      </Link>
      <button onClick={props.startLogout} className="button button--link">Log out</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
