import axios from "axios";
export const GET_JABATAN = "GET_JABATAN";
export const POST_JABATAN = "POST_JABATAN";
export const PUT_JABATAN = "PUT_JABATAN";
export const DELETE_JABATAN = "DELETE_JABATAN";

export const GetJabatan = (data) => {
  return async (dispatch) => {
    dispatch({
      type: GET_JABATAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "POST",
      url: "http://localhost:4000/jabatan",
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_JABATAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_JABATAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data.message,
          },
        });
      });
  };
};
export const PostJabatan = (data) => {
  return async (dispatch) => {
    dispatch({
      type: POST_JABATAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "POST",
      url: "http://localhost:4000/jabatan/create",
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: POST_JABATAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: POST_JABATAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data,
          },
        });
      });
  };
};
export const PutJabatan = (data, id) => {
  return async (dispatch) => {
    dispatch({
      type: PUT_JABATAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "PUT",
      url: "http://localhost:4000/jabatan/update/" + id,
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: PUT_JABATAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: PUT_JABATAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data,
          },
        });
      });
  };
};
export const DeleteJabatan = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_JABATAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "DELETE",
      url: "http://localhost:4000/jabatan/delete/" + id,
      timeout: 120000,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: DELETE_JABATAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: DELETE_JABATAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data.message,
          },
        });
      });
  };
};
