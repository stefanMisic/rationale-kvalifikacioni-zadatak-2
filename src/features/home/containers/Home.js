import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Body, Header } from '../containers';
import { testRedux as testReduxAction } from '../modules';

const Home = ({ testData, testRedux }) => (
  <div>
    <Header />
    <Body />
  </div>
);

const mapDispatchToProps = {
  testRedux: testReduxAction,
};

const mapStateToProps = ({ home }) => ({
  testData: home.testData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

