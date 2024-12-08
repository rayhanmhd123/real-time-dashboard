import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { TemperatureBar } from "./components/temperature-bar";
import { TemperatureLine } from "./components/temperature-line";
import axios from "axios";

export interface RoomTemperature {
  created_at: string;
  temperature: number;
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function DashboardPage() {
  const response = await axios.get("http://localhost:3001/api/data");
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Dashboard Temperature
            </h2>
          </div>
          <div className="grid gap-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
              </CardHeader>
              <CardContent className="pl-1">
                <TemperatureBar initialData={response.data} />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Line Chart</CardTitle>
              </CardHeader>
              <CardContent className="pl-1">
                <TemperatureLine initialData={response.data} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
