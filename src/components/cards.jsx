// eslint-disable-next-line react/prop-types
const Cards = ({ img, red, title, price }) => {
  return (
    <div className="bg-white rounded-xl px-2 py-3 flex flex-col gap-3 item-center justify-center">
      <div className="flex justify-between items-center">
        <img
          src={img}
          alt=""
          className="border rounded-full border-[#E6E6E6] p-2"
        />
        <img src={red ? "red.svg" : "green.svg"} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#898989] text-[16px]">{title}</p>
        <p className="font-semibold text-[20px] text-[#3A3F51]">{price}</p>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center py-1 px-2 gap-1 text-xs  rounded-3xl justify-between ${
            red
              ? " bg-[#ED544E1F] text-[#ED544E]"
              : " bg-[#34CAA51F] text-[#34CAA5]"
          }`}
        >
          <img src={red ? "red arrow.svg" : "green arrow.svg"} alt="" />
          <span>23.5%</span>
        </div>
        <p className="text-[#606060] text-xs text-nowrap md:text-wrap">
          vs. previous month
        </p>
      </div>
    </div>
  );
};

export default Cards;
