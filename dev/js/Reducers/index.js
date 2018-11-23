import {combineReducers} from "redux";
import userReducer from "./reducer-user";
import activeUserReducer from "./reducer-active-user";

const allReducers = combineReducers({
    user: userReducer,
    activeUser: activeUserReducer
});

export default allReducers;