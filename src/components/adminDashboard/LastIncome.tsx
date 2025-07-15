import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import type { LastIncomeItem } from "@/types/adminDashboard";

export interface LastIncomeProps {
  lastIncomeData: LastIncomeItem[];
  increaseIncomeRate?: number;
  increaseIncomeValue?: number;
}

export default function LastIncome(props: LastIncomeProps) {
  const { lastIncomeData, increaseIncomeRate, increaseIncomeValue } = props;

  return (
    <Card className="bg-black border-gray-700 border-2 w-full h-full flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-gray-400 text-lg sm:text-xl font-normal">
            Last Income
          </CardTitle>
          <span className="text-gray-400 text-lg sm:text-xl">
            + {increaseIncomeRate}%
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row justify-between pb-4 sm:pb-8 gap-4 sm:gap-0">
          <div>
            <div
              className="bg-green-400 hover:bg-green-600 text-black font-medium px-4 py-2 rounded text-xs sm:text-base"
              style={{ backgroundColor: "#323232" }}
            >
              Apr - Jan
            </div>
          </div>
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={lastIncomeData}
                  // cx="50%"
                  // cy="50%"
                  innerRadius={45}
                  outerRadius={60}
                  startAngle={0}
                  endAngle={280}
                  dataKey="value"
                >
                  {lastIncomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="relative flex flex-col justify-between text-right">
            <div className="text-white text-xs sm:text-sm">month to month</div>
            <div className="text-white text-xs sm:text-sm">
              Increase : ${increaseIncomeValue ?? "0"}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <Button className="bg-green-400 hover:bg-green-600 text-black font-medium px-4 py-2 rounded text-xs sm:text-base">
            GNote
          </Button>
          <Button
            className="bg-gray-700 hover:bg-gray-600 text-black font-medium px-4 py-2 rounded text-xs sm:text-base"
            style={{ backgroundColor: "#414caa" }}
          >
            Office
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-black font-medium px-4 py-2 rounded text-xs sm:text-base">
            RCloud
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
