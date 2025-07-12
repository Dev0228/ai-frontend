import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewEmployesItem } from "@/types/userDashboard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Dot,
  ComposedChart,
} from "recharts";

interface SolidProductsProps {
  normalData: NewEmployesItem[];
}

export default function SolidProducts(props: SolidProductsProps) {
  const { normalData } = props;

  return (
    <Card className="bg-black border-gray-700 border-2 gap-0">
      <CardHeader className="">
        <div className="flex justify-between items-center mb-8">
          <CardTitle className="text-gray-400 text-xl font-normal">
            New Employes
          </CardTitle>
          <div className="flex justify-right items-center gap-2">
            <ResponsiveContainer height={32} width={32}>
              <ComposedChart>
                <Dot cx={16} cy={16} fill="#3dd34c" r={8} stroke="#000" />
              </ComposedChart>
            </ResponsiveContainer>
            <span className="text-white">Coders</span>
            <ResponsiveContainer height={32} width={32}>
              <ComposedChart>
                <Dot cx={16} cy={16} fill="#2280ff" r={8} stroke="#000" />
              </ComposedChart>
            </ResponsiveContainer>
            <span className="text-white">Designers</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={600} height={400}>
          <BarChart layout="vertical" data={normalData} barCategoryGap={10}>
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <YAxis
              type="category"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Bar dataKey="value" radius={[0, 2, 2, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-between items-center px-8">
          <span className="text-white">2021</span>
          <span className="text-white">2022</span>
        </div>
      </CardContent>
    </Card>
  );
}
