import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip);

const chartData = [
  {
    id: 2,
    label: "JavaScript",
    chartColor: "hsl(1, 86%, 80%)",
    value: 20,
  },
  {
    id: 58,
    label: "React JS",
    chartColor: "hsl(31, 93%, 50%)",
    value: 20,
  },
  {
    id: 1,
    label: "Bootstrap",
    chartColor: "hsl(43, 96%, 50%)",
    value: 34,
  },
  {
    id: 60,
    label: "Material UI",
    chartColor: "hsl(60, 63%, 80%)",
    value: 30,
  },
  {
    id: 117,
    label: "Flutter",
    chartColor: "hsl(185, 100%, 80%)",
    value: 21,
  },
  {
    id: 131,
    label: "Redux",
    chartColor: "hsl(212, 80%, 70%)",
    value: 20,
  },
];

function PieChart() {
  const total = chartData.reduce((sum, item) => {
    return sum + item.value;
  }, 0);

  const getValue = ({ context, threshold, lessThan, greaterThan }) => {
    let index = context.dataIndex;
    let value = context.dataset.data[index];
    let percent = ((value / total) * 100).toFixed(1);
    return percent < threshold ? lessThan : greaterThan;
  };

  return (
    <div
      className="PieChart"
      style={{
        width: "400px",
        height: "500px",
      }}
    >
      <Pie
        plugins={[ChartDataLabels]}
        data={{
          labels: chartData.map(({ label }) => label),
          datasets: [
            {
              label: "Dataset 1",
              data: chartData.map(({ value }) => value),
              backgroundColor: chartData.map(({ chartColor }) => chartColor),
              borderColor: "rgba(0, 0, 0, 0)",
              hoverBorderColor: "white",
              datalabels: {
                font: {
                  size: "14px",
                  weight: 500,
                },
                color: "#202223",
              },
            },
          ],
        }}
        options={{
          plugins: {
            datalabels: {
              offset: 1,
              formatter: (value, context) => {
                return getValue({
                  context,
                  threshold: 10,
                  lessThan: null,
                  greaterThan: `${((value / total) * 100).toFixed(1)}%`,
                });
              },
              backgroundColor: function (context) {
                return getValue({
                  context,
                  threshold: 10,
                  lessThan: null,
                  greaterThan:
                    context.dataset.backgroundColor[context.dataIndex],
                });
              },
              align: (context) => {
                return getValue({
                  context,
                  threshold: 10,
                  lessThan: "end",
                  greaterThan: "center",
                });
              },
              anchor: (context) => {
                return getValue({
                  context,
                  threshold: 10,
                  lessThan: "end",
                  greaterThan: "center",
                });
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return [context.label, context.parsed];
                },
              },
            },
            legend: {
              display: false,
            },
          },
          cutoutPercentage: 8,
          layout: {
            padding: 30,
          },
        }}
      />
    </div>
  );
}

export { PieChart };
