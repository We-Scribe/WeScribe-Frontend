import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
window.firebase.initializeApp({
  apiKey: "AIzaSyDnDV9cOMlN1ucdx19c0z9jxVbK-4feim0",
  databaseURL: "https://cis-hackathon-default-rtdb.firebaseio.com",
});

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
