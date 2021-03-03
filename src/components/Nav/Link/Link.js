import React from 'react';

import './Link.css';

const Link = (props) => (
  <a className={props.className} href={props.href}>
    {props.children}
  </a>
);

export default Link;
