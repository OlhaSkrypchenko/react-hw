import './scss/style.scss'
import App from './App.js'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store/index.js';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={store}> 
        <App />
    </Provider> 
);



