import axios from "axios";
export const GET_KARYAWAN = "GET_KARYAWAN";
export const GET_KARYAWAN_BY_ID = "GET_KARYAWAN_BY_ID";
export const POST_KARYAWAN = "POST_KARYAWAN";
export const PUT_KARYAWAN = "PUT_KARYAWAN";
export const DELETE_KARYAWAN = "DELETE_KARYAWAN";

export const GetKaryawan = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_KARYAWAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "GET",
      url: "http://localhost:4000/karyawan",
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: GET_KARYAWAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_KARYAWAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data.message,
          },
        });
      });
  };
};

export const PostKaryawan = (data) => {
  return async (dispatch) => {
    dispatch({
      type: POST_KARYAWAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "POST",
      url: "http://localhost:4000/karyawan/create",
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: POST_KARYAWAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: POST_KARYAWAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data,
          },
        });
      });
  };
};
export const PutKaryawan = (data, id) => {
  return async (dispatch) => {
    dispatch({
      type: PUT_KARYAWAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "PUT",
      url: "http://localhost:4000/karyawan/update/" + id,
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: PUT_KARYAWAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: PUT_KARYAWAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data,
          },
        });
      });
  };
};

export const DeleteKaryawan = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_KARYAWAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    await axios({
      method: "DELETE",
      url: "http://localhost:4000/karyawan/delete/" + id,
      timeout: 120000,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: DELETE_KARYAWAN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: DELETE_KARYAWAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: e.response.data.message,
          },
        });
      });
  };
};
