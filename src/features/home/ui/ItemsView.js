import React from 'react';

import '../../../App.css';
import arrow from '../../../../public/arrow.png';
import arrowInverted from '../../../../public/arrowInverted.png';
import searchInverted from '../../../../public/searchInverted.png';

const productList = [
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
]

const products = [
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
]

const ItemsView = () => (
  <div className="ItemsView">
    <div className="ItemsViewHeader">
      <button className="ItemsViewButton" style={{ marginLeft: "30px" }} type="button">Inbox</button>
      <button className="ItemsViewButton" type="button">Nominations</button>
      <button className="ItemsViewButton" type="button">Details</button>
    </div>
    <div className="SearchInputContainer">
      <img src={searchInverted} alt="searchInverted" height="26" width="26" className="SearchInputIcon" />
      <input className="SearchInput" placeholder="Search" />
      <button className="SearchInputButton" type="button">Go</button>
    </div>
    <div className="FilterButtons">
      {productList.map(product => (
        <button className="FilterButton" type="button" key={product.name} style={{ background: product.color }}>
          <div className="FilterButtonSymbol">{product.symbol}</div>
          <div className="FilterButtonName">{product.name}</div>
          <div className="FilterButtonNumber">{product.number}</div>
        </button>
      ))}
    </div>
    {/* <table className="Table">
      <thead>
        <tr className="TableHeader">
          <th>
            <button className="TableHeaderButton" type="button">
              <img src={arrowInverted} alt="arrowInverted" height="26" width="26" className="ImageArrowInverted" />
            </button>
          </th>
          <th>ID</th>
          <th>Product</th>
          <th>Month</th>
          <th>Allocation</th>
          <th>Nomination</th>
          <th>Actual</th>
          <th>Company</th>
          <th>Port</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody align="center">
      {products.map(product => (
        <tr className="TableRow" key={product.id}>
          <td>
            <button className="TableRowButton" type="button">
              <img src={arrow} alt="arrow" height="26" width="26" className="ImageArrow" />
            </button>
          </td>
          <td>{product.id}</td>
          <td>{product.symbol}</td>
          <td>{product.month}</td>
          <td>{product.allocation}</td>
          <td>{product.nomination}</td>
          <td>{product.actual}</td>
          <td>{product.company}</td>
          <td>{product.port}</td>
          <td>{product.status}</td>
        </tr>
      ))}
      </tbody>
    </table> */}
  </div>
);

export default ItemsView;