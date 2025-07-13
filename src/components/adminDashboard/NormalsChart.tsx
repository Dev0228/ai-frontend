import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NormalsChartItem } from "@/types/adminDashboard";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface NormalsChartProps {
  normalData: NormalsChartItem[];
  increaseNormalRate?: number;
}

export default function NormalsChart(props: NormalsChartProps) {
  const { normalData, increaseNormalRate } = props;
  return (
    <Card className="bg-black border-gray-700 border-2 gap-0 w-full h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-gray-400 text-lg sm:text-xl font-normal">
            Normals Chart
          </CardTitle>
          <span className="text-gray-400 text-lg sm:text-xl">
            + {increaseNormalRate ?? "0"}%
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex">
        <div className="w-full h-40 sm:h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={normalData}
              barGap={0}
              barCategoryGap={20}
              barSize={16}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
                domain={[50, "auto"]}
                ticks={[50, 500, 950, 1400]}
              />
              <Bar dataKey="uv" fill="#6d62f7" radius={[2, 2, 0, 0]} />
              <Bar dataKey="pv" fill="#544bbe" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
