import React, { Component } from 'react';

import Icon from './Link/Icon/Icon';
import Link from './Link/Link';

// import { GoMarkGithub } from 'react-icons/go';
// import { IconContext } from 'react-icons';
import SVG from 'react-inlinesvg';

import github from '../../assets/imgs/github.svg';
import twitter from '../../assets/imgs/twitter.svg';
import avatar from '../../assets/imgs/avatar.jpg';

import './Navbar.css';

class Navbar extends Component {
  state = {
    icons: [
      {
        name: 'github',
        style: {},
        icon: <SVG src={github} className="icon icon--github" />,
        href: 'https://github.com/mhijack',
      },
      {
        name: 'twitter',
        style: {},
        icon: <SVG src={twitter} className="icon icon--twitter" />,
        href: 'https://twitter.com/jianyuan94',
      },
      // {
      //     name: 'avatar',
      //     style: {
      //         borderRadius: '10rem'
      //     },
      //     href: '/'
      // }
    ],
  };

  render() {
    const icons = this.state.icons.map((icon, index) => {
      return (
        <Link className={`link ${icon.name}`} href={icon.href} key={index}>
          {/* <Icon
                        className={`icon`}
                        name={icon.name}
                        path={icon.link}
                        style={icon.style}
                    /> */}
          {icon.icon}
        </Link>
      );
    });

    return <div className="nav">{icons}</div>;
  }
}

export default Navbar;
