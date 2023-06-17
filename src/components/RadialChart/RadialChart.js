import React from "react";
import { Radar } from "react-chartjs-2";
import { toFont } from "chart.js/helpers";

import "./RadialGraph.scss";

const data = [
  {
    score: 683.8,
    percentile: 78.485,
    max_score: 996.13,
  },
  {
    score: 664.66,
    percentile: 68.438,
    max_score: 998.25,
  },
  {
    score: 625.27,
    percentile: 68.438,
    max_score: 998.26,
  },
  {
    score: 621.18,
    percentile: 78.485,
    max_score: 998.27,
  },
  {
    score: 465.26,
    percentile: 100,
    max_score: 465.26,
  },
  {
    score: 463.68,
    percentile: 94.737,
    max_score: 466.96,
  },
];
const labels = [
  ["HTML"],
  ["CSS"],
  ["JavaScript"],
  ["Angulsr JS"],
  ["React JS"],
  ["Vue JS"],
];
const maxScores = [100, 100, 100, 100, 100, 100];
const percentile = [78.485, 68.438, 78.438, 78.485, 100, 94.737];

function RadialGraph({ width, height }) {
  return (
    <div
      className="RadialGraph"
      style={{
        width,
        height,
      }}
    >
      <Radar
        data={{
          labels: labels,
          datasets: [
            {
              data: percentile,
              fill: true,
              backgroundColor: "rgba(0, 191, 156, 0.2)",
              borderColor: "#00BF9C",
              pointBackgroundColor: "#fff",
              pointBorderColor: "#00BF9C",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#00BF9C",
              borderWidth: 1,
            },
            {
              data: maxScores,
              fill: false,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "#3540A3",
              borderDash: [5, 5],
              borderWidth: 1,
              pointRadius: 0,
              pointHitRadius: 0,
            },
          ],
        }}
        options={{
          responsive: true,
          type: "radar",
          scales: {
            r: {
              beginAtZero: true,
              grid: {
                color: "#DFE3E8",
              },
              angleLines: {
                color: "#DFE3E8",
              },
              ticks: {
                maxTicksLimit: 6,
                showLabelBackdrop: false,
                textStrokeWidth: 0,
                callback: function () {
                  return "";
                },
                backdropColor: "rgba(0, 0, 0, 0)",
              },
              pointLabels: {
                font: {
                  size: 12,
                  lineHeight: "16px",
                  color: "#202223",
                },
              },
            },
          },
          plugins: {
            tooltip: {
              enabled: false,
              external: function (context) {
                const index = context.tooltip.dataPoints
                  ? context.tooltip.dataPoints[0].dataIndex
                  : 0;
                const item = data[index];
                if (item) {
                  // Tooltip Element
                  let tooltipEl = document.getElementById("chartjs-tooltip");

                  // Create element on first render
                  if (!tooltipEl) {
                    tooltipEl = document.createElement("div");
                    tooltipEl.id = "chartjs-tooltip";
                    tooltipEl.innerHTML =
                      "<div class = 'ChartTooltip__container'></div>";
                    document.body.appendChild(tooltipEl);
                  }

                  // Hide if no tooltip
                  const tooltipModel = context.tooltip;
                  if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                  }

                  // Set caret Position
                  tooltipEl.classList.remove("above", "below", "no-transform");
                  if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                  } else {
                    tooltipEl.classList.add("no-transform");
                  }

                  // Set Text
                  if (tooltipModel.body) {
                    let tableRoot = tooltipEl.getElementsByClassName(
                      "ChartTooltip__container"
                    )[0];

                    tableRoot.innerHTML = item
                      ? `<div class = "ChartTooltip__items">
                  <div class = "ChartTooltip">
                      <div class = "ChartTooltip__item">
                          <div class = "Item__value">${item.max_score}</div>
                          <div class = "Item__label">Top Score</div>
                      </div>
                      <div class = "ChartTooltip__item">
                          <div class = "Item__value">${item.score}</div>
                          <div class = "Item__label">Your Score</div>
                      </div>
                  </div>

                  <div class = "Item__percent">Percentile ${Math.floor(
                    item.percentile
                  )}</div>
              </div>`
                      : "";
                  }

                  const position = context.chart.canvas.getBoundingClientRect();
                  const bodyFont = toFont(tooltipModel.options.bodyFont);

                  // Display, position, and set styles for font
                  tooltipEl.style.opacity = 1;
                  tooltipEl.style.position = "absolute";
                  tooltipEl.style.left =
                    position.left +
                    window.pageXOffset +
                    tooltipModel.caretX +
                    "px";
                  tooltipEl.style.top =
                    position.top +
                    window.pageYOffset +
                    tooltipModel.caretY +
                    5 +
                    "px";
                  tooltipEl.style.font = bodyFont.string;
                  tooltipEl.style.padding =
                    tooltipModel.padding + "px " + tooltipModel.padding + "px";
                  tooltipEl.style.pointerEvents = "none";
                }
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export { RadialGraph };
