// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import { moveClockwise, moveCounterClockwise } from "./action-creators";
import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  RESET_FORM,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
} from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      if (state >= 0 && state <= 4) {
        return state + 1;
      } else {
        return state - 5;
      }

    case MOVE_COUNTERCLOCKWISE:
      if (state > 0 && state < 6) {
        return state - 1;
      } else {
        return state + 5;
      }
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload;
    default:
      return state;
  }
}

const initialSelectedAnswerState = 0;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      if (action.payload === 1 || action.payload === 2) {
        return action.payload;
      } else {
        return action.payload;
      }
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      if (action.payload.id === "newQuestion") {
        return { ...state, newQuestion: action.payload.value };
      } else if (action.payload.id === "newTrueAnswer") {
        return { ...state, newTrueAnswer: action.payload.value };
      } else if (action.payload.id === "newFalseAnswer") {
        return { ...state, newFalseAnswer: action.payload.value };
      } else {
        return state;
      }
    case RESET_FORM:
      return initialFormState;
    default:
      return state;
  }
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
