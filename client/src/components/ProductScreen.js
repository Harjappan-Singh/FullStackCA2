import React, { Component } from 'react';
import Rating from './Rating';
import '../css/Product.css';

class ProductScreen extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <div className="product-image">
          <a href={`/product/${product.slug}`}>
            <img src={product.productImage} alt={product.name} />
          </a>
        </div>
        <div className="product-info">
          <a href={`/product/${product.slug}`} className="product-name">
            {product.name}
          </a>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className="product-price">${product.price}</div>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default ProductScreen;
