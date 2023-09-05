import { Route, Routes } from "../common/types/controller.types";
import { customerRouter } from "./customer.controller";
import { ROUTER_ROUTES } from "../common/constants/routes.constants";

const { PUBLIC_BASE_CUSTOMER_ROUTE } = ROUTER_ROUTES;

export const routes: Routes = [
  new Route(PUBLIC_BASE_CUSTOMER_ROUTE, customerRouter),
];
