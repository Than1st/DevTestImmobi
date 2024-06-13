import {
  DELETE_JABATAN,
  GET_JABATAN,
  POST_JABATAN,
  PUT_JABATAN,
} from "../actions/JabatanAction";

const initialState = {
  getJabatanResult: false,
  getJabatanLoading: false,
  getJabatanError: false,

  postJabatanResult: false,
  postJabatanLoading: false,
  postJabatanError: false,

  putJabatanResult: false,
  putJabatanLoading: false,
  putJabatanError: false,

  deleteJabatanResult: false,
  deleteJabatanLoading: false,
  deleteJabatanError: false,
};

const JabatanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JABATAN:
      return {
        ...state,
        getJabatanResult: action.payload.data,
        getJabatanLoading: action.payload.loading,
        getJabatanError: action.payload.errorMessage,
      };
    case POST_JABATAN:
      return {
        ...state,
        postJabatanResult: action.payload.data,
        postJabatanLoading: action.payload.loading,
        postJabatanError: action.payload.errorMessage,
      };
    case PUT_JABATAN:
      return {
        ...state,
        putJabatanResult: action.payload.data,
        putJabatanLoading: action.payload.loading,
        putJabatanError: action.payload.errorMessage,
      };
    case DELETE_JABATAN:
      return {
        ...state,
        deleteJabatanResult: action.payload.data,
        deleteJabatanLoading: action.payload.loading,
        deleteJabatanError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default JabatanReducer;
