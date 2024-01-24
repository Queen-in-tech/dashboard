import Chart from "react-apexcharts";

const Linechart = () => {
  const data = [
    8000, 12000, 6000, 26000, 18000, 45000, 18000, 25000, 32000, 9000, 30000,
    26000,
  ];
  const maxValue = Math.max(...data);

  const series = [
    {
      name: "Sales trend monthly data",
      data: data.map((value, index) => ({
        x: `Category ${index + 1}`,
        y: value,
      })),
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "basic bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      max: 50000,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 20,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    title: {
      text: "Sales Trends",
      align: "left",
      style: {
        color: "#26282C",
      },
    },
    colors: [
      function ({ value }) {
        if (value === maxValue) {
          return "#34CAA5";
        } else {
          return "#34CAA51A";
        }
      },
    ],
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="rounded-bar-chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default Linechart;
