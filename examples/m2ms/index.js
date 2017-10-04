import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '../../libs/Provider';
import store from '../../libs/Store';
import App from './App';


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("page-container"));