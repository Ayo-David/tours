import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Tours/App';
//import App from './Grocery/AppGrocery';
//import App from './FunctionalStateUpdates'
//import App from './Slides/index'
//import App from './Accordion/AppAccordion'
//import App from './FoodMenu/AppMenu'
//import App from './NavBar/AppNavBar'
import App from './SideBarModal/AppSideBarModal'
//import App from './SubMenu/AppSubMenu'
//import App from './Reviews/AppReview'
import { MyContextProvider } from './SideBarModal/DataLayer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
