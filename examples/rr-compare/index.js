
let React = require('react');
let ReactDOM = require('react-dom');
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import actions from 'actions';
import reducers from './reducers';
import App from './App';
const store = createStore(reducers,{});


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('page-container'));

