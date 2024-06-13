import { Router } from "express";
import {
  getKaryawan,
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
} from "../controllers/KaryawanController.js";
const karyawanRouter = Router();
karyawanRouter.get("/karyawan", getKaryawan);
karyawanRouter.post("/karyawan/create", createKaryawan);
karyawanRouter.put("/karyawan/update/:id", updateKaryawan);
karyawanRouter.delete("/karyawan/delete/:id", deleteKaryawan);
export default karyawanRouter;
