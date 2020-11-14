import { combineReducers } from "redux";
import currentUser from "./currentUser";
import households from "./households";

export default combineReducers({
  currentUser,
  households
});
