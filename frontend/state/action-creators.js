import * as actionType from "./action-types";
import axios from "axios";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return { type: actionType.MOVE_CLOCKWISE };
}
export function moveCounterClockwise() {
  return { type: actionType.MOVE_COUNTERCLOCKWISE };
}

export function selectAnswer(id) {
  return { type: actionType.SET_SELECTED_ANSWER, payload: id };
}

export function setMessage() {}

export function setQuiz() {}

export function inputChange() {}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get("http://localhost:9000/api/quiz/next").then((res) => {
      dispatch({ type: actionType.SET_QUIZ_INTO_STATE, payload: res.data });
    });
  };
}
export function postAnswer(body) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post("http://localhost:9000/api/quiz/answer", body).then((res) => {
      dispatch({ type: actionType.SET_QUIZ_INTO_STATE, payload: "" });
      dispatch({ type: actionType.SET_SELECTED_ANSWER, payload: 0 });
      dispatch({
        type: actionType.SET_INFO_MESSAGE,
        payload: res.data.message,
      });
      console.log(res);
    });
  };
}
export function postQuiz(initialFormState) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios
      .post("http://localhost:9000/api/quiz/new", initialFormState)
      .then((res) => {
        console.log(res, "res");
        dispatch({
          type: actionType.SET_INFO_MESSAGE,
          payload: res.data.message,
        });
        dispatch({ type: actionType.RESET_FORM, payload: initialFormState });
      });
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
