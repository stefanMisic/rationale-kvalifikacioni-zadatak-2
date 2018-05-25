import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    <Link to="/test">
      <button
          type="button"
          onClick={() => console.log('ROUTE ON TEST!')}
      >
          Test React Router!
      </button>
    </Link>
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

