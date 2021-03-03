import React from 'react';

import './Line.css';

const Line = (props) => {
  return (
    <p className={props.className} id={props.id}>
      {props.line}
    </p>
  );
};

export default Line;
