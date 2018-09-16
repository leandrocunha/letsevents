import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { combineReducers, createStore } from 'redux';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import App from './components/App';
import Cart from './reducers/Cart';
import Checkout from './reducers/Checkout';

const client = new ApolloClient({
  uri: 'http://dev.lets.events/graphql',
});

/** Build store to feed Provider */
const store = createStore(
  combineReducers({
    Cart,
    Checkout,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
