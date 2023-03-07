import React from 'react';

const Course = (props) => {
  return (
    <div className="block">
      {props.title}
      {props.duration}
    </div>
  );
};

export default Course;