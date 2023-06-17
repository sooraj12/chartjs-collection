import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { setBackgroundGradient } from "../../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

// todo : fill
// todo : checkbox to hide line
// todo : background gradient

function LineGraph() {
  const xLabel = "Month";
  const yLabel = "No of Users";

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 1,
    scales: {
      x: {
        title: { display: true, text: xLabel },
        grid: {
          color: "#f9f9f9",
        },
        ticks: {
          color: "#000",
        },
      },
      y: {
        title: { display: true, text: yLabel },

        grid: {
          color: "#f9f9f9",
        },
        ticks: {
          stepSize: 5,
          color: "#000",
        },
      },
    },
    elements: {
      point: {
        borderWidth: 0,
        backgroundColor: "rgba(0,0,0,0)",
        hoverBorderColor: "#fff",
        hoverRadius: 8,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: "bottom",
        usePointStyle: false,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        callbacks: {
          title: function ([context]) {
            console.log(context);
          },
          label: function (context) {
            let label = "";
            if (context.parsed.y !== null) {
              label = ` ${context.parsed.y}`;
            }
            return label;
          },
          labelTextColor: function (context) {
            return "black";
          },
        },
      },
    },
  };

  const datasets = [
    {
      label: "HTML",
      data: [638, 515, 221, 80, 210, 170, 432, 538, 143, 356, 180, 289],
      colors: ["hsl(212, 80%, 80%)", "hsl(212, 80%, 80% , 0.7)"],
      fill: true,
      borderColor: "hsl(212, 80%, 80% , 0.5)",
      hidden: false,
      backgroundColor: setBackgroundGradient,
    },
    {
      label: "CSS",
      data: [338, 215, 121, 280, 10, 270, 132, 138, 132, 156, 480, 489],
      colors: ["hsl(1, 86%, 80%)", "hsl(1, 86%,80% , 0.8)"],
      fill: true,
      borderColor: "hsl(1, 86%,80% , 0.8)",
      hidden: false,
      backgroundColor: setBackgroundGradient,
    },
    {
      label: "JavaScript",
      data: [515, 511, 80, 210, 170, 432, 538, 215, 121, 280, 10, 270],
      colors: ["hsl(60, 63%, 50%)", "hsl(60, 63%, 50% , 0.9)"],
      fill: true,
      borderColor: "hsl(60, 63%, 50% , 0.9)",
      hidden: false,
      backgroundColor: setBackgroundGradient,
    },
    {
      label: "React",
      data: [791, 511, 438, 148, 160, 40, 215, 121, 280, 10, 270, 28],
      colors: ["hsl(43, 96%, 50%)", "hsl(43, 96%,50% , 0.5)"],
      fill: true,
      borderColor: "hsl(43, 96%,50% , 0.5)",
      hidden: false,
      backgroundColor: setBackgroundGradient,
    },
  ];

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div
      style={{
        width: "800px",
        height: "400px",
      }}
    >
      <Line
        options={options}
        data={{
          datasets,
          labels,
        }}
      />
    </div>
  );
}

export { LineGraph };
