import React from 'react';

import '../../../App.css';
import arrow from '../../../../public/arrow.png';
import arrowInverted from '../../../../public/arrowInverted.png';
import searchInverted from '../../../../public/searchInverted.png';

const ItemsView = ({ filter, filterProducts, productList, products }) => (
  <div className="ItemsView">
    <div className="ItemsViewHeader">
      <button className="ItemsViewButton" style={{ marginLeft: "30px" }} type="button">Inbox</button>
      <button className="ItemsViewButton" type="button">Nominations</button>
      <button className="ItemsViewButton" type="button">Details</button>
    </div>
    <div className="SearchInputContainer">
      <img src={searchInverted} alt="searchInverted" height="26" width="32" className="SearchInputIcon" />
      <input className="SearchInput" placeholder="Search" />
      <button className="SearchInputButton" type="button">Go</button>
    </div>
    <div className="FilterButtons">
      {productList.map(product => (
        <button className="FilterButton" type="button" key={product.symbol} style={{ background: product.color }} onClick={() => filterProducts(product.symbol)}>
          <div className="FilterButtonSymbol">{product.symbol}</div>
          <div className="FilterButtonName">{product.name}</div>
          <div className="FilterButtonNumber">{product.number}</div>
        </button>
      ))}
    </div>
    <div className="FilterInfoContainer">
      <div className="FilterInfoData">{`Filtered by: ${filter.name}`}</div>
      <div className="FilterInfoData" style={{fontWeight: "bold"}}>{`ITEMS (${filter.items})`}</div>
    </div>
    <div className="TableContainer">
      <table className="Table">
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
        {filter.name === "" ?
          products.map(product => (
            <tr className="TableRow" key={product.id}>
              <td>
                <button className="TableRowButton" type="button">
                  <img src={arrow} alt="arrow" height="26" width="26" className="ImageArrow" />
                </button>
              </td>
              <td>{product.id}</td>
              <td style={{background: product.color, color: "#ffffff", width: "50px"}}>{product.symbol}</td>
              <td>{product.month}</td>
              <td>{product.allocation}</td>
              <td>{product.nomination}</td>
              <td>{product.actual}</td>
              <td>{product.company}</td>
              <td>{product.port}</td>
              <td style={[product.status ===  "Loading" && {color: "red !important"}, product.status ===  "Finished" && {color: "#25948b !important"}]}>{product.status}</td>
            </tr>
          ))
        :
          products.filter(product => product.symbol === filter.name).map(product => (
            <tr className="TableRow" key={product.id}>
              <td>
                <button className="TableRowButton" type="button">
                  <img src={arrow} alt="arrow" height="26" width="26" className="ImageArrow" />
                </button>
              </td>
              <td>{product.id}</td>
              <td style={{background: product.color, color: "#ffffff", width: "50px"}}>{product.symbol}</td>
              <td>{product.month}</td>
              <td>{product.allocation}</td>
              <td>{product.nomination}</td>
              <td>{product.actual}</td>
              <td>{product.company}</td>
              <td>{product.port}</td>
              <td style={[product.status ===  "Loading" && {color: "red !important"}, product.status ===  "Finished" && {color: "#25948b !important"}]}>{product.status}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
    <div className="PaginationInfoContainer">
      {`1-${products.length} of ${products.length} items`}
    </div>
  </div>
);

export default ItemsView;