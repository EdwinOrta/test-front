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

  const graphic13 = [
    { x: 0, y: 2.5 },
    { x: 1.3, y: 2.3 },
    { x: 3, y: 3 },
    { x: 4, y: 2.8 },
    { x: 5.5, y: 3.3 },
    { x: 6, y: 3.1 },
    { x: 7.5, y: 3.8 },
    { x: 8, y: 3.5 },
    { x: 9, y: 4 },
    { x: 10, y: 3.8 }
  ];

  const graphic2 = [
    { x: 0, y: 4 },
    { x: 1, y: 3.9 },
    { x: 2, y: 3.5 },
    { x: 3, y: 4 },
    { x: 4.5, y: 3 },
    { x: 5, y: 3.2 },
    { x: 6.5, y: 2.8 },
    { x: 7, y: 3 },
    { x: 8, y: 2.3 },
    { x: 9, y: 2 }
  ];

  const width = 500;
  const height = 500;

  return (
    <div>
      <h1>Graphic</h1>

      <div className="d-flex justify-content-around  flex-wrap">
        <svg
          width={width}
          height={height}
          className="border border-right-0 border-left-0 border-top-0"
        >
          <Graphic
            data={data}
            message={"REVENUE"}
            char={true}
            x={250}
            y={250}
            graphic={graphic13}
          ></Graphic>
        </svg>

        <svg
          width={width}
          height={height}
          className="border border-right-0 border-left-0 border-top-0"
        >
          <Graphic
            data={data2}
            message={"IMPRESIONS"}
            x={250}
            y={250}
            graphic={graphic2}
          ></Graphic>
        </svg>

        <svg
          width={width}
          height={height}
          className="border border-right-0 border-left-0 border-top-0"
        >
          <Graphic
            data={data3}
            message={"VISITS"}
            x={250}
            y={250}
            graphic={graphic13}
          ></Graphic>
        </svg>
      </div>
    </div>
  );
}

export default App;
