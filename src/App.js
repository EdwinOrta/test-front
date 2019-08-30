import React from "react";
import Graphic from "./components/Graphic";

function App() {
  const data = [
    {
      percentaje: 60,
      quantity: 120000,
      index: "data1-1",
      color: "rgb(165,211,97)"
    },
    {
      percentaje: 40,
      quantity: 80000,
      index: "data1-2",
      color: "rgb(58,92,15)"
    }
  ];
  const data2 = [
    {
      percentaje: 40,
      quantity: 20000000,
      index: "data2-1",
      color: "rgb(136,195,208)"
    },
    {
      percentaje: 60,
      quantity: 30000000,
      index: "data2-1",
      color: "rgb(43,72,85)"
    }
  ];
  const data3 = [
    {
      percentaje: 80,
      quantity: 480000000,
      index: "data3-1",
      color: "rgb(211,196,69)"
    },
    {
      percentaje: 20,
      quantity: 120000000,
      index: "data3-1",
      color: "rgb(172,83,39)"
    }
  ];

  const width = 500;
  const height = 500;

  return (
    <div>
      <h1>Graphic</h1>

      <svg width={width} height={height}>
        <Graphic
          data={data}
          message={"REVENUE"}
          char={true}
          x={250}
          y={250}
        ></Graphic>
      </svg>

      <svg width={width} height={height}>
        <Graphic data={data2} message={"IMPRESIONS"} x={250} y={250}></Graphic>
      </svg>

      <svg width={width} height={height}>
        <Graphic data={data3} message={"VISITS"} x={250} y={250}></Graphic>
      </svg>
    </div>
  );
}

export default App;
