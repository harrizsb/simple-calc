import React from "react";
import { useDispatch } from "react-redux";

import { ADD_CALC_DATA, RESET_CALC_DATA, CALC } from "../store/actionTypes";

import "./Button.scss";

export default ({ text }) => {
  const dispatch = useDispatch();

  const combineClass = (arr1, arr2) => {
    return arr1.concat(arr2).join(" ");
  };

  const determineClass = () => {
    const baseClass = ["button"];
    if (/clear/gi.test(text)) {
      const tmp = ["button__light_text", "button__letter_spacing"];
      return combineClass(baseClass, tmp);
    } else if (["*", "+", "-", "%", "/", ".", "="].includes(text)) {
      return combineClass(baseClass, "button__operand");
    } else {
      return combineClass(baseClass, "button__number");
    }
  };

  const handleClick = () => {
    switch (text) {
      case "=":
        dispatch({
          type: CALC,
        });
        break;

      case "clear":
        dispatch({
          type: RESET_CALC_DATA,
        });
        break;

      default:
        dispatch({
          type: ADD_CALC_DATA,
          payload: text,
        });
        break;
    }
  };

  return (
    <div className={determineClass()} onClick={handleClick}>
      {text}
    </div>
  );
};
