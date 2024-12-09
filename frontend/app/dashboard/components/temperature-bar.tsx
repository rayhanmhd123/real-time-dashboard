"use client";

import { useState } from "react";
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import TimezoneSelector from "./time-selector";
import { RoomTemperature } from "../page";
import { useTemperatureData } from "@/lib/useTemperatureData";
import { formatTemperatureData } from "@/lib/utils";

interface TemperatureBarProps {
  initialData: RoomTemperature[];
}

export function TemperatureBar({ initialData }: TemperatureBarProps) {
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
          >
            <LabelList position="top" offset={12} fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
