import React from "react";

function Cuadros() {
  return (
    <React.Fragment>
      <rect
        x={0}
        y={-250 / 2}
        width="1"
        height="5"
        stroke="black"
        fill="transparent"
        strokeWidth="3"
      />
      <rect
        x={0}
        y={250 / 2 - 5}
        width="1"
        height="5"
        stroke="black"
        fill="transparent"
        strokeWidth="3"
      />
      <rect
        x={-250 / 2}
        y={0}
        width="5"
        height="1"
        stroke="black"
        fill="transparent"
        strokeWidth="3"
      />
      <rect
        x={250 / 2 - 5}
        y={0}
        width="5"
        height="1"
        stroke="black"
        fill="transparent"
        strokeWidth="3"
      />
    </React.Fragment>
  );
}

export default Cuadros;
