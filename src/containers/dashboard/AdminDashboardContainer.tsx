import { useState, useEffect } from "react";
import LastData from "@/components/adminDashboard/LastData";
import LastIncome from "@/components/adminDashboard/LastIncome";
import NormalsChart from "@/components/adminDashboard/NormalsChart";
import { Loading, Error } from "@/components/ui/loading-error";
import { getLastData, getLastIncome, getNormalsChart } from "@/services";
import type {
  LastDataItem,
  LastIncomeItem,
  NormalsChartItem,
} from "@/types/adminDashboard";

export default function AdminDashboardContainer() {
  const [lastData, setLastData] = useState<LastDataItem[]>([]);
  const [lastIncomeData, setLastIncomeData] = useState<LastIncomeItem[]>([]);
  const [increaseIncomeRate, setIncreaseIncomeRate] = useState<number>(0);
  const [increaseIncomeValue, setIncreaseIncomeValue] = useState<number>(0);
  const [normalData, setNormalData] = useState<NormalsChartItem[]>([]);
  const [increaseNormalRate, setIncreaseNormalRate] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all admin dashboard data
        const [lastDataRes, lastIncomeRes, normalDataRes] = await Promise.all([
          getLastData(),
          getLastIncome(),
          getNormalsChart(),
        ]);

        if (lastDataRes) setLastData(lastDataRes);
        if (lastIncomeRes) {
          setLastIncomeData(lastIncomeRes.lastIncomeData);
          setIncreaseIncomeRate(lastIncomeRes.increaseIncomeRate);
          setIncreaseIncomeValue(lastIncomeRes.increaseIncomeValue);
        }
        if (normalDataRes) {
          setNormalData(normalDataRes.normalData);
          setIncreaseNormalRate(normalDataRes.increaseNormalRate);
        }
      } catch (err: unknown) {
        setError((err as Error)?.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading message="Loading admin dashboard..." />;
  }

  if (error) {
    return <Error message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="flex-1 p-6">
      <div className="h-full flex justify-center">
        <div className="flex flex-col lg:w-[720px] lg:max-w-[720px] gap-6 h-full w-full">
          <div className="flex-1">
            <LastData lastData={lastData} />
          </div>
          <div className="flex-1">
            <LastIncome
              lastIncomeData={lastIncomeData}
              increaseIncomeRate={increaseIncomeRate}
              increaseIncomeValue={increaseIncomeValue}
            />
          </div>
          <div className="flex-1">
            <NormalsChart
              normalData={normalData}
              increaseNormalRate={increaseNormalRate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
