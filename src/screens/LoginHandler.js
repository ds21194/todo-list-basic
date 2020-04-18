import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterForm from "../components/RegisterForm";

function Nav() {
    return (
        <ul className={"login-handler-nav-links"}>
            <li>Register</li>
            <li>Login</li>
        </ul>
    );
}



function LoggingHandler() {
    const [isLogged, setIsLogged] = useState(false);

    const sessionKey = "loggedUser";

    let ShownComponent;
    if(!isLogged){
        // ShownComponent = <RegisterForm setRegistered={()=>setIsLogged(true)} sessionKey={sessionKey}/>
        ShownComponent = <Nav />
    }else{
        let userDetails = JSON.parse(localStorage.getItem(sessionKey));
        ShownComponent = <span> {`Hello ${userDetails.name}!`} </span>
    }

    return (
        <Router>
            {ShownComponent}
        </Router>
    );
}

export default LoggingHandler;
