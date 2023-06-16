// import { DoughnutChart } from "./DoughnutChart";
import { TimeLineGraph } from "./TimeLineGraph";

// add grid layout for graphs
function App() {
  return (
    <div className="App">
      {/* <DoughnutChart chartType="UI Developers" showDataLabels={false} /> */}
      <TimeLineGraph
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
      />
    </div>
  );
}

export { App };
