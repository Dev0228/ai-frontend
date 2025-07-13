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
    <Card className="bg-black border-gray-700 border-2 gap-0 w-full h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 gap-2 sm:gap-0">
          <CardTitle className="text-gray-400 text-lg sm:text-xl font-normal">
            New Employes
          </CardTitle>
          <div className="flex justify-right items-center gap-2">
            <ResponsiveContainer height={24} width={24}>
              <ComposedChart>
                <Dot cx={12} cy={12} fill="#3dd34c" r={8} stroke="#000" />
              </ComposedChart>
            </ResponsiveContainer>
            <span className="text-white text-xs sm:text-base">Coders</span>
            <ResponsiveContainer height={24} width={24}>
              <ComposedChart>
                <Dot cx={12} cy={12} fill="#2280ff" r={8} stroke="#000" />
              </ComposedChart>
            </ResponsiveContainer>
            <span className="text-white text-xs sm:text-base">Designers</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="w-full h-52 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
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
        </div>
        <div className="flex justify-between items-center px-4 sm:px-8">
          <span className="text-white text-xs sm:text-base">2021</span>
          <span className="text-white text-xs sm:text-base">2022</span>
        </div>
      </CardContent>
    </Card>
  );
}
