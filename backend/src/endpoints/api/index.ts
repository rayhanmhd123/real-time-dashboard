import { Router } from "express";
import { router_api_data } from "./data";

const api = Router();

api.use(
  "/api",
  Router()
    .use(router_api_data)
);

export { api };
