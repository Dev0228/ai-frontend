import { useState, useEffect } from "react";
import CodersTypes from "@/components/userDashboard/CodersTypes";
import NewEmployes from "@/components/userDashboard/NewEmployes";
import SolidProducts from "@/components/userDashboard/SolidProducts";
import { Loading, Error } from "@/components/ui/loading-error";
import { getCodersTypes, getNewEmployes, getSolidProducts } from "@/services";
import type { CodersTypeItem, NewEmployesItem } from "@/types/userDashboard";

export default function UserDashboardContainer() {
  const [codersTypeData, setCodersTypeData] = useState<CodersTypeItem[]>([]);
  const [normalData, setNormalData] = useState<NewEmployesItem[]>([]);
  const [solidProductsData1, setSolidProductsData1] = useState<any[]>([]);
  const [solidProductsData2, setSolidProductsData2] = useState<any[]>([]);
  const [increaseSolidRate, setIncreaseSolidRate] = useState<number[]>([0, 0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [codersRes, employesRes, productsRes] = await Promise.all([
          getCodersTypes(),
          getNewEmployes(),
          getSolidProducts(),
        ]);

        if (codersRes) setCodersTypeData(codersRes);
        if (employesRes) setNormalData(employesRes);
        if (productsRes) {
          setSolidProductsData1(productsRes.solidProductsData1);
          setSolidProductsData2(productsRes.solidProductsData2);
          setIncreaseSolidRate(productsRes.increaseSolidRate);
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
    return <Loading message="Loading user dashboard..." />;
  }

  if (error) {
    return <Error message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="flex-1 p-6">
      <div className="h-full flex justify-center">
        <div className="flex flex-col lg:w-[720px] lg:max-w-[720px] gap-6 h-full w-full">
          <div className="flex-1">
            <CodersTypes codersTypeData={codersTypeData} />
          </div>
          <div className="flex-1">
            <NewEmployes normalData={normalData} />
          </div>
          <div className="flex-1">
            <SolidProducts
              solidProductsData1={solidProductsData1}
              solidProductsData2={solidProductsData2}
              increaseSolidRate={increaseSolidRate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
