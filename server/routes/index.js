import { Router } from "express";
import departmentRouter from "./Department.js";
import jabatanRouter from "./Jabatan.js";
import karyawanRouter from "./Karyawan.js";
const route = Router()
route.get('/', (req, res, next)=>{
    res.json({message:"Welcome!"})
})
route.use(departmentRouter)
route.use(jabatanRouter)
route.use(karyawanRouter)
export default route