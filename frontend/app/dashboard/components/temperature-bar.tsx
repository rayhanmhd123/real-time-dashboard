"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import io from "socket.io-client";
import { format, toZonedTime } from "date-fns-tz";
import TimezoneSelector from "./time-selector";
import { RoomTemperature } from "../page";

interface TemperatureBarProps {
  initialData: RoomTemperature[];
}

const socket = io("http://localhost:3001");

export function TemperatureBar({ initialData }: TemperatureBarProps) {
  const [data, setData] = useState<RoomTemperature[]>(initialData);
  const [timezone, setTimezone] = useState<string>("Asia/Jakarta");

  useEffect(() => {
    socket.on("new-data", (newData: RoomTemperature) => {
      setData((prevData) => {
        const updatedData = [newData, ...prevData];
        return updatedData.slice(0, 20);
      });
    });

    return () => {
      socket.off("new-data");
    };
  }, []);

  const transformedData = data.map((entry) => {
    const zonedTime = toZonedTime(entry.created_at, timezone);
    return {
      ...entry,
      created_at: format(zonedTime, "HH:mm:ss"),
    };
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Timezone Selector */}
      <TimezoneSelector
        selectedTimezone={timezone}
        onTimezoneChange={setTimezone}
      />

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={transformedData} margin={{ bottom: 15, left: 15 }}>
          <XAxis
            dataKey="created_at"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{
              value: "Time (5-second intervals)",
              position: "insideBottom",
              offset: -10,
            }}
          />
          <YAxis
            domain={[0, 50]}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}°C`}
            label={{
              value: "Temperature (°C)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Bar
            dataKey="temperature"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
