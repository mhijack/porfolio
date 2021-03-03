import React from 'react';

import './Icon.css';

const Icon = (props) => (
  <img
    className={props.className}
    src={props.path}
    alt={props.name}
    style={props.style}
  />
);

export default Icon;
