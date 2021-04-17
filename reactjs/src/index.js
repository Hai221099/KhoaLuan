import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"; 
import { createGloblaStore } from "./store/index";
// import Layout from './Layout';
import App from './App'

const store = createGloblaStore();

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
    
  // </React.StrictMode>,
  <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
