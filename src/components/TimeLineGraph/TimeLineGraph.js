import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

import { setBackgroundGradient } from "../../utils";

import "./TimeLineGraph.scss";

function TimeLineGraph({ labels, data }) {
  const chartRef = useRef();
  const gradient = chartRef.current?.ctx.createLinearGradient(0, 0, 0, 100);

  return (
    <div className="TimeLineGraph">
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
