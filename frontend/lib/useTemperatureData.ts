import { RoomTemperature } from "@/app/dashboard/page";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export function useTemperatureData(
  initialData: RoomTemperature[],
) {
  const [data, setData] = useState<RoomTemperature[]>(initialData);

  useEffect(() => {
    socket.on("new-data", (newData: RoomTemperature) => {
      setData((prevData) => {
        const updatedData = [newData, ...prevData];
        return updatedData.slice(0, 20); // assumption the data displayed is only 20
      });
    });

    return () => {
      socket.off("new-data");
    };
  }, []);

  return data;
}
