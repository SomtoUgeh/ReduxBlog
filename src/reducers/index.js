import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
	post: postReducer,
	users: userReducer
});
