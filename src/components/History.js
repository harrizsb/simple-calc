import React from "react";
import { useSelector } from "react-redux";

import "./History.scss";

export default () => {
  const history = useSelector((state) => state.history);

  return (
    <div className="history">
      {history.reverse().map((val, index) => (
        <div className="history__item" key={index}>
          {val}
        </div>
      ))}
    </div>
  );
};
