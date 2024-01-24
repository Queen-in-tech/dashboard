/* eslint-disable react/prop-types */
const Range = ({ title, w, price, range, color }) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <p className="font-semibold text-lg text-[#22242C]">{title}</p>
      <div className="w-full h-[12px] bg-[#F5F5F5] rounded-2xl">
        <div className={`bg-[${color}] h-[12px]  w-[${w}%] rounded-2xl`}></div>
      </div>
      <div className="flex justify-between w-full items-center text-lg font-light text-[15px]">
        <p>${price}</p>
        <p>+{range}%</p>
      </div>
    </div>
  );
};

export default Range;
