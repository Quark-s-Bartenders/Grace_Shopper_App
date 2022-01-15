import { combineReducers } from "redux";
import allBallsReducer from "./allBallsReducer";

const finalReducer = combineReducers({
  pokeballs: allBallsReducer,
});

export default finalReducer;
