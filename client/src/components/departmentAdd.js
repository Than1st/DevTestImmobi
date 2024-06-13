import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDepartment } from "../actions/DepartmentAction";
import { useForm } from "react-hook-form";
import { PostDepartment } from "../actions/DepartmentAction";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const DepartmentAdd = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isPost, setIsPost] = useState(false);
  const dispatch = useDispatch();
  const postDepartment = (data) => {
    const dataJson = {
      nama_department: data.nama_department,
    };
    dispatch(PostDepartment(dataJson));
    setIsPost(true);
  };
  useEffect(() => {
    if (isPost) {
      let timerInterval;
      Swal.fire({
        title: "Sukses tambah Department",
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
              Tambah Department
            </a>
          </h1>
        </div>
        <div className="p-2"></div>
      </div>
      <form key={1} onSubmit={handleSubmit(postDepartment)}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nama Department
          </label>
          <input
            type="text"
            class="form-control"
            {...register("nama_department", { required: true })}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary btn-lg w-100">
          Submit
        </button>
      </form>
    </div>
  );
};
