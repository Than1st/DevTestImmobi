import _sequelize, {Sequelize} from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _table_department from  "./table_department.js";
import _table_jabatan from  "./table_jabatan.js";
import _table_karyawan from  "./table_karyawan.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

function initModels(sequelize) {
  const table_department = _table_department.init(sequelize, DataTypes);
  const table_jabatan = _table_jabatan.init(sequelize, DataTypes);
  const table_karyawan = _table_karyawan.init(sequelize, DataTypes);

  table_jabatan.belongsTo(table_department, { as: "id_department_table_department", foreignKey: "id_department"});
  table_department.hasMany(table_jabatan, { as: "table_jabatans", foreignKey: "id_department"});
  table_karyawan.belongsTo(table_jabatan, { as: "id_jabatan_table_jabatan", foreignKey: "id_jabatan"});
  table_jabatan.hasMany(table_karyawan, { as: "table_karyawans", foreignKey: "id_jabatan"});

  return {
    table_department,
    table_jabatan,
    table_karyawan,
  };
}

const model = initModels(sequelize)
export default model
export{sequelize}