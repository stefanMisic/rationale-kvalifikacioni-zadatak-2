export const FILTER_PRODUCTS = '@home/FILTER_PRODUCTS';
export const TEST_REDUX = '@home/TEST_REDUX';

export function testRedux(testData) {
  return {
    type: TEST_REDUX,
    payload: {
      testData
    }
  };
}

export function filterProducts(filterSymbol) {
  return {
    type: FILTER_PRODUCTS,
    payload: {
      filterSymbol
    }
  };
}
