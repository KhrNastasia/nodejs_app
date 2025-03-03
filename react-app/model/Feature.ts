import { DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize("mssql::memory:");

const Feature = sequelize.define(
  "Feature",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "DO",
    // sequelize,
    modelName: "Feature",
  },
);

console.log(Feature === sequelize.models.Featureyt);

// export class Feature extends Model {

// const arr = ;

// }
//
// export const init = (sequelize) => {
// Feature.init(
// {
// id: {
// type: DataTypes.UUIDV4,
// primaryKey: true,
// defaultValue: DataTypes.UUIDV4,
// },
// text: {
// type: DataTypes.UUID,
// allowNull: false,
// },
// dateEnd: {
// type: DataTypes.UUID,
// allowNull: false,
// },
// },
// {
// tableName: "DO",
// sequelize,
// modelName: "Feature",
// },
// );
// };
//
// console.log(Feature === sequelize.models.Feature);
