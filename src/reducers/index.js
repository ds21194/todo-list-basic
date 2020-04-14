import { combineReducers } from 'redux'
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import userLogin from "./userLogin";

export default combineReducers({
    todos,
    visibilityFilter,
    userLogin
});

