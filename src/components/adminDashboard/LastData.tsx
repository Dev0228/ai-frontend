import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LastDataItem } from "@/types/adminDashboard";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface LastDataProps {
  lastData: LastDataItem[];
}

export default function LastData(props: LastDataProps) {
  const { lastData } = props;
  return (
    <Card className="bg-black border-gray-700 border-2">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-gray-400 text-xl font-normal">
            Last Data
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={500} height={200}>
          <BarChart data={lastData} barCategoryGap={20} barGap={20}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />
            <YAxis hide />
            <Bar dataKey="value" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
