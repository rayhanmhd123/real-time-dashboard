import express from "express";
import { RoomTemperatureController } from "./controllers/RoomTemperatureController";

export const createApp = () => {
  const app = express();
  const roomTemperatureController = new RoomTemperatureController();

  app.use(express.json());

  // Endpoint to get the latest room temperature data
  // Assumption: Only the latest 20 data entries are displayed
  app.get("/api/data", async (req, res) => {
    try {
      const roomTemperatures = await roomTemperatureController.getLatestRoomTemperatures(20);
      res.json(roomTemperatures);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      res.status(500).json({ error: errorMessage });
    }
  });

  return app;
};
