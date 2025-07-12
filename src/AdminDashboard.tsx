import LastData from "@/components/adminDashboard/LastData";
import LastIncome from "@/components/adminDashboard/LastIncome";
import NormalsChart from "@/components/adminDashboard/NormalsChart";
import { Component } from "react";

const normalData = [
  { name: "", uv: 350, pv: 900 },
  { name: "", uv: 550, pv: 1100 },
  { name: "", uv: 1450, pv: 1100 },
  { name: "", uv: 750, pv: 1300 },
];
const increaseNormalRate = 20;

const lastIncomeData = [
  { name: "RCloud", value: 35, color: "#2280ff" },
  { name: "GNote", value: 35, color: "#3dd34c" },
  { name: "Office", value: 50, color: "#414caa" },
];

const increaseIncomeRate = 65;
const increaseIncomeValue = 456.8;

const lastData = [
  { name: "10k", value: 35, fill: "#6d62f7" },
  { name: "20k", value: 55, fill: "#3dd34c" },
  { name: "30k", value: 25, fill: "#6d62f7" },
  { name: "40k", value: 45, fill: "#3dd34c" },
  { name: "50k", value: 65, fill: "#6d62f7" },
  { name: "60k", value: 75, fill: "#3dd34c" },
  { name: "70k", value: 45, fill: "#6d62f7" },
  { name: "80k", value: 85, fill: "#3dd34c" },
];

class AdminDashboard extends Component {
  state = {
    data: undefined,
    isLoading: true,
    error: null,
  };
  fetchData = async () => {
    try {
      const response = await fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      const data = await response.json();
      this.setState({ data, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  componentDidMount(): void {
    this.fetchData();
  }

  render() {
    const { data, isLoading, error } = this.state;
    return (
      <div className="mx-auto bg-black p-6">
        <div className="space-y-6">
          <h1 className="text-white text-2xl font-bold text-center mb-8">
            Admin
          </h1>
          {/* {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {data && ( */}
            <>
              {/* Last Data Chart */}
              <LastData lastData={lastData} />

              {/* Last Income */}
              <LastIncome
                lastIncomeData={lastIncomeData}
                increaseIncomeRate={increaseIncomeRate}
                increaseIncomeValue={increaseIncomeValue}
              />

              {/* Normals Chart */}
              <NormalsChart
                normalData={normalData}
                increaseNormalRate={increaseNormalRate}
              />
            </>
          {/* )} */}
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
