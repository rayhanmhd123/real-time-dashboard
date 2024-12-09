import { RoomTemperature } from "@/app/dashboard/page";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://103.129.148.170:3010");

export function useTemperatureData(
  initialData: RoomTemperature[]
): RoomTemperature[] {
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
