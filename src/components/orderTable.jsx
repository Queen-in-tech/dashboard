const OrderTable = () => {
  const columns = [
    {
      header: "Name",
      accessor: "name",
    },

    {
      header: "Date",
      accessor: "date",
    },

    {
      header: "Amount",
      accessor: "amount",
    },

    {
      header: "Status",
      accessor: "status",
    },

    {
      header: "invoice",
      accessor: "",
    },
  ];
  const currentTableData = [
    {
      name: "Marcus Bergson",
      img: "Frame 1000003208.png",
      date: "Nov 15, 2023",
      amount: "$80,000",
      status: "Paid",
    },
    {
      name: "Jaydon Vaccaro",
      img: "Frame 10000032086.png",
      date: "Nov 15, 2023",
      amount: "$150,000",
      status: "Refund",
    },
    {
      name: "Corey Schleifer",
      img: "Frame 1000003208(1).png",
      date: "Nov 14, 2023",
      amount: "$87,000",
      status: "Paid",
    },
    {
      name: "Cooper Press",
      img: "Frame 1000003208(2).png",
      date: "Nov 14, 2023",
      amount: "$100,000",
      status: "Refund",
    },
    {
      name: "Phillip Lubin",
      img: "Frame 1000003208(3).png",
      date: "Nov 13, 2023",
      amount: "$78,000",
      status: "Paid",
    },
  ];
  return (
    <div className="overflow-x-auto border-b border-gray-200 ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                scope="col"
                className=" py-2 capitalize text-left text-[16px] font-medium text-[#9CA4AB] bg-white shadow-none"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {currentTableData.length === 0 && (
            <div className="w-full py-3 text-center">No data</div>
          )}
          {currentTableData &&
            currentTableData.map((row, i) => {
              return (
                <tr key={i}>
                  {columns.map((cell, index) => {
                    if (cell.accessor === "") {
                      return (
                        <td
                          key={index}
                          className="whitespace-nowrap   py-4 flex gap-2 text-sm cursor-pointer"
                        >
                          <img src="document-download.svg" alt="" />
                          <span className="text-[#0D062D]"> View</span>
                        </td>
                      );
                    }

                    if (cell.accessor === "status") {
                      return (
                        <td
                          key={index}
                          className="whitespace-nowrap pr-5 md:pr-0 py-4 text-sm"
                        >
                          {row[cell.accessor] === "Paid" ? (
                            <span className="px-3 py-1 text-[#34CAA5]">
                              {row[cell.accessor]}
                            </span>
                          ) : (
                            <span className="px-3 py-1 text-[#ED544E]">
                              {row[cell.accessor]}
                            </span>
                          )}
                        </td>
                      );
                    }
                    if (cell.accessor === "name") {
                      return (
                        <td
                          key={index}
                          className="whitespace-nowrap pr-16 md:pr-0  py-4 flex gap-2 items-center text-[#3A3F51]"
                        >
                          <img src={row["img"]} alt="" />
                          <p>{row[cell.accessor]}</p>
                        </td>
                      );
                    }
                    if (cell.accessor === "date") {
                      return (
                        <td
                          key={index}
                          className="whitespace-nowrap pr-8 md:pr-0 py-4 text-[#737373]"
                        >
                          <p>{row[cell.accessor]}</p>
                        </td>
                      );
                    }

                    return (
                      <td
                        key={index}
                        className="whitespace-nowrap pr-5 md:pr-0 py-4 text-[#0D062D]"
                      >
                        {row[cell.accessor]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
