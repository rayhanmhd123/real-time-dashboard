import * as schedule from "node-schedule";
import { RoomTemperatureRepository } from "../repositories/RoomTemperatureRepository";
import { SocketService } from "./SocketService";

export class RoomTemperatureGenerationService {
  private roomTemperatureRepository: RoomTemperatureRepository;
  private socketService: SocketService;

  constructor(socketService: SocketService) {
    this.roomTemperatureRepository = new RoomTemperatureRepository();
    this.socketService = socketService;
  }

  startMockDataGeneration() {
    schedule.scheduleJob("*/5 * * * * *", async () => {
      // Assuming the maximum temperature in this place is 40 degrees Celsius
      const randomTemperature = Math.floor(Math.random() * 40);
      const newRoomTemperature =
        await this.roomTemperatureRepository.saveRoomTemperature(
          randomTemperature
        );

      // Broadcast to all connected clients
      this.socketService.emitNewData(newRoomTemperature);
    });
  }
}
