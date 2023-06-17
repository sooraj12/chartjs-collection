import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale,
} from "chart.js";
import ChartAnnotations from "chartjs-plugin-annotation";

import { DoughnutChart } from "./DoughnutChart";
import { RadialGraph } from "./RadialChart";
import { StackedBar } from "./StackedBar";
import { TimeLineGraph } from "./TimeLineGraph";

import { PieChart } from "./PieChart";
import { HorizontalBar } from "./HorizontalBar";
import { VerticalBar } from "./VerticalBar";
import { LineGraph } from "./LineGraph";
import { Layout } from "./Layout";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale,
  ChartAnnotations
);

function App() {
  const charts = [
    {
      title: "Doughnut Chart",
      component: DoughnutChart,
      props: {
        chartType: "UI Developer",
        showDataLabels: true,
        width: "250px",
        height: "250px",
      },
    },
    {
      title: "Timeline Chart",
      component: TimeLineGraph,
      props: {
        width: "600px",
        height: "300px",
      },
    },
    {
      title: "Pie Chart",
      component: PieChart,
      props: {
        width: "400px",
        height: "400px",
      },
    },
    {
      title: "Line Chart",
      component: LineGraph,
      props: {
        width: "650px",
        height: "350px",
      },
    },
    {
      title: "Vertical Bar Chart",
      component: VerticalBar,
      props: {
        width: "300px",
        height: "300px",
      },
    },
    {
      title: "Stacked Bar Chart",
      component: StackedBar,
      props: {
        width: "450px",
        // height: "300px",
      },
    },
    {
      title: "Radial Chart",
      component: RadialGraph,
      props: {
        width: "450px",
      },
    },
    {
      title: "Horizontal Bar Chart",
      component: HorizontalBar,
      props: {
        width: "550px",
      },
    },
  ];
  return (
    <div className="App">
      <Layout charts={charts} />
    </div>
  );
}

export { App };
