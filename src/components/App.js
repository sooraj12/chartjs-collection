// import { DoughnutChart } from "./DoughnutChart";
// import { RadialGraph } from "./RadialChart";
// import { StackedBar } from "./StackedBar";
// import { TimeLineGraph } from "./TimeLineGraph";

// import { PieChart } from "./PieChart";
// import { HorizontalBar } from "./HorizontalBar";
// import { VerticalBar } from "./VerticalBar";
import { LineGraph } from "./LineGraph";

// Todo : add grid layout for graphs
// Todo : add scss variables
// Todo : create single chart instance and use options to hide legend, title etc...

function App() {
  return (
    <div className="App">
      {/* <DoughnutChart chartType="UI Developers" showDataLabels={false} /> */}
      {/* <TimeLineGraph
        data={[468, 470, 552, 565, 576, 647, 655, 670, 670, 682, 683, 684]}
        labels={[
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
        ]}
      /> */}
      {/* <RadialGraph
        data={[
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
        ]}
        labels={[
          ["HTML"],
          ["CSS"],
          ["JavaScript"],
          ["Angulsr JS"],
          ["React JS"],
          ["Vue JS"],
        ]}
        maxScores={[100, 100, 100, 100, 100, 100]}
        percentile={[78.485, 68.438, 78.438, 78.485, 100, 94.737]}
      /> */}
      {/* <StackedBar /> */}
      {/* <PieChart /> */}
      {/* <HorizontalBar /> */}
      {/* <VerticalBar /> */}
      <LineGraph />
    </div>
  );
}

export { App };
