import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route exact={true} path="/login/" component={Login}/>
            <Route exact={true} path="/register/" component={Register}/>
            <Route exact={true} path="/forgot/" component={Forgot}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
