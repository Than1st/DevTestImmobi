import model from "../models/init-models.js";
import table_jabatan from "../models/table_jabatan.js";

export const getKaryawan = async (req, res) => {
  try {
    const data = await model.table_karyawan.findAll({
      include: [
        {
          model: table_jabatan,
          as: "id_jabatan_table_jabatan",
        },
      ],
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const createKaryawan = async (req, res) => {
  try {
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;
    const cekJabatan = await model.table_jabatan.findOne({
      where: { id: id_jabatan },
    });
    if (cekJabatan == null) {
      res.status(404).json({ message: "Jabatan tidak di temukan" });
    } else {
      const create = await model.table_karyawan.create(
        {
          name: name,
          id_jabatan: id_jabatan,
          age: age,
          gender: gender,
          tanggal_lahir: tanggal_lahir,
          alamat: alamat,
        },
        {
          returning: true,
        }
      );
      res
        .status(201)
        .json({ data: create, message: "Berhasil Input Karyawan" });
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const updateKaryawan = async (req, res) => {
  try {
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;
    const cekJabatan = await model.table_jabatan.findOne({
      where: { id: id_jabatan },
    });
    if (cekJabatan == null) {
      res.status(404).json({ message: "Department tidak di temukan" });
    } else {
      const update = await model.table_karyawan.update(
        {
          name: name,
          id_jabatan: id_jabatan,
          age: age,
          gender: gender,
          tanggal_lahir: tanggal_lahir,
          alamat: alamat,
        },
        {
          where: { id: req.params.id },
          returning: true,
        }
      );
      update[0] == 1
        ? res
            .status(200)
            .json({ data: update, message: "Sukses update Karyawan" })
        : res
            .status(404)
            .json({ data: update, message: "Karyawan tidak ditemukan" });
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const deleteKaryawan = async (req, res) => {
  try {
    const del = await model.table_karyawan.destroy({
      where: { id: req.params.id },
    });
    del == 1
      ? res.status(200).json({ data: del, message: "Sukses Hapus Karyawan" })
      : res.status(404).json({ message: `Karyawan tidak ditemukan` });
  } catch (e) {
    res.status(500).json(e.message);
  }
};
