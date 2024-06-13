import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteJabatan } from "../actions/JabatanAction";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { GetJabatan } from "../actions/JabatanAction";

export const Jabatan = () => {
  const [isDel, setIsDel] = useState(false);
  const dispatch = useDispatch();
  const { getJabatanResult, getJabatanLoading, getJabatanError } = useSelector(
    (state) => state.JabatanReducer
  );

  const delJabatan = (nama, id, event) => {
    Swal.fire({
      title: `Delete Jabatan ${nama}?`,
      showCancelButton: true,
      confirmButtonText: "Ya",
      confirmButtonColor: "#5B92E5",
    }).then((res) => {
      if (res.isConfirmed) {
        event.preventDefault();
        setIsDel(true);
        dispatch(DeleteJabatan(id));
      }
    });
  };

  useEffect(() => {
    if (isDel) {
      Swal.fire({
        title: "Good job!",
        text: "Data berhasil di Hapus",
        icon: "success",
      });
      setIsDel(false);
    }
    dispatch(GetJabatan());
  }, [isDel]);

  return (
    <div classNameName="container-fluid">
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <h1>
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Jabatan
            </a>
          </h1>
        </div>
        <div className="p-2">
          <Link
            to="/jabatan/add"
            type="button"
            className="btn btn-outline-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Tambah Jabatan
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Jabatan</th>
            <th scope="col">Department</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {getJabatanResult ? (
            getJabatanResult.length !== 0 ? (
              getJabatanResult.map((value, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{value.nama_jabatan}</td>
                    <td>
                      {value.id_department_table_department.nama_department}
                    </td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <Link
                          to={"/jabatan/edit/" + value.id}
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => {
                            sessionStorage.setItem(
                              "nama_jabatan",
                              value.nama_jabatan
                            );
                            sessionStorage.setItem(
                              "id_department",
                              value.id_department
                            );
                          }}
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={(e) =>
                            delJabatan(value.nama_jabatan, value.id, e)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" classNameName="text-center">
                  Tidak ada data
                </td>
              </tr>
            )
          ) : getJabatanLoading ? (
            <tr>
              <h2>Loading....</h2>
            </tr>
          ) : (
            <tr>
              <td colSpan="7" classNameName="text-center">
                {getJabatanError}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
