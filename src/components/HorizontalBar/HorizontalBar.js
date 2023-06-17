import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Title);

const chartData = [
  {
    id: 108,
    label: "HTML",
    total: 70,
    value: 35,
  },
  {
    id: 119,
    label: "CSS",
    total: 85,
    value: 55,
  },
  {
    id: 2,
    label: "JavaScript",
    total: 50,
    value: 45,
  },
  {
    id: 69,
    label: "Angular JS",
    total: 70,
    value: 25,
  },
  {
    id: 58,
    label: "React JS",
    total: 80,
    value: 65,
  },
  {
    id: 126,
    label: "Vue JS",
    total: 50,
    value: 15,
  },
];

function HorizontalBar() {
  const getTooltipTitle = (dataSetLabel) => {
    if (dataSetLabel === "dataset1") {
      return "Current";
    }

    return "Total";
  };

  return (
    <div
      className="HorizontalBar"
      style={{
        width: "600px",
      }}
    >
      <Bar
        plugins={[ChartDataLabels]}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                title: function (context) {
                  return getTooltipTitle(context[0].dataset.label);
                },
                label: function (context) {
                  return [context.formattedValue];
                },
              },
            },
            datalabels: {
              formatter: (value, context) => {
                return value;
              },
              align: (context) => "left",
              anchor: (context) => "end",
              offset: 5,
              color: "white",
              font: {
                size: "8px",
                weight: 600,
              },
            },
          },
          indexAxis: "y",
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              grid: { display: false },
            },
          },
        }}
        data={{
          labels: chartData.map((item) => item.label),
          datasets: [
            {
              label: "dataset1",
              data: chartData.map((item) => item.value),
              axis: "y",
              backgroundColor: ["#404041"],
              barThickness: 10,
              barPercentage: 0.8,
              categoryPercentage: 1.0,
            },
            {
              label: "dataset2",
              data: chartData.map((item) => item.total),
              axis: "y",
              backgroundColor: ["#00C5B2"],
              barThickness: 10,
              barPercentage: 0.8,
              categoryPercentage: 1.0,
            },
          ],
        }}
      />
    </div>
  );
}

export { HorizontalBar };
