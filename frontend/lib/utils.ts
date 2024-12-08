import { RoomTemperature } from "@/app/dashboard/page";
import { clsx, type ClassValue } from "clsx"
import { format, toZonedTime } from "date-fns-tz";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTemperatureData(
  data: RoomTemperature[],
  timezone: string
) {
  return data.map((entry) => {
    const zonedTime = toZonedTime(entry.created_at, timezone);
    return {
      ...entry,
      created_at: format(zonedTime, "HH:mm:ss"),
    };
  });
}