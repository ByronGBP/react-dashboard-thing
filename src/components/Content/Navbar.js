//@flow
import React, { Component } from 'react';

import type { StatelessFunctionalComponent } from 'react';

type Props = {
  navClick: (newItem: string) => any
};

class Navbar extends Component<Props> {

  handleClick = (event: SyntheticEvent<HTMLDivElement>) => {
    this.props.navClick(event.currentTarget.innerText || '');
  };

  render() { 
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <div className="nav-link" onClick={this.handleClick}>Global</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={this.handleClick}>Overview</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={this.handleClick}>Pendings</div>
        </li>
      </ul>
    );
  }
}

export default Navbar;