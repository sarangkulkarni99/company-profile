import { Router } from "express";
import { ResponseHandler } from "../common/utils/responseHandler";
import customerService from "../services/appService/customer.service";
import { validateCreateCustomer } from "../common/validations/customer.validate";
import { ROUTER_ROUTES } from "../common/constants/routes.constants";

export const customerRouter = Router();

const {
  PRIVATE_CUSTOMER_CREATE,
  PRIVATE_CUSTOMER_GET_ALL,
  PRIVATE_CUSTOMER_GET_ONE,
  PRIVATE_CUSTOMER_GET_UNIQUE_CITY,
} = ROUTER_ROUTES;

customerRouter.post(
  PRIVATE_CUSTOMER_CREATE,
  validateCreateCustomer,
  async (req, res, next) => {
    try {
      const response = await customerService.createCustomer(req.body);
      res.send(new ResponseHandler(response));
    } catch (error) {
      next(error);
    }
  }
);

customerRouter.post(PRIVATE_CUSTOMER_GET_ALL, async (req, res, next) => {
  try {
    const response = await customerService.getAllCustomers(req.body);
    res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});

customerRouter.get(PRIVATE_CUSTOMER_GET_UNIQUE_CITY, async (req, res, next) => {
  try {
    const response = await customerService.getUniqueCustomerList();
    res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});

customerRouter.get(PRIVATE_CUSTOMER_GET_ONE, async (req, res, next) => {
  try {
    const response = await customerService.getOneCustomer(
      Number(req.params.id)
    );
    res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});
