import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import FaPlus from 'react-icons/lib/fa/plus';
import selectExpenses from './../selectors/expenses';
import expensesTotal from './../selectors/expenses-total';

export const ExpensesSummary = props => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{props.expenseCount}</span> expense{props.expenseCount === 1
          ? ' '
          : 's '}
        totalling <span>{numeral(props.total / 100).format('$0,0.00')}</span>
      </h1>
      <div className="page-header__actions">
        <Link to="/create" className="button">
          <FaPlus /> New Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    total: expensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
