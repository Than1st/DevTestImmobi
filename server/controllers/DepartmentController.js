import model from "../models/init-models.js"

export const getDepartment = async (req, res) => {
    try{
        const data = await model.table_department.findAll()
        res.status(200).json(data)
    } catch(e) {
        res.status(500).json(e.message)
    }
}
export const createDepartment = async (req, res) => {
    try{
        const {nama_department} = req.body
        const create = await model.table_department.create({
            nama_department: nama_department,
        },{
            returning: true
        })
        res.status(201).json({data:create, message:"Berhasil Input Department"})
    } catch(e) {
        res.status(500).json(e.message)
    }
}
export const updateDepartment = async (req, res) => {
    try{
        const {nama_department} = req.body
        const update = await model.table_department.update({
            nama_department: nama_department,
        },{
            where:{id: req.params.id},
            returning: true
        })
        update[0] == 1?
        res.status(200).json({data: update, message: "Sukses update Department"}) :
        res.status(404).json({data: update, message: "Department tidak ditemukan"})
    } catch(e) {
        res.status(500).json(e.message)
    }
}
export const deleteDepartment = async (req, res) => {
    try {
        const del = await model.table_department.destroy({where: {id: req.params.id}})
        del == 1?
            res.status(200).json({data: del, message: "Sukses Hapus Department"}):
            res.status(404).json({message: `Department tidak ditemukan`})
    } catch(e) {
        res.status(500).json(e.message)
    }
}