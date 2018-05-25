import React from 'react';
import { connect } from 'react-redux';

import { testRedux as testReduxAction } from '../modules';

const HomeContainer = ({ testData, testRedux }) => (
  <div>
    <h1>Hello, React!</h1>
    <button
        type="button"
        onClick={() => testRedux('success')}
    >
      Hello, Redux: {testData}
    </button>
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
)(HomeContainer);

