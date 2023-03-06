import React from 'react';

const Block = (props) => {
  return (
    <div className="block">
      {props.text}
      {props.duration}
    </div>
  );
};

export default Block;