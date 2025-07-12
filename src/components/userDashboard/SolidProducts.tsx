import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import type { LastIncomeItem } from "@/types/adminDashboard";

interface NewEmployesProps {
  solidProductsData1: LastIncomeItem[];
  solidProductsData2: LastIncomeItem[];
  increaseSolidRate?: number[];
}

export default function NewEmployes(props: NewEmployesProps) {
  const { solidProductsData1, solidProductsData2, increaseSolidRate } = props;

  return (
    <Card className="bg-black border-gray-700 border-2 w-full max-w-full">
      <CardHeader className="">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <CardTitle className="text-white text-lg sm:text-xl font-normal">
            Solid Products
          </CardTitle>
          <span className="text-white text-xs sm:text-xl">Mar - Jan 2022</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 flex">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={solidProductsData1}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={30}
                  startAngle={90}
                  endAngle={330}
                  dataKey="value"
                >
                  {solidProductsData1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <span className="absolute top-6 right-0 text-white text-xs sm:text-xl w-12 sm:w-16">
              + {increaseSolidRate ? increaseSolidRate[0] : "0"}%
            </span>
          </div>
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 flex">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={solidProductsData2}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={30}
                  startAngle={90}
                  endAngle={300}
                  dataKey="value"
                >
                  {solidProductsData1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <span className="absolute top-6 right-0 text-white text-xs sm:text-xl w-12 sm:w-16">
              + {increaseSolidRate ? increaseSolidRate[1] : "0"}%
            </span>
          </div>
          <Button className="bg-white hover:bg-white text-black font-medium rounded py-2 sm:py-4 text-xs sm:text-base">
            JavaScript
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
