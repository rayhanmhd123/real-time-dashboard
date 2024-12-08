"use client";

import { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";
import io from "socket.io-client";
import { format, toZonedTime } from "date-fns-tz";
import TimezoneSelector from "./time-selector";
import { RoomTemperature } from "../page";

interface TemperatureLineProps {
  initialData: RoomTemperature[];
}

const socket = io("http://localhost:3001");

export function TemperatureLine({ initialData }: TemperatureLineProps) {
  const [data, setData] = useState(initialData);
  const [timezone, setTimezone] = useState("Asia/Jakarta");

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

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={transformedData}
          margin={{ bottom: 15, left: 15, right: 30 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="created_at"
            fontSize={12}
            label={{
              value: "Time (5-second intervals)",
              position: "insideBottom",
              offset: -10,
            }}
          />
          <YAxis
            domain={[0, 50]}
            fontSize={12}
            tickFormatter={(value) => `${value}°C`}
            label={{
              value: "Temperature (°C)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Line
            dataKey="temperature"
            type="natural"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ fill: "#8884d8" }}
            activeDot={{ r: 6 }}
          >
            <LabelList position="top" offset={12} fontSize={12} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
