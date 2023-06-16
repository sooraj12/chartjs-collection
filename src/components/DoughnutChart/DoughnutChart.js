import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

import { chartData } from "./chartData";

import "./DoughnutChart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ chartType, showDataLabels = true }) {
  const totalCount = useMemo(() => {
    return chartData.reduce((acc, cur) => {
      return acc + cur.total;
    }, 0);
  }, []);

  const fillText = ({ fontSize, ctx, text, textY, width }) => {
    ctx.font = `${fontSize}em sans-serif`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    ctx.fillText(text, textX, textY);
  };

  return (
    <div className="DoughnutChart">
      <Doughnut
        plugins={[
          ChartDataLabels,
          {
            beforeDraw(chart) {
              const { width } = chart;
              const { height } = chart;
              const { ctx } = chart;
              ctx.restore();
              //Data value
              fillText({
                ctx,
                width,
                fontSize: (height / 120).toFixed(2),
                text: totalCount,
                textY: 120,
              });

              //Data text
              const text = chartType;
              //   to show text with spac in two lines
              let words = text.split(" ");
              for (let n = 0; n < words.length; n++) {
                fillText({
                  ctx,
                  width,
                  fontSize: (height / 300).toFixed(2),
                  text: words[n],
                  textY: 125 + (n + 1) * 15,
                });
              }
              ctx.save();
            },
          },
        ]}
        data={{
          labels: chartData.map(({ label }) => label),
          datasets: [
            {
              data: chartData.map(({ total }) => total),
              backgroundColor: chartData.map(({ color }) => color),
              borderColor: "rgba(0, 0, 0, 0)",
            },
          ],
        }}
        options={{
          plugins: {
            datalabels: {
              formatter: (value, context) => {
                return showDataLabels ? value : "";
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
        }}
      />
    </div>
  );
}

export { DoughnutChart };
