import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";
import { Button } from "@/components/ui/button";
import type { CodersTypeItem } from "@/types/userDashboard";

interface CodersTypesProps {
  codersTypeData: CodersTypeItem[];
}

export default function CodersTypes(props: CodersTypesProps) {
  const { codersTypeData } = props;

  return (
    <Card className="bg-black border-gray-700 border-2 w-full max-w-full">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <CardTitle className="text-gray-400 text-lg sm:text-xl font-normal">
            Coders types
          </CardTitle>
          <div>
            <Button className="bg-blue-400 hover:bg-blue-500 text-black font-medium rounded mr-2 sm:mr-4 text-xs sm:text-base">
              React
            </Button>
            <Button className="bg-green-400 hover:bg-green-500 text-black font-medium rounded text-xs sm:text-base">
              Jscript
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-40 sm:h-52 md:h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={codersTypeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <YAxis hide />
              <Line
                dataKey="pv"
                strokeWidth={4}
                stroke="#2280ff"
                dot={{ r: 8, fill: "#000000" }}
              />
              <Line
                dataKey="uv"
                strokeWidth={4}
                stroke="#82ca9d"
                dot={{ r: 8, fill: "#000000" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
