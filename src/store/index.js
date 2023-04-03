import { legacy_createStore } from 'redux';

const counterReducer = (
  state = { coffee: 0, sugar: 0, isLoggedIn: false },
  action
) => {
  if (action.type === 'incrementCoffee') {
    return {
      coffee: state.coffee + 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === 'decrementCoffee') {
    return {
      coffee: state.coffee - 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === 'increaseCoffee') {
    return {
      coffee: state.coffee + action.number,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === 'incrementSugar') {
    return {
      coffee: state.coffee,
      sugar: state.sugar + 1,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === 'decrementSugar') {
    return {
      coffee: state.coffee,
      sugar: state.sugar - 1,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === 'increaseSugar') {
    return {
      coffee: state.coffee,
      sugar: state.sugar + action.number,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === 'logIn') {
    return {
      coffee: +localStorage.getItem('coffee') ||state.coffee,
      sugar: +localStorage.getItem('sugar') ||state.sugar,
      isLoggedIn: true,
    };
  }

  if (action.type === 'logOut') {
    return {
      coffee:  0 ,
      sugar: 0,
      isLoggedIn: false,
    };
  }

  if (action.type === 'clearData') {
    return {
      coffee: 0,
      sugar: 0,
      isLoggedIn: state.isLoggedIn,
    };
  }
  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
