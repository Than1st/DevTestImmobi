import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDepartment } from "../actions/DepartmentAction";
import { GetJabatan } from "../actions/JabatanAction";
import { useForm } from "react-hook-form";
import { PostJabatan } from "../actions/JabatanAction";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const JabatanAdd = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const [isPost, setIsPost] = useState(false);
  const dispatch = useDispatch();
  const { getDepartmentResult, getDepartmentLoading, getDepartmentError } =
    useSelector((state) => state.DepartmentReducer);
  const postJabatan = (data) => {
    const dataJson = {
      nama_jabatan: data.nama_jabatan,
      id_department: selectedDepartment,
    };
    dispatch(PostJabatan(dataJson));
    setIsPost(true);
  };
  useEffect(() => {
    if (isPost) {
      let timerInterval;
      Swal.fire({
        title: "Sukses tambah Jabatan",
        html: "Auto Close",
        timer: 1100,
        showConfirmButton: false,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.isDismissed) {
          reset();
          navigate(-1);
        }
      });
    }
    dispatch(GetDepartment());
  }, [isPost]);

  return (
    <div className="container">
      <div className="d-flex">
        <div className="py-2 flex-grow-1">
          <h1>
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Tambah Jabatan
            </a>
          </h1>
        </div>
        <div className="p-2"></div>
      </div>
      <form key={1} onSubmit={handleSubmit(postJabatan)}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nama Jabatan
          </label>
          <input
            type="text"
            class="form-control"
            {...register("nama_jabatan", { required: true })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
            }}
          >
            <option selected disabled>
              Pilih Department
            </option>
            {getDepartmentResult ? (
              getDepartmentResult.length !== 0 ? (
                getDepartmentResult.map((value, index) => {
                  return (
                    <option value={value.id}>{value.nama_department}</option>
                  );
                })
              ) : (
                <option>Tidak ada Department</option>
              )
            ) : getDepartmentLoading ? (
              <option>Loading...</option>
            ) : (
              <option>{getDepartmentError}</option>
            )}
          </select>
        </div>
        <button type="submit" className="btn btn-outline-primary btn-lg w-100">
          Submit
        </button>
      </form>
    </div>
  );
};
