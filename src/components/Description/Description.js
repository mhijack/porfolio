import React from 'react';

import './Description.css';

const Description = (props) => {
  return (
    <div className="description">
      <p className="title">
        Hello,
        <br />
        I'm <span className="danger">Jianyuan Chen.</span>
      </p>

      <p className="info">
        Software Engineer{' '}
        <span role="img" aria-label="developer">
          💻
        </span>{' '}
        based in <span className="hover">Vancouver, Canada</span>.
      </p>

      <p className="contact">
        Feel free to contact me through my{' '}
        <span className="hover">
          <a className="email-link" href="mailto:jianyuan.chen12@gmail.com">
            email
          </a>
        </span>
        .
      </p>
    </div>
  );
};

export default Description;
