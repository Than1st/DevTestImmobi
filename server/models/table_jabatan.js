import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class table_jabatan extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_department: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'table_department',
        key: 'id'
      }
    },
    nama_jabatan: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'table_jabatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "table_jabatan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
