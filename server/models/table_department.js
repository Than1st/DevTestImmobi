import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class table_department extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_department: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'table_department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "table_department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
