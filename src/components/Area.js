import React from "react";
import * as d3 from "d3";

const Area = ({ data, color }) => {
  const x = d3
    .scaleUtc()
    .domain(d3.extent(data, d => d.x))
    .range([-110, 115]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .nice()
    .range([120, 30]);

  const area = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(d => x(d.x))
    .y1(d => y(d.y))
    .y0(y(0))(data);

  const colorOpacity = "rgba(" + color.substring(4, color.length - 1) + ",0.1)";

  return (
    <path
      d={area}
      stroke={color}
      fill={colorOpacity}
      strokeDasharray="100,0,280,300"
    />
  );
};

export default Area;
