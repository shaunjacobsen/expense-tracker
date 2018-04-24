import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from './../../components/ExpenseListFilters';
import { filters, altFilters } from './../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('it should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('it should render ExpenseListFilters with alternate data correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: 'rent',
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find('select').simulate('change', {
    target: { value: 'date' },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount',
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'weeks');
  const endDate = moment(0).add(7, 'weeks');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle calendar datepicker focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
