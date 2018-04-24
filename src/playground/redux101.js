import { createStore } from 'redux';

// action generators

const incrementCount = ({ changeBy = 1 } = {}) => ({
  type: 'INCREMENT',
  changeBy,
});

const decrementCount = ({ changeBy = 1 } = {}) => ({
  type: 'DECREMENT',
  changeBy,
});

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count,
});

// reducers
// - are pure functions: output is determined solely by input
// - never change state or action, they are passed in but should not directly be changed

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.changeBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.changeBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      }
    default:
      return state;
  }
}

const store = createStore();

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   changeBy: 5,
// });

store.dispatch(incrementCount({ changeBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ changeBy: 10 }));

store.dispatch(setCount({ count: 50 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());