import { combineReducers } from "redux";
import KaryawanReducer from "./KaryawanReducer";
import DepartmentReducer from "./DepartmentReducer";
import JabatanReducer from "./JabatanReducer";

export default combineReducers({
  KaryawanReducer,
  DepartmentReducer,
  JabatanReducer,
});
