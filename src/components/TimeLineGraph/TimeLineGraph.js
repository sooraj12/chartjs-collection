import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

import { setBackgroundGradient } from "../../utils";

import "./TimeLineGraph.scss";

const data = [468, 470, 552, 565, 576, 647, 655, 670, 670, 682, 683, 684];
const labels = [
  "24 Oct",
  "21 Nov",
  "28 Nov",
  "12 Dec",
  "19 Dec",
  "26 Dec",
  "16 Jan",
  "30 Jan",
  "27 Feb",
  "13 Mar",
  "27 Mar",
  "24 Apr",
];

function TimeLineGraph({ width, height }) {
  const chartRef = useRef();
  const gradient = chartRef.current?.ctx.createLinearGradient(0, 0, 0, 100);

  return (
    <div
      className="TimeLineGraph"
      style={{
        width,
        height,
      }}
    >
      <Line
        ref={chartRef}
        options={{
          responsive: true,
          elements: {
            line: {
              borderColor: "#00BF9C",
              borderWidth: 2,
              backgroundColor: gradient,
            },
            point: {
              pointBackgroundColor: "#00BF9C",
              pointBorderColor: "#fff",
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#6D7175",
                font: {
                  size: 10,
                },
              },
            },
            y: {
              grid: {
                color: "#F5F5F5",
                drawTicks: false,
              },
              ticks: {
                stepSize: 20,
                color: "#6D7175",
                font: {
                  size: 10,
                },
                padding: 10,
              },
            },
          },
        }}
        data={{
          labels: [...labels],
          datasets: [
            {
              data: [...data],
              fill: true,
              colors: ["rgba(0, 191, 156, 0.1)", "rgba(0, 191, 156, 0.9)"],
              backgroundColor: setBackgroundGradient,
            },
          ],
        }}
      />
    </div>
  );
}

export { TimeLineGraph };
