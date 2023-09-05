import { DataTypes } from "sequelize";
import { sequelize } from "../common/utils/sequelizeConfig";
import { DB_NAMES } from "../common/constants/customer.constants";

const { CUSTOMER } = DB_NAMES;

export const customerModel = sequelize.define(
  CUSTOMER,
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);
