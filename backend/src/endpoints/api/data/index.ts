import { Router } from "express";
import { RoomTemperatureController } from "../../../controllers/RoomTemperatureController";

const router_api_data = Router();
const router = router_api_data;

const roomTemperatureController = new RoomTemperatureController();

// Endpoint to get the latest room temperature data
// Assumption: Only the latest 20 data entries are displayed
router.get("/data", async (req, res) => {
  try {
    const roomTemperatures =
      await roomTemperatureController.getLatestRoomTemperatures(20);
    res.json(roomTemperatures);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: errorMessage });
  }
});

export { router_api_data };
