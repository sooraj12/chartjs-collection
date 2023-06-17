import { Bar } from "react-chartjs-2";

const chartData = {
  threshold: 30,
  data: [
    {
      label: "Mon",
      value: 15,
    },
    {
      label: "Tue",
      value: 45,
    },
    {
      label: "Wed",
      value: 25,
    },
    {
      label: "Thu",
      value: 35,
    },
    {
      label: "Fri",
      value: 10,
    },
  ],
};

function VerticalBar() {
  const getBackgroundColor = (val) => {
    if (val > chartData.threshold) return "#00bf9c";
    return "#ed6362";
  };

  const getMaxYaxisValue = () => {
    const maxVal = Math.max(...chartData.data.map(({ value }) => value));
    if (maxVal <= chartData.threshold) return chartData.threshold + 5;
    return maxVal + 5;
  };

  return (
    <div
      className="VerticalBar"
      style={{
        width: "500px",
        height: "400px",
      }}
    >
      <Bar
        options={{
          plugins: {
            annotation: {
              annotations: {
                line1: {
                  type: "line",
                  mode: "horizontal",
                  scaleID: "y",
                  value: chartData.threshold,
                  borderColor: "#C4CDD5",
                  borderWidth: 2,
                  borderDash: [5],
                  label: {
                    display: false,
                    position: "end",
                    content: "Your weekly target",
                  },
                  enter(ctx) {
                    const chart = ctx.chart;
                    const annotationOpts =
                      chart.options.plugins.annotation.annotations[
                        ctx.element.options.id
                      ];
                    annotationOpts.label.display = true;
                    ctx.chart.update();
                  },

                  leave(ctx) {
                    const chart = ctx.chart;
                    const annotationOpts =
                      chart.options.plugins.annotation.annotations[
                        ctx.element.options.id
                      ];
                    annotationOpts.label.display = false;
                    ctx.chart.update();
                  },
                },
              },
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 9.5,
                },
              },
              grid: {
                display: false,
              },
            },
            y: {
              type: "linear",
              max: getMaxYaxisValue(),
              ticks: {
                font: {
                  size: 9.5,
                },
              },
              grid: {
                display: false,
              },
              title: {
                display: true,
                text: "Count",
                padding: { top: 0, left: 0, right: 0, bottom: 0 },
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
        data={{
          labels: chartData.data.map(({ label }) => label),
          datasets: [
            {
              data: chartData.data.map(({ value }) => value),
              backgroundColor: chartData.data.map((item) =>
                getBackgroundColor(item.value)
              ),
              borderColor: "rgba(0, 0, 0, 0)",
              barThickness: 10,
              borderWidth: 2,
              borderRadius: 12,
            },
          ],
        }}
      />
    </div>
  );
}

export { VerticalBar };
