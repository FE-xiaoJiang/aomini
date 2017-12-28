import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '../../modules/Provider';
import store from '../../modules/Store';
import App from './App';


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("page-container"));