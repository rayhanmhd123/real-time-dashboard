import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { RoomTemperature } from "../entities/RoomTemperature";

export class SocketService {
  private io: Server;

  constructor(httpServer: HttpServer) {
    this.io = new Server(httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    this.setupSocketConnection();
  }

  private setupSocketConnection() {
    this.io.on("connection", (socket) => {
      console.log("New client connected");

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }

  emitNewData(roomTemperature: RoomTemperature) {
    this.io.emit("new-data", {
      created_at: roomTemperature.created_at.toISOString(),
      temperature: roomTemperature.temperature,
    });
  }
}
