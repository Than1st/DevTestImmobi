import {
  GET_KARYAWAN,
  DELETE_KARYAWAN,
  POST_KARYAWAN,
  PUT_KARYAWAN,
} from "../actions/KaryawanAction";

const initialState = {
  getKaryawanResult: false,
  getKaryawanLoading: false,
  getKaryawanError: false,

  postKaryawanResult: false,
  postKaryawanLoading: false,
  postKaryawanError: false,

  putKaryawanResult: false,
  putKaryawanLoading: false,
  putKaryawanError: false,

  deleteKaryawanResult: false,
  deleteKaryawanLoading: false,
  deleteKaryawanError: false,
};

const KaryawanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KARYAWAN:
      return {
        ...state,
        getKaryawanResult: action.payload.data,
        getKaryawanLoading: action.payload.loading,
        getKaryawanError: action.payload.errorMessage,
      };
    case POST_KARYAWAN:
      return {
        ...state,
        postKaryawanResult: action.payload.data,
        postKaryawanLoading: action.payload.loading,
        postKaryawanError: action.payload.errorMessage,
      };
    case PUT_KARYAWAN:
      return {
        ...state,
        putKaryawanResult: action.payload.data,
        putKaryawanLoading: action.payload.loading,
        putKaryawanError: action.payload.errorMessage,
      };
    case DELETE_KARYAWAN:
      return {
        ...state,
        deleteKaryawanResult: action.payload.data,
        deleteKaryawanLoading: action.payload.loading,
        deleteKaryawanError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default KaryawanReducer;
