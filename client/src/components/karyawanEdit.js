import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDepartment } from "../actions/DepartmentAction";
import { GetJabatan } from "../actions/JabatanAction";
import { useForm } from "react-hook-form";
import {
  GetKaryawanById,
  PostKaryawan,
  PutKaryawan,
} from "../actions/KaryawanAction";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export const KaryawanEdit = () => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState(0);
  const [selectedJabatan, setSelectedJabatan] = useState(0);
  const [disableJabatan, setDisableJabatan] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const dispatch = useDispatch();
  const { getDepartmentResult, getDepartmentLoading, getDepartmentError } =
    useSelector((state) => state.DepartmentReducer);
  const {
    getByIdKaryawanResult,
    getByIdKaryawanLoading,
    getByIdKaryawanError,
  } = useSelector((state) => state.DepartmentReducer);
  const { getJabatanResult, getJabatanLoading, getJabatanError } = useSelector(
    (state) => state.JabatanReducer
  );
  const putKaryawan = (data) => {
    const dataJson = {
      name: data.name,
      id_jabatan: selectedJabatan,
      age: data.age,
      gender: data.gender,
      gender: data.gender,
      tanggal_lahir: data.tanggal_lahir,
      alamat: data.alamat,
    };
    dispatch(PutKaryawan(dataJson, params.id));
    setIsPost(true);
  };
  useEffect(() => {
    setSelectedDept(sessionStorage.getItem("id_department"));
    setSelectedJabatan(sessionStorage.getItem("id_jabatan"));
    if (isPost) {
      let timerInterval;
      Swal.fire({
        title: "Sukses Edit Karyawan",
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
    if (selectedDept != 0) {
      setDisableJabatan(false);
      dispatch(GetJabatan({ id_department: selectedDept }));
    }
    dispatch(GetDepartment());

    var defaultValue = {};
    defaultValue.name = sessionStorage.getItem("name");
    defaultValue.id_jabatan = sessionStorage.getItem("id_jabatan");
    defaultValue.age = sessionStorage.getItem("age");
    defaultValue.gender = sessionStorage.getItem("gender");
    defaultValue.tanggal_lahir = sessionStorage.getItem("tanggal_lahir");
    defaultValue.alamat = sessionStorage.getItem("alamat");
    reset({ ...defaultValue });
  }, [selectedDept, isPost]);

  return (
    <div className="container">
      <div className="d-flex">
        <div className="py-2 flex-grow-1">
          <h1>
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Edit Karyawan
            </a>
          </h1>
        </div>
        <div className="p-2"></div>
      </div>
      <form key={1} onSubmit={handleSubmit(putKaryawan)}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nama
          </label>
          <input
            type="text"
            class="form-control"
            {...register("name", { required: true })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Umur
          </label>
          <input
            type="number"
            class="form-control"
            {...register("age", { required: true })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Gender
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              value="L"
              {...register("gender", { required: true })}
              {...(sessionStorage.getItem("gender") === "L" ? "checked" : "")}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Laki-laki
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              value="P"
              {...register("gender", { required: true })}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Perempuan
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Tanggal Lahir
          </label>
          <input
            type="date"
            class="form-control"
            {...register("tanggal_lahir", { required: true })}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Alamat
          </label>
          <textarea
            class="form-control"
            {...register("alamat", { required: true })}
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setSelectedDept(e.target.value);
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
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Jabatan
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            disabled={disableJabatan}
            onChange={(e) => {
              setSelectedJabatan(e.target.value);
            }}
          >
            <option selected disabled>
              Pilih Jabatan
            </option>
            {getJabatanResult ? (
              getJabatanResult.length !== 0 ? (
                getJabatanResult.map((value, index) => {
                  return <option value={value.id}>{value.nama_jabatan}</option>;
                })
              ) : (
                <option selected disabled>
                  Tidak ada Jabatan di Department ini
                </option>
              )
            ) : getJabatanLoading ? (
              <option>Loading...</option>
            ) : (
              <option>{getJabatanError}</option>
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
