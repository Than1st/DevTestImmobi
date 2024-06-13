import { Router } from "express";
import { getDepartment, createDepartment, updateDepartment, deleteDepartment } from "../controllers/DepartmentController.js";
const departmentRouter = Router()
departmentRouter.get('/department', getDepartment)
departmentRouter.post('/department/create', createDepartment)
departmentRouter.put('/department/update/:id', updateDepartment)
departmentRouter.delete('/department/delete/:id', deleteDepartment)
export default departmentRouter