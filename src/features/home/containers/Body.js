import React from 'react';
import { connect } from 'react-redux';

import '../../../App.css';
import { filterProducts as filterProductsAction } from '../modules';
import { ItemsView, NavigationMenu } from '../ui';

const Body = ({ filter, filterProducts, productList, products }) => (
  <div className="Body">
    <NavigationMenu />
    <ItemsView filter={filter} filterProducts={filterProducts} productList={productList} products={products} />
  </div>
);

const mapDispatchToProps = {
  filterProducts: filterProductsAction
};

const mapStateToProps = ({ home }) => ({
  filter: home.filter,
  productList: home.productList,
  products: home.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
