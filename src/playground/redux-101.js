import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure functions
// 2. A Reducer depends only on it's inputs (parameters)
// 3. Reducers should not change things outside of the reducer
// 4. Reducers should never directly change state or action

const countReducer = (state = { count: 0 }, {type, incrementBy, decrementBy, count}) => {
  switch(type) {
    case 'INCREMENT':
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count
      }
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions

// I'd like to increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// I'd like to reset the count
store.dispatch(resetCount());

// I'd like to decrement the count
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

// I'd like to set the count to a specific value
store.dispatch(setCount({ count: -100 }));






