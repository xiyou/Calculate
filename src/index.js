import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './index.css';
import Caluculate from './Caluculate';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Caluculate arr={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '×', '%','C','=']} />,
    document.getElementById('root')
);
registerServiceWorker();
