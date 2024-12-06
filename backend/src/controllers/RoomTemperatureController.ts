import { RoomTemperature } from "../entities/RoomTemperature";
import { RoomTemperatureRepository } from "../repositories/RoomTemperatureRepository";

export class RoomTemperatureController {
  private roomTemperatureRepository: RoomTemperatureRepository;

  constructor() {
    this.roomTemperatureRepository = new RoomTemperatureRepository();
  }

  async getLatestRoomTemperatures(
    limit: number = 50
  ): Promise<RoomTemperature[]> {
    try {
      return await this.roomTemperatureRepository.getLatestRoomTemperatures(
        limit
      );
    } catch (error) {
      console.error("Error fetching latest data:", error);
      throw new Error("Failed to retrieve data points");
    }
  }
}
