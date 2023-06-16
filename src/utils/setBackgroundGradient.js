const getGradient = (ctx, chartArea, colors) => {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  let gradient, width, height;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    colors.forEach((color, i) => {
      gradient.addColorStop(i / (colors.length - 1), color);
    });
  }
  return gradient;
};

const setBackgroundGradient = (context) => {
  const colors = context.dataset.colors;
  const chart = context.chart;
  const { ctx, chartArea } = chart;
  if (!chartArea) {
    return;
  }
  return getGradient(ctx, chartArea, colors);
};

export { setBackgroundGradient };
