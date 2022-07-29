import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

function Quiz(props) {
  const onClickSelect = (e) => {
    props.selectAnswer(Number(e.target.id));
  };

  useEffect(() => {
    if (!props.quiz) {
      props.fetchQuiz();
    }
  }, [props.quiz]);

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      quiz_id: props.quiz.quiz_id,
      answer_id:
        props.selectedAnswer === 1
          ? props.quiz.answers[0].answer_id
          : props.quiz.answers[1].answer_id,
    };
    console.log(body);

    props.postAnswer(body);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div
                onClick={onClickSelect}
                id={1}
                className={
                  props.selectedAnswer === 1 ? "answer selected" : "answer"
                }
              >
                {props.quiz.answers[0].text}
                <button onClick={onClickSelect} id={1}>
                  {props.selectedAnswer === 1 ? "SELECTED" : "Select"}
                </button>
              </div>

              <div
                onClick={onClickSelect}
                id={2}
                className={
                  props.selectedAnswer === 2 ? "answer selected" : "answer"
                }
              >
                {props.quiz.answers[1].text}
                <button onClick={onClickSelect} id={2}>
                  {props.selectedAnswer === 2 ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button onClick={onSubmit} id="submitAnswerBtn">
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

export default connect((st) => st, actionCreators)(Quiz);
