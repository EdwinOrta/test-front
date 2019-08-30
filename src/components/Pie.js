import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Path = styled.path`
  fill: ${props => [props.color]};
`;

const Arc = ({ arcData }) => {
  const arc = d3
    .arc()
    .innerRadius(127)
    .outerRadius(150);

  return <Path d={arc(arcData)} color={arcData.data.color} />;
};

const Pie = ({ data }) => {
  const arcs = d3.pie().value(d => d.percentaje)(data);
  return arcs.map(d => <Arc arcData={d} key={d.index}></Arc>);
};

export default Pie;
