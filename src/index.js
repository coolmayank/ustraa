import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducer from'./reducer/combined';
import {Provider} from 'react-redux';
import Axios from 'axios';


let middleware = [thunk.withExtraArgument({ api: Axios })];
const store=createStore(allReducer,applyMiddleware(...middleware));

ReactDOM.render(

<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
