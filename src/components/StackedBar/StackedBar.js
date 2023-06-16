import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const radius = 12;
const borderRadius = {
  topLeft: radius,
  topRight: radius,
  bottomLeft: radius,
  bottomRight: radius,
};

function StackedBar() {
  return (
    <div
      className="StackedBar"
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <Bar
        options={{
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                font: { size: 9.5 },
              },
            },
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [10, 12, 13, 10, 8, 20, 12],
              backgroundColor: "#00bf9c",
              borderColor: "rgba(0, 0, 0, 0)",
              barThickness: 10,
              borderWidth: 2,
              borderRadius: borderRadius,
              borderSkipped: false,
            },
            {
              data: [10, 12, 13, 10, 8, 10, 24],
              backgroundColor: "#3540a3",
              borderColor: "rgba(0, 0, 0, 0)",
              barThickness: 10,
              borderWidth: 2,
              borderRadius: borderRadius,
              borderSkipped: false,
            },
            {
              data: [5, 17, 8, 5, 12, 20, 12],
              backgroundColor: "#00bfde",
              borderColor: "rgba(0, 0, 0, 0)",
              barThickness: 10,
              borderWidth: 2,
              borderRadius: borderRadius,
              borderSkipped: false,
            },
          ],
        }}
      />
    </div>
  );
}

export { StackedBar };
