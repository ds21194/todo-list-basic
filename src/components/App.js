import React from "react";
import Footer from "./Footer";
import AddTodo from "../screens/AddTodo";
import VisibleTodoList from "../screens/VisibleTodoList";
import RegisterForm from "../screens/RegisterForm";
import './style.css';

const App = (store) => (
    <div id={"app"}>
        <RegisterForm />
        <AddTodo />
        <Footer />
        <VisibleTodoList />
    </div>
);

export default App
