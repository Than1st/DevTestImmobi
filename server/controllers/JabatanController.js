import model from "../models/init-models.js";
import table_department from "../models/table_department.js";

export const getJabatan = async (req, res) => {
  try {
    const { id_department } = req.body;
    const data =
      id_department != null
        ? await model.table_jabatan.findAll({
            where: { id_department: id_department },
            include: {
              model: table_department,
              as: "id_department_table_department",
            },
          })
        : await model.table_jabatan.findAll({
            include: {
              model: table_department,
              as: "id_department_table_department",
            },
          });

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const createJabatan = async (req, res) => {
  try {
    const { id_department, nama_jabatan } = req.body;
    const cekDepartment = await model.table_department.findOne({
      where: { id: id_department },
    });
    if (cekDepartment == null) {
      res.status(404).json({ message: "Department tidak di temukan" });
    } else {
      const create = await model.table_jabatan.create(
        {
          id_department: id_department,
          nama_jabatan: nama_jabatan,
        },
        {
          returning: true,
        }
      );
      res.status(201).json({ data: create, message: "Berhasil Input Jabatan" });
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const updateJabatan = async (req, res) => {
  try {
    const { id_department, nama_jabatan } = req.body;
    const cekDepartment = await model.table_department.findOne({
      where: { id: id_department },
    });
    if (cekDepartment == null) {
      res.status(404).json({ message: "Department tidak di temukan" });
    } else {
      const update = await model.table_jabatan.update(
        {
          id_department: id_department,
          nama_jabatan: nama_jabatan,
        },
        {
          where: { id: req.params.id },
          returning: true,
        }
      );
      update[0] == 1
        ? res
            .status(200)
            .json({ data: update, message: "Sukses update Jabatan" })
        : res
            .status(404)
            .json({ data: update, message: "Jabatan tidak ditemukan" });
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const deleteJabatan = async (req, res) => {
  try {
    const del = await model.table_jabatan.destroy({
      where: { id: req.params.id },
    });
    del == 1
      ? res.status(200).json({ data: del, message: "Sukses Hapus Jabatan" })
      : res.status(404).json({ message: `Jabatan tidak ditemukan` });
  } catch (e) {
    res.status(500).json(e.message);
  }
};
