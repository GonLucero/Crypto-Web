import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// paso el provider para asignar el store, esto me permite que funcione redux
import {Provider} from 'react-redux'
import {store} from './store/index'


// Coloco el provider, para que funcione redux

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
