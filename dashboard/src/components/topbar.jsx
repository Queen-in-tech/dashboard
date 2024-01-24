import { useEffect, useState } from "react";

const TopBar = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = new Date();
      const options = { month: "long", day: "numeric", year: "numeric" };
      const formatted = currentDate.toLocaleDateString("en-US", options);
      setFormattedDate(formatted);
    };

    getCurrentDate();
  }, []);

  return (
    <>
      <div className="sticky right-0 top-0 z-20 flex bg-[#FAFAFA] h-14 max-h-14 w-full items-center justify-between  px-6 py-10 shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-[#26282C] capitalize">
            Dasboard
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex bg-white rounded-3xl border border-[#DADDDD] px-4 gap-2 py-2">
            <img src="Icon - Search.svg" alt="" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white w-80"
            />
          </div>

          <div className="hidden md:flex gap-2 text-sm">
            <img src="solar_calendar-linear.svg" alt="" />
            <p className="font-medium">{formattedDate}</p>
          </div>

          <div className="hidden md:flex p-2 rounded-full border border-[#DADDDD] cursor-pointer">
            <img src="solar_bell-outline.svg" alt="" />
          </div>

          {/* Profile image and dropdown */}
          <div className="flex gap-3 items-center rounded-[28px] px-2 py-1 border border-[#DADDDD] ">
            <img
              className="h-[30px] w-[30px]  cursor-pointer"
              src="Rectangle 1061.png"
            />

            <div className="hidden md:block">
              <p className="text-end">Justin Bergson</p>
              <p className="text-end text-[#787486] text-sm">
                Justin@gmail.com
              </p>
            </div>

            <img src="Arrow - Down 2.svg" alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
