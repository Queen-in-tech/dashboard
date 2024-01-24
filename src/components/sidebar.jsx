/* eslint-disable react/prop-types */
const SideBar = ({ onchange, checked }) => {
  const NAV_ITEMS = [
    {
      icon: "category.png",
    },
    {
      icon: "trend-up.svg",
    },
    {
      icon: "profile-2user.svg",
    },
    {
      icon: "box.svg",
    },

    {
      icon: "discount-shape.svg",
    },
    {
      icon: "info-circle.svg",
    },
  ];
  return (
    <div>
      <div
        className={`z-50 w-screen flex flex-1 px-8 lg:flex-col lg:sticky relative lg:top-0 bottom-0 lg:left-0 py-2 lg:py-4 lg:px-0  bg-[#F7F8FA] border border-r border-[#EBECF2] text-[#A8A8A8] transition-all  lg:min-h-screen lg:w-[4rem] lg:min-w-[4rem]`}
      >
        <div
          className={`text-[#393939] ${"hidden md:flex items-center justify-center "}   `}
        >
          <img src="logo.svg" alt="" />
        </div>
        <div className="h-fit lg:flex-1 flex justify-center w-full lg:mt-7 lg:relative">
          <div className="flex gap-8 lg:block lg:justify-center">
            <ul className="flex flex-nowrap justify-center text-sm lg:flex-col items-center gap-10 md:gap-6 lg:mb-5">
              {NAV_ITEMS.map((item, index) => (
                <>
                  <li
                    className={`block list-none cursor-pointer ${
                      index == 0 ? "" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className={`bg-black h-1 w-7 flex justify-center items-center ${
                        index == 0 ? "block lg:hidden absolute top-0" : "hidden"
                      }`}
                    ></div>
                    <img src={item.icon ? item.icon : ""} alt="" />

                    <svg
                      className={` ${
                        index == 0
                          ? "hidden lg:block absolute right-0 top-0"
                          : "hidden"
                      }`}
                      width="3"
                      height="21"
                      viewBox="0 0 3 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                        fill="#0D062D"
                      />
                    </svg>
                  </li>
                </>
              ))}
            </ul>
            <div className=" hidden  md:flex lg:flex-col gap-5 bg-white rounded-full p-2">
              <img
                src="brightness 1.svg"
                alt=""
                className={` cursor-pointer ${
                  checked ? "" : " bg-[#34CAA5] p-1 rounded-full cursor-pointer"
                }`}
                onClick={onchange}
              />
              <img
                src="moon 1.svg"
                alt=""
                onClick={onchange}
                className={`cursor-pointer ${
                  checked ? "bg-[#34CAA5] rounded-full " : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="flex gap-5 lg:flex-col">
            <img src="arrow-right.svg" alt="" className="cursor-pointer" />
            <img src="setting-2.svg" alt="" className="cursor-pointer" />
            <img src="logout.svg" alt="" className="cursor-pointer" />
          </div>
          {/* <div className="mr-3 cursor-pointer rounded-lg border border-[#E0E0E0] bg-white p-2 text-2xl text-gray-400"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
