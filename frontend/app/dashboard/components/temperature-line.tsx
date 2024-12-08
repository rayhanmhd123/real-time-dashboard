"use client";

import { useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";
import TimezoneSelector from "./time-selector";
import { RoomTemperature } from "../page";
import { useTemperatureData } from "@/lib/useTemperatureData";
import { formatTemperatureData } from "@/lib/utils";

interface TemperatureLineProps {
  initialData: RoomTemperature[];
}

export function TemperatureLine({ initialData }: TemperatureLineProps) {
  const [timezone, setTimezone] = useState("Asia/Jakarta");
  const rawData = useTemperatureData(initialData);
  const transformedData = formatTemperatureData(rawData, timezone);

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
