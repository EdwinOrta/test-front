import React from "react";
import * as d3 from "d3";

const Arc = ({ arcData }) => {
  const arc = d3
    .arc()
    .innerRadius(127)
    .outerRadius(150);

  return <path d={arc(arcData)} fill={arcData.data.color} />;
};

const Pie = ({ data }) => {
  const arcs = d3.pie().value(d => d.percentaje)(data);

  return arcs.map(d => <Arc arcData={d} key={d.index}></Arc>);
};

export default Pie;
