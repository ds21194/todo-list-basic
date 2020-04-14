import React, {Component} from "react";
import { setUserLogin, UserLogin } from "../actions"
import "../components/style.css";
import {useStore} from "react-redux";

const getOnChangeGetter = (key) => {
    return function(e) {
        this.setState({[key]: e.target.value});
    }
};

class RegisterForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            password: ''
        };
    }

    onNameChange = getOnChangeGetter("fname").bind(this);

    onEmailChange = getOnChangeGetter("email").bind(this);

    onPasswordChange = getOnChangeGetter("password").bind(this);

    postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3001/user",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type",
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    };

    sendForm = (event) => {
        event.preventDefault();
        console.log("indise send form");
        let data = {
            name: this.state.fname,
            email: this.state.email,
            password: this.state.email
        };

        this.setState(
            {
                fname: '',
                email: '',
                password: ''
            }
        );

        this.postData('http://localhost:3001/user', data)
            .then(data=>{
                const sessionObject = {
                    _id: data.id,
                    name: data.name,
                    email: data.email
                };
                const key = "loggedUser";
                localStorage.setItem(key, JSON.stringify(sessionObject));
                let store = useStore();
                store.dispatch(setUserLogin(UserLogin.USER_LOGGED_IN, key));
            })
            .catch((err)=>{
                console.log(err);
            });
    };

    render() {
        return (
            <form className={"register-form"} onSubmit={this.sendForm}>
                <label htmlFor={"fname"}> Full Name </label>
                <input type={"text"} name={"fname"} value={this.state.fname} onChange={this.onNameChange}/>

                <label htmlFor={"email"}> Email Address </label>
                <input type={"text"} name={"email"} value={this.state.email} onChange={this.onEmailChange}/>

                <label htmlFor={"password"}> Password </label>
                <input type={"password"} name={"password"} value={this.state.password} onChange={this.onPasswordChange}/>

                <input type={"submit"} />
            </form>
        );
    }
}

export default RegisterForm;
