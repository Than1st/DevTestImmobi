import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class table_karyawan extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_jabatan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'table_jabatan',
        key: 'id'
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'table_karyawan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "table_karyawan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
