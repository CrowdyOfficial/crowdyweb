// Question and Answer
import React from "react";
const QA = (props) => {
  return (
    <div className="questAnswer">
      <div className="question">
        <span>{props.q1}</span>
        <span>{props.q2}</span>
        <span>{props.q3}</span>
        <span>{props.q4}</span>
      </div>
      <div className="answer">
        <span>{props.a1}</span>
        <span>{props.a2}</span>
        <span>{props.a3}</span>
        <span>{props.a4}</span>
        <span>{props.a5}</span>
        <span>{props.a6}</span>
      </div>
    </div>
  );
};

export default QA;
