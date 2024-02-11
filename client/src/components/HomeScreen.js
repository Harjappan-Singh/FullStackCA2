import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const result = await axios.get('http://localhost:4000/api/products');
      this.setState({ products: result.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Featured Products</h1>
        <div className="products">
          {this.state.products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.productImage} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
