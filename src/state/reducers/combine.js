import { combineReducers } from "redux";
import catsReducer from "./catsReducer";

const rootReducer = combineReducers({
    catsInfo: catsReducer
})

export default rootReducer