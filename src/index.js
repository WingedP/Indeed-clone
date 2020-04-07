import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';


let initialstate={
  user:{email:'',password:'',username:'',authenticate:false}}

const store=createStore(indeedReducer);
function indeedReducer(state=initialstate,action){
  if(action.type==='LOGIN'){
  state.user=action.payload;
  state.user.authenticate=true;
  console.log("login successful", state.user)
} else if (action.type==='LOGOUT'){
  // state.user=action.payload;
  state.user.authenticate=false;
  state.user.username='';
  state.user.email='';
  console.log("logout successful")
}
  return state}


ReactDOM.render(
 <Provider store={store}>
  <Router><App /></Router></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
