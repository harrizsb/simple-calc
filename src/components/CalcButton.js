import React from "react";
import "./CalcButton.scss";

import Button from "./Button";

export default () => {
  return (
    <div className="calc-button">
      <div className="row">
        <div className="col-xs-10">
          <Button text="clear" />
        </div>
        <div className="col-xs-2">
          <Button text="*" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10">
          <div className="row">
            <div className="col-xs">
              <Button text="1" />
            </div>
            <div className="col-xs">
              <Button text="2" />
            </div>
            <div className="col-xs">
              <Button text="3" />
            </div>
          </div>
        </div>
        <div className="col-xs-2">
          <Button text="+" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10">
          <div className="row">
            <div className="col-xs">
              <Button text="4" />
            </div>
            <div className="col-xs">
              <Button text="5" />
            </div>
            <div className="col-xs">
              <Button text="6" />
            </div>
          </div>
        </div>
        <div className="col-xs-2">
          <Button text="-" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10">
          <div className="row">
            <div className="col-xs">
              <Button text="7" />
            </div>
            <div className="col-xs">
              <Button text="8" />
            </div>
            <div className="col-xs">
              <Button text="9" />
            </div>
          </div>
        </div>
        <div className="col-xs-2">
          <Button text="%" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10">
          <div className="row">
            <div className="col-xs">
              <Button text="/" />
            </div>
            <div className="col-xs">
              <Button text="0" />
            </div>
            <div className="col-xs">
              <Button text="." />
            </div>
          </div>
        </div>
        <div className="col-xs-2">
          <Button text="=" />
        </div>
      </div>
    </div>
  );
};
