import React from "react";
import FormatNumber from "../util/Util";

const Bottom = ({ data, char, x, y }) => {
  const posY = y - 80;
  const smartphoneX = x - 110;

  const quantitySmartPhone = char
    ? FormatNumber(data[1].quantity) + " €"
    : FormatNumber(data[1].quantity);
  const quantitySmartX = x - quantitySmartPhone.length * 9 - 5;
  const percentajeSmartX = quantitySmartX - 50;
  const tabletColor = data[0].color;
  const smartphoneColor = data[1].color;

  return (
    <React.Fragment>
      <text
        x={-x}
        y={posY}
        fontFamily="Verdana"
        fontSize="15"
        fill={tabletColor}
        fontWeight="bold"
      >
        Tablet
      </text>
      <text x={-x} y={posY + 20} fontFamily="Verdana" fontSize="15">
        {data[0].percentaje}%
      </text>
      <text
        x={-x + 50}
        y={posY + 20}
        fontFamily="Verdana"
        fontSize="15"
        fill="#A1A1A1"
      >
        {FormatNumber(data[0].quantity)} {char && " €"}
      </text>
      <text
        x={smartphoneX}
        y={posY}
        fontFamily="Verdana"
        fontSize="15"
        fill={smartphoneColor}
        fontWeight="bold"
      >
        Smartphone
      </text>
      <text
        x={percentajeSmartX}
        y={posY + 20}
        fontFamily="Verdana"
        fontSize="15"
      >
        {data[1].percentaje}%
      </text>
      <text
        x={quantitySmartX}
        y={posY + 20}
        fontFamily="Verdana"
        fontSize="15"
        fill="#A1A1A1"
      >
        {quantitySmartPhone}
      </text>
    </React.Fragment>
  );
};

export default Bottom;
