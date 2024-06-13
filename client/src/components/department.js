import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteDepartment } from "../actions/DepartmentAction";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { GetDepartment } from "../actions/DepartmentAction";

export const Department = () => {
  const [isDel, setIsDel] = useState(false);
  const dispatch = useDispatch();
  const { getDepartmentResult, getDepartmentLoading, getDepartmentError } =
    useSelector((state) => state.DepartmentReducer);
  const delDepartment = (nama, id, event) => {
    Swal.fire({
      title: `Delete Department ${nama}?`,
      showCancelButton: true,
      confirmButtonText: "Ya",
      confirmButtonColor: "#5B92E5",
    }).then((res) => {
      if (res.isConfirmed) {
        event.preventDefault();
        setIsDel(true);
        dispatch(DeleteDepartment(id));
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
    dispatch(GetDepartment());
  }, [isDel]);

  return (
    <div classNameName="container-fluid">
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <h1>
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Department
            </a>
          </h1>
        </div>
        <div className="p-2">
          <Link
            to="/department/add"
            type="button"
            className="btn btn-outline-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Tambah Department
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Department</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {getDepartmentResult ? (
            getDepartmentResult.length !== 0 ? (
              getDepartmentResult.map((value, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{value.nama_department}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <Link
                          to={"/department/edit/" + value.id}
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => {
                            sessionStorage.setItem(
                              "nama_department",
                              value.nama_department
                            );
                          }}
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={(e) =>
                            delDepartment(value.nama_department, value.id, e)
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
          ) : getDepartmentLoading ? (
            <tr>
              <h2>Loading....</h2>
            </tr>
          ) : (
            <tr>
              <td colSpan="7" classNameName="text-center">
                {getDepartmentError}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
