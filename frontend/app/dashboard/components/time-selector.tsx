"use client";

import React from "react";

const timeZones = [
  { label: "Indonesia/Jakarta", value: "Asia/Jakarta" },
  { label: "Singapore", value: "Asia/Singapore" },
  { label: "Australia/Sydney", value: "Australia/Sydney" },
];

interface TimezoneSelectorProps {
  selectedTimezone: string;
  onTimezoneChange: (value: string) => void;
}

const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
  selectedTimezone,
  onTimezoneChange,
}) => {
  return (
    <div className="flex justify-end items-center gap-2">
      <label htmlFor="timezone" className="text-sm font-medium">
        Timezone:
      </label>
      <select
        id="timezone"
        className="border rounded p-1 text-sm"
        value={selectedTimezone}
        onChange={(e) => onTimezoneChange(e.target.value)}
      >
        {timeZones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector;
