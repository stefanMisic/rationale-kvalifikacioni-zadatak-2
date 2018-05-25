import { TEST_REDUX } from './actions';

const initialState = {
  testData: ''
};

export default function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case TEST_REDUX:
      return {
        ...state,
        testData: payload.testData
      };
    default:
      return state;
  }
}
