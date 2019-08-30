import React from "react";
import Pie from "./Pie";
import Cuadros from "./Cuadro";
import Textos from "./Textos";
import Bottom from "./Bottom";
import Area from "./Area";

const Graphic = ({ data, message, char, x, y, graphic }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <Area data={graphic} color={data[0].color}></Area>
      <circle
        cx="0"
        cy="0"
        r="123"
        stroke="white"
        strokeWidth="8"
        fill="transparent"
      />
      <Pie data={data} />
      <circle
        cx="0"
        cy="0"
        r="153"
        stroke="white"
        strokeWidth="30"
        fill="transparent"
      />
      <Cuadros />
      <Textos message={message} data={data} char={char} />
      <Bottom data={data} char={char} x={x} y={y} />
    </g>
  );
};

export default Graphic;
