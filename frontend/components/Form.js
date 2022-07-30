import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  const onChange = (e) => {
    props.inputChange(e.target.id, e.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newQuiz = {
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer,
    };

    props.postQuiz(newQuiz);
  };

  const disabling = true;

  return (
    <form id="form">
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
        value={props.form.newQuestion}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
        value={props.form.newTrueAnswer}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
        value={props.form.newFalseAnswer}
      />
      <button
        onClick={onSubmit}
        id="submitNewQuizBtn"
        disabled={
          props.form.newQuestion.trim().length > 1 &&
          props.form.newFalseAnswer.trim().length > 1 &&
          props.form.newTrueAnswer.trim().length > 1
            ? !disabling
            : disabling
        }
      >
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
