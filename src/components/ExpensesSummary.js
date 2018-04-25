import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from './../selectors/expenses';
import expensesTotal from './../selectors/expenses-total';

export const ExpensesSummary = props => (
  <div>
    Viewing {props.expenseCount} expense{props.expenseCount === 1
      ? ' '
      : 's '}
    totalling {numeral(props.total / 100).format('$0,0.00')}
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
