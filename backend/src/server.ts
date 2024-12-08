import http from "http";
import { createApp } from "./app";
import { initializeDatabase } from "./config/databaseConfig";
import { SocketService } from "./services/SocketService";
import { RoomTemperatureGenerationService } from "./services/RoomTemperatureGenerationService";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  await initializeDatabase();

  const app = createApp();
  const httpServer = http.createServer(app);

  const socketService = new SocketService(httpServer);
  const roomTemperatureGenerationService = new RoomTemperatureGenerationService(socketService);

  roomTemperatureGenerationService.startMockDataGeneration();

  const PORT = process.env.PORT || 3001;
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
