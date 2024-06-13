import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDepartment, PutDepartment } from "../actions/DepartmentAction";
import { useForm } from "react-hook-form";
import { PostDepartment } from "../actions/DepartmentAction";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export const DepartmentEdit = () => {
  const params = useParams();
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
  const putDepartment = (data) => {
    const dataJson = {
      nama_department: data.nama_department,
    };
    dispatch(PutDepartment(dataJson, params.id));
    setIsPost(true);
  };
  useEffect(() => {
    if (isPost) {
      let timerInterval;
      Swal.fire({
        title: "Sukses Edit Department",
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
    var defaultValue = {};
    defaultValue.nama_department = sessionStorage.getItem("nama_department");
    reset({ ...defaultValue });
  }, [isPost]);

  return (
    <div className="container">
      <div className="d-flex">
        <div className="py-2 flex-grow-1">
          <h1>
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Edit Department
            </a>
          </h1>
        </div>
        <div className="p-2"></div>
      </div>
      <form key={1} onSubmit={handleSubmit(putDepartment)}>
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
