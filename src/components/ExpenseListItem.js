import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
  <div>
    <strong>${props.amount / 100}</strong> <Link to={`/edit/${props.id}`}>{props.description}</Link>
  </div>
);

export default ExpenseListItem;