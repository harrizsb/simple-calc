import React from "react";
import { useSelector } from "react-redux";

import "./History.scss";

export default () => {
  const history = useSelector((state) => state.history.reverse());

  return (
    <div className="history">
      {history.map((val, index) => (
        <div className="history__item" key={index}>
          {val}
        </div>
      ))}
    </div>
  );
};
