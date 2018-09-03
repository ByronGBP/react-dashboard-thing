// @flow
import React, { Component, Fragment } from 'react';

import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Content from './Content/Content';

type Props = {};

class Main extends Component<Props> {
  render () {
    return (
      <Fragment>
        <Header/>
        <Welcome/>
        <Content itemActive=""/>
      </Fragment>
    );
  }
}

export default Main;
