import { DataSource } from "typeorm";
import { RoomTemperature } from "../entities/RoomTemperature";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DB_URL || "localhost",
  synchronize: true,
  logging: false,
  entities: [RoomTemperature],
  migrations: [],
  subscribers: [],
});

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
