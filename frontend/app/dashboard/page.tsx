import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { TemperatureBar } from "./components/temperature-bar";
import { TemperatureLine } from "./components/temperature-line";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Dashboard Temperature
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
              </CardHeader>
              <CardContent className="pl-1">
                <TemperatureBar />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Line Chart</CardTitle>
              </CardHeader>
              <CardContent className="pl-1">
                <TemperatureLine />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
