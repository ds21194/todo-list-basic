import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Footer";
import AddTodo from "../screens/AddTodo";
import VisibleTodoList from "../screens/VisibleTodoList";
import LoggingHandler from "../screens/LoginHandler";
import Login from "./Login";
import './style.css';

const App = (store) => (
    <div id={"app"}>
        <Login text1={"is this"} text2={"works?"}/>
        <LoggingHandler />
        <AddTodo />
        <Footer />
        <VisibleTodoList />
    </div>
);

export default App
