import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteKaryawan, GetKaryawan } from "../actions/KaryawanAction";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Karyawan = () => {
  const [isDel, setIsDel] = useState(false);
  const dispatch = useDispatch();
  const { getKaryawanResult, getKaryawanLoading, getKaryawanError } =
    useSelector((state) => state.KaryawanReducer);

  const delKaryawan = (nama, id, event) => {
    Swal.fire({
      title: `Delete Karyawan ${nama}?`,
      showCancelButton: true,
      confirmButtonText: "Ya",
      confirmButtonColor: "#5B92E5",
    }).then((res) => {
      if (res.isConfirmed) {
        event.preventDefault();
        setIsDel(true);
        dispatch(DeleteKaryawan(id));
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
    dispatch(GetKaryawan());
  }, [isDel]);

  return (
    <div classNameName="container-fluid">
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <h1>
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Karyawan
            </a>
          </h1>
        </div>
        <div className="p-2">
          <Link
            to="/karyawan/add"
            type="button"
            className="btn btn-outline-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Tambah Karyawan
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Jabatan</th>
            <th scope="col">Umur</th>
            <th scope="col">Gender</th>
            <th scope="col">Tanggal Lahir</th>
            <th scope="col">Alamat</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {getKaryawanResult ? (
            getKaryawanResult.length !== 0 ? (
              getKaryawanResult.map((value, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{value.name}</td>
                    <td>{value.id_jabatan_table_jabatan.nama_jabatan}</td>
                    <td>{value.age}</td>
                    <td>{value.gender}</td>
                    <td>{value.tanggal_lahir}</td>
                    <td>{value.alamat}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <Link
                          to={"/karyawan/edit/" + value.id}
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => {
                            sessionStorage.setItem("name", value.name);
                            sessionStorage.setItem(
                              "id_jabatan",
                              value.id_jabatan
                            );
                            sessionStorage.setItem(
                              "id_department",
                              value.id_jabatan_table_jabatan.id_department
                            );
                            sessionStorage.setItem("age", value.age);
                            sessionStorage.setItem("gender", value.gender);
                            sessionStorage.setItem(
                              "tanggal_lahir",
                              value.tanggal_lahir
                            );
                            sessionStorage.setItem("alamat", value.alamat);
                          }}
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={(e) => delKaryawan(value.name, value.id, e)}
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
          ) : getKaryawanLoading ? (
            <tr>
              <h2>Loading....</h2>
            </tr>
          ) : (
            <tr>
              <td colSpan="7" classNameName="text-center">
                {getKaryawanError}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
