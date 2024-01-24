import Cards from "./cards";
import Linechart from "./linechart";
import OrderTable from "./orderTable";
import Range from "./range";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-5 p-5">
      <div className="relative col-span-2 bg-white pt-6  rounded-xl">
        <div className="text-end absolute top-[4%] right-0 pr-6 flex gap-3 items-center text-sm">
          <p>Sort by:</p>
          <div className="flex gap-2 border border-gray-200 rounded-3xl w-28 px-3 py-1.5 justify-between items-center text-xs">
            <span>Weekly</span>
            <img src="Arrow - Down 2.svg" alt="" className="cursor-pointer" />
          </div>
        </div>
        <Linechart />
      </div>
      <div className=" rounded-xl grid grid-cols-2 gap-x-3 gap-y-5">
        <Cards img="box-tick.png" red={false} title="Total Order" price="250" />
        <Cards
          img="3d-rotate.png"
          red={true}
          title="Total Refund"
          price="270"
        />
        <Cards
          img="shopping-cart.png"
          red={true}
          title="Average Sales"
          price="1567"
        />
        <Cards
          img="coin.png"
          red={false}
          title="Total Income"
          price="$350,000"
        />
      </div>
      <div className="col-span-2 bg-white p-6 rounded-xl flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <p className="text-[#26282C] font-semibold text-lg">Last Orders</p>
          <p className="text-[#34CAA5] text-lg cursor-pointer">See All</p>
        </div>
        <OrderTable />
      </div>
      <div className="bg-white p-4 rounded-xl flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <p className="text-[#26282C] font-semibold text-lg">Top Platform</p>
          <p className="text-[#34CAA5] text-lg cursor-pointer">See All</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <Range
            title="Book Bazaar"
            className="bg-[#6160DC] h-[12px]  w-[50%] rounded-2xl"
            price="2,500,000"
            range="15"
          />
          <Range
            title="Artisan Aisle"
            price="1,800,000"
            range="10"
            className="bg-[#54C5EB] h-[12px]  w-[30%] rounded-2xl"
          />
          <Range
            title="Toy Troop"
            price="1,200,000"
            range="8"
            className="bg-[#FFB74A] h-[12px]  w-[15%] rounded-2xl"
          />
          <Range
            title="Xstore"
            price="900,000"
            range="5"
            className="bg-[#6160AD] h-[12px]  w-[9%] rounded-2xl"
          />
          {/* <Range title="Book Bazaar" w="50" price="2,500,000" range="15" /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
