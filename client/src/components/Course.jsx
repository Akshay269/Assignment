import React from "react";

const Course = (props) => {
  return (
    <div className="course">
      <div>{`${props.title} (${props.duration})`}</div>
    </div>
  );
};

export default Course;
