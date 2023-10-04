import {combineReducers} from "redux"
import currentUserReducer from './currentUser'
import chanelReducers from "./chanel";
import authReducer from "./auth";
import videoReducer from "./Video";
import likedVideoReducer from "./likedVideo";
export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
    videoReducer,
    likedVideoReducer,

});