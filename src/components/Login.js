import React from "react";

const Login = ( {text1, text2} )=>{

    return (
        <>
            <span> {text1} </span>
            <span> {text2} </span>

            <form>
                <label htmlFor={"email"}>Enter Email</label>
                <input type={"text"} name={"email"} />

                <label htmlFor={"password"}>Enter Password</label>
                <input type={"text"} name={"password"} />

                <input type={"submit"} />
            </form>
        </>
    );
};

export default Login;

