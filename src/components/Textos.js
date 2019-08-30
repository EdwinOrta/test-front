import React from "react";
import FormatNumber from "../util/Util";

const Textos = ({ data, message, char }) => {
  const quantities = data.map(q => q.quantity);
  const positionText = -message.length * 8;
  const quantitySum = quantities.reduce((total, num) => {
    return total + num;
  }, 0);

  let quantity = FormatNumber(quantitySum);
  quantity = char ? quantity + "€" : quantity;
  const postitionQuantity = -quantity.length * 9;

  return (
    <React.Fragment>
      <text
        x={positionText}
        y="-30"
        fontFamily="Verdana"
        fontSize="24"
        fill="#A1A1A1"
      >
        {message}
      </text>
      <text x={postitionQuantity} y="11" fontFamily="Verdana" fontSize="30">
        {quantity}
      </text>
    </React.Fragment>
  );
};

export default Textos;
