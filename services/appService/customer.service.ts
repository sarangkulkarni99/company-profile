import { Op } from "sequelize";
import { sequelize } from "../../common/utils/sequelizeConfig";
import customerRepo from "../DBService/customer.repo";
import { customerResponse } from "../../common/constants/customer.response";
import { CUSTOMER_CONSTANTS } from "../../common/constants/customer.constants";
import { ICustomer, IFilter, IWhereClause, Order } from "../../common/types/customer.types";

const { NOT_FOUND, CREATED } = customerResponse;

const { city, company } = CUSTOMER_CONSTANTS;

const createCustomer = async (data: ICustomer) => {
  try {
    const result = await customerRepo.create({
      ...data,
      city,
      company,
    });
    return CREATED;
  } catch (error) {
    throw error;
  }
};

const getOneCustomer = async (id: number) => {
  try {
    const result = await customerRepo.getOne(id);
    return result;
  } catch (error) {
    throw NOT_FOUND;
  }
};

const getAllCustomers = async (query: IFilter) => {
  try {
    let where: IWhereClause = {};
    let order: Order[] = [];
    const {
      sortBy = ["ASC", "firstName"],
      search,
      limit = 10,
      page = 1,
    } = query;
    let offset = (page - 1) * limit;
    if (search) {
      const specialCharacters = /[-/\\^$*+?.()|[\]{}%#]/g;
      const sanitizedSearchTerm = search.replace(specialCharacters, "\\$&");
      where = {
        ...where,
        [Op.or]: [
          { firstName: { [Op.iLike]: `${sanitizedSearchTerm}%` } },
          { lastName: { [Op.iLike]: `${sanitizedSearchTerm}%` } },
          { city: { [Op.iLike]: `${sanitizedSearchTerm}%` } },
        ],
      };
    }
    if (sortBy.length) {
      const [sortOrder, sortField] = sortBy;
      order = [[sortField, sortOrder.toUpperCase()]];
    }
    const response = await customerRepo.getAll(where, order, limit, offset);
    const totalPages = Math.ceil(response.count / limit);
    const currentPage = query.page || 1;
    const hasNextPage = currentPage < totalPages;
    const hasPreviousPage = currentPage > 1;
    const totalCandidates = response.count;

    return {
      customers: response.rows,
      currentPage,
      totalPages,
      hasNextPage,
      hasPreviousPage,
      totalCandidates,
    };
  } catch (error) {
    throw NOT_FOUND;
  }
};

const getUniqueCustomerList = async () => {
  try {
    const attributes = [
      "city",
      [sequelize.fn("COUNT", sequelize.col("city")), "count"],
    ];
    const group = ["city"];
    const result = await customerRepo.getAllUniqueCustomerList(
      attributes,
      group
    );
    return result;
  } catch (error) {
    throw NOT_FOUND;
  }
};

export default {
  createCustomer,
  getOneCustomer,
  getAllCustomers,
  getUniqueCustomerList,
};
