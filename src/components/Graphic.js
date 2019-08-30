import React from "react";
import Pie from "./Pie";
import Cuadros from "./Cuadro";
import Textos from "./Textos";
import Bottom from "./Bottom";

const Graphic = ({ data, message, char, x, y }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <Pie data={data} />
      <Cuadros />
      <Textos message={message} data={data} char={char} />
      <Bottom data={data} char={char} x={x} y={y} />
    </g>
  );
};

export default Graphic;
