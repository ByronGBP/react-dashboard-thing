// @flow
import React, { Component, Fragment } from 'react';

import Header from './Header/Header';
import Welcome from './Welcome/Welcome';

type Props = {};

class Main extends Component<Props> {
  render () {
    return (
      <Fragment>
        <Header/>
        <Welcome />
      </Fragment>
    );
  }
}

export default Main;
