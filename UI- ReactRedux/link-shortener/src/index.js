import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/js/all'
import Page from './components/home';

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('root')
);
