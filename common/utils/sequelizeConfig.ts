import { config } from "dotenv";
config();
import { Sequelize } from "sequelize";

const { USER, PASSWORD, HOST, DBPORT, DATABASE, DIALECT } = process.env;
export const sequelize = new Sequelize(
  DATABASE as string,
  USER as string,
  PASSWORD,
  {
    host: HOST,
    port: Number(DBPORT),
    dialect: (DIALECT as any) || "postgres",
  }
);
