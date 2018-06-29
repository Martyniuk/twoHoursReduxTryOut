// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import App from './containers/App';
import { store } from './store';

// Theme
import './theme/init';

render(
    <Provider store = { store }>
        <App />
    </Provider>
    , document.getElementById('app'));
