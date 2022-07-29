import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

function Wheel(props) {
  const onClickCCW = () => {
    props.moveCounterClockwise();
  };

  const onClickCW = () => {
    props.moveClockwise();
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <div
            style={{ "--i": idx }}
            key={idx}
            className={`cog${idx === props.wheel ? " active" : ""}`}
          >
            {idx === props.wheel ? "B" : null}
          </div>
        ))}
        {/* <div className="cog active" style={{ "--i": 0 }}></div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div> */}
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={onClickCCW} id="counterClockwiseBtn">
          Counter clockwise
        </button>
        <button onClick={onClickCW} id="clockwiseBtn">
          Clockwise
        </button>
      </div>
    </div>
  );
}

export default connect((st) => st, actionCreators)(Wheel);
