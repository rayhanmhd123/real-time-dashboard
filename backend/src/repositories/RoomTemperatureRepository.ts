import { Repository } from "typeorm";
import { AppDataSource } from "../config/databaseConfig";
import { RoomTemperature } from "../entities/RoomTemperature";

export class RoomTemperatureRepository {
  private repository: Repository<RoomTemperature>;

  constructor() {
    this.repository = AppDataSource.getRepository(RoomTemperature);
  }

  async saveRoomTemperature(temperature: number): Promise<RoomTemperature> {
    const roomTemperature = new RoomTemperature();
    roomTemperature.temperature = temperature;
    return this.repository.save(roomTemperature);
  }

  async getLatestRoomTemperatures(limit: number = 50): Promise<RoomTemperature[]> {
    return this.repository.find({
      order: { created_at: "DESC" },
      take: limit,
    });
  }
}
