import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './index.css';
import Caluculate from './Caluculate';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Caluculate  />,
    document.getElementById('root')
);
registerServiceWorker();
