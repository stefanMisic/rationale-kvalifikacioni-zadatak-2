export const TEST_REDUX = '@home/TEST_REDUX';

export function testRedux(testData) {
  return {
    type: TEST_REDUX,
    payload: {
      testData
    }
  };
}
