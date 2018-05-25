import React from 'react';
import { Link } from 'react-router-dom';

const TestContainer = () => (
  <div>
    <h1>Hello, React Router!</h1>
    <Link to="/">
      <button
          type="button"
          onClick={() => console.log('ROUTE ON HOME!')}
      >
        Back to home!
      </button>
    </Link>
  </div>
);

export default TestContainer;
