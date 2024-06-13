import {
  DELETE_DEPARTMENT,
  GET_DEPARTMENT,
  POST_DEPARTMENT,
  PUT_DEPARTMENT,
} from "../actions/DepartmentAction";

const initialState = {
  getDepartmentResult: false,
  getDepartmentLoading: false,
  getDepartmentError: false,

  postDepartmentResult: false,
  postDepartmentLoading: false,
  postDepartmentError: false,

  putDepartmentResult: false,
  putDepartmentLoading: false,
  putDepartmentError: false,

  deleteDepartmentResult: false,
  deleteDepartmentLoading: false,
  deleteDepartmentError: false,
};

const DepartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENT:
      return {
        ...state,
        getDepartmentResult: action.payload.data,
        getDepartmentLoading: action.payload.loading,
        getDepartmentError: action.payload.errorMessage,
      };
    case POST_DEPARTMENT:
      return {
        ...state,
        postDepartmentResult: action.payload.data,
        postDepartmentLoading: action.payload.loading,
        postDepartmentError: action.payload.errorMessage,
      };
    case PUT_DEPARTMENT:
      return {
        ...state,
        putDepartmentResult: action.payload.data,
        putDepartmentLoading: action.payload.loading,
        putDepartmentError: action.payload.errorMessage,
      };
    case DELETE_DEPARTMENT:
      return {
        ...state,
        deleteDepartmentResult: action.payload.data,
        deleteDepartmentLoading: action.payload.loading,
        deleteDepartmentError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default DepartmentReducer;
