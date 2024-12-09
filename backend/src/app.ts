import express from "express";
import { api } from "./endpoints/api";

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(api)
  return app;
};
