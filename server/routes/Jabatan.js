import { Router } from "express";
import {
  getJabatan,
  createJabatan,
  updateJabatan,
  deleteJabatan,
} from "../controllers/JabatanController.js";
const jabatanRouter = Router();
jabatanRouter.post("/jabatan", getJabatan);
jabatanRouter.post("/jabatan/create", createJabatan);
jabatanRouter.put("/jabatan/update/:id", updateJabatan);
jabatanRouter.delete("/jabatan/delete/:id", deleteJabatan);
export default jabatanRouter;
