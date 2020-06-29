import React from "react";

import { useSelector } from "react-redux";

import "./Result.scss";

export default () => {
  const calc = useSelector((state) => state.calc);
  const result = useSelector((state) => state.result);

  return (
    <div className="result">
      <div className="result__operand">=</div>
      <div className="result__value">{result ? result : calc}</div>
    </div>
  );
};
