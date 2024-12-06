import express from "express";
import { RoomTemperatureController } from "./controllers/RoomTemperatureController";

export const createApp = () => {
  const app = express();
  const roomTemperatureController = new RoomTemperatureController();

  app.use(express.json());

  app.get("/api/data", async (req, res) => {
    try {
      const roomTemperatures = await roomTemperatureController.getLatestRoomTemperatures();
      res.json(roomTemperatures);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      res.status(500).json({ error: errorMessage });
    }
  });

  return app;
};
