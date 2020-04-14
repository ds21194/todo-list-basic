import { UserLogin } from "../actions";

const initialObject = {
    loginAction: UserLogin.USER_LOGGED_OUT,
    loginSession: undefined
};

const userLogin = (state = initialObject, action) => {
    switch (action.type) {
        case('SET_LOGIN_USER'):
            return ({
                loginAction: action.loginAction,
                loginSession: action.loginSession
            });
        default:
            return state;
    }
};

export default userLogin;
