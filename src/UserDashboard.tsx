import CodersTypes from "@/components/userDashboard/CodersTypes";
import SolidProducts from "@/components/userDashboard/SolidProducts";
import NewEmployes from "@/components/userDashboard/NewEmployes";
import { Component } from "react";

const normalData = [
  { name: "10k", value: 35, fill: "#2280ff" },
  { name: "20k", value: 55, fill: "#3dd34c" },
  { name: "30k", value: 25, fill: "#2280ff" },
  { name: "40k", value: 45, fill: "#3dd34c" },
  { name: "50k", value: 65, fill: "#2280ff" },
  { name: "60k", value: 75, fill: "#3dd34c" },
  { name: "70k", value: 45, fill: "#2280ff" },
  { name: "80k", value: 85, fill: "#3dd34c" },
  { name: "50k", value: 65, fill: "#2280ff" },
  { name: "60k", value: 75, fill: "#3dd34c" },
];
const increaseNormalRate = 20;

const solidProductsData1 = [
  { name: "first", value: 100, color: "#6d62f7" },
];
const solidProductsData2 = [
  { name: "first", value: 100, color: "#6d62f7" },
];

const increaseSolidRate = [10, 15];

const codersTypeData = [
  { name: "1m", uv: 350, pv: 150, fill: "#6d62f7" },
  { name: "2m", uv: 550, pv: 350, fill: "#3dd34c" },
  { name: "3m", uv: 250, pv: 550, fill: "#6d62f7" },
  { name: "4m", uv: 450, pv: 750, fill: "#3dd34c" },
  { name: "5m", uv: 650, pv: 450, fill: "#6d62f7" },
  { name: "6m", uv: 750, pv: 350, fill: "#3dd34c" },
  { name: "7m", uv: 450, pv: 350, fill: "#6d62f7" },
  { name: "8m", uv: 850, pv: 550, fill: "#3dd34c" },
];

class UserDashboard extends Component {
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
            User
          </h1>
          {/* {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {data && ( */}
            <>
              {/* Last Data Chart */}
              <CodersTypes codersTypeData={codersTypeData} />

              {/* Normals Chart */}
              <NewEmployes
                normalData={normalData}
                increaseNormalRate={increaseNormalRate}
              />

              {/* Last Income */}
              <SolidProducts
                solidProductsData1={solidProductsData1}
                solidProductsData2={solidProductsData2}
                increaseSolidRate={increaseSolidRate}
              />
            </>
          {/* )} */}
        </div>
      </div>
    );
  }
}

export default UserDashboard;
