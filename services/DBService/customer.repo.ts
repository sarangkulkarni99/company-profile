import { customerModel } from "../../models/customer.schema";

const create = (data: any) => customerModel.create({ ...data });

const getAll = async (
  where: any,
  order: any[],
  limit: number,
  offset: number
) => {
  try {
    const results = await customerModel.findAndCountAll({
      where,
      order,
      attributes: ["id", "firstName", "lastName", "city", "company"],
      limit,
      offset,
      raw: true,
    });
    return results;
  } catch (error) {
    throw error;
  }
};

const getOne = (id: number) =>
  customerModel.findOne({
    where: { id },
    attributes: ["id", "firstName", "lastName", "city", "company"],
    raw: true,
  });

const getAllUniqueCustomerList = (attributes: any, group: any) =>
  customerModel.findAll({
    attributes,
    group,
    raw: true,
  });

export default {
  create,
  getAll,
  getOne,
  getAllUniqueCustomerList,
};
