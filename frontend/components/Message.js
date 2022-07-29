import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

function Message(props) {
  console.log(props, "message");
  return <div id="message">{props.infoMessage}</div>;
}

export default connect((st) => st, actionCreators)(Message);
