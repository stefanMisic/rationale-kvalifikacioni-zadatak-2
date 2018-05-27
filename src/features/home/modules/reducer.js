import { FILTER_PRODUCTS, TEST_REDUX } from './actions';

const initialState = {
  filter: {
    name: "",
    items: 0
  },
  productList: [
    {
      color: '#c393c9',
      name: '',
      number: 13,
      symbol: 'C3'
    },
    {
      color: '#49687c',
      name: '',
      number: 13,
      symbol: 'C4'
    },
    {
      color: '#6785a2',
      name: '',
      number: 13,
      symbol: 'C5'
    },
    {
      color: '#816f6e',
      name: 'Sulphur',
      number: 13,
      symbol: 'S'
    },
    {
      color: '#dfbe73',
      name: 'LPG',
      number: 13,
      symbol: 'L'
    }
  ],
  products: [
    {
      actual: '280t',
      allocation: '300t',
      color: '#c393c9',
      company: 'GASCO',
      id: 1123,
      month: 'Jan, 2016',
      name: '',
      nomination: '290t',
      number: 13,
      port: 'Ruwais',
      status: 'Loading',
      symbol: 'C3'
    },
    {
      actual: '285t',
      allocation: '280t',
      color: '#c393c9',
      company: 'AD GAS',
      id: 1124,
      month: 'Jan, 2016',
      name: '',
      nomination: '280t',
      number: 13,
      port: 'Shab',
      status: 'Waiting',
      symbol: 'C3'
    },
    {
      actual: '330t',
      allocation: '350t',
      color: '#49687c',
      company: 'GASCO',
      id: 1125,
      month: 'Feb, 2016',
      name: '',
      nomination: '340t',
      number: 13,
      port: 'Ruwais',
      status: 'Finished',
      symbol: 'C4'
    },
    {
      actual: '280t',
      allocation: '300t',
      color: '#6785a2',
      company: 'GASCO',
      id: 1126,
      month: 'Feb, 2016',
      name: '',
      nomination: '290t',
      number: 13,
      port: 'Ruwais',
      status: 'Waiting',
      symbol: 'C5'
    },
    {
      actual: '-',
      allocation: '500t',
      color: '#dfbe73',
      company: 'GASCO',
      id: 1127,
      month: 'Jan, 2016',
      name: 'LPG',
      nomination: '500t',
      number: 13,
      port: 'Ruwais',
      status: 'Draft',
      symbol: 'L'
    },
    {
      actual: '380t',
      allocation: '400t',
      color: '#816f6e',
      company: 'GASCO',
      id: 1128,
      month: 'Jan, 2016',
      name: 'Sulphur',
      nomination: '390t',
      number: 13,
      port: 'Ruwais',
      status: 'Loading',
      symbol: 'S'
    }
  ],
  testData: ''
};

export default function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        filter: {
          name: state.products.find(product => product.symbol === payload.filterSymbol).symbol,
          items: state.products.filter(product => product.symbol === payload.filterSymbol).length
        }
      };
    case TEST_REDUX:
      return {
        ...state,
        testData: payload.testData
      };
    default:
      return state;
  }
}
