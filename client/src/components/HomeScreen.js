import React, { Component } from 'react';
import axios from 'axios';
import ProductScreen from './ProductScreen';
import '../css/HomeScreen.css';

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
        <div>
          <div className="products">
            {this.state.products.map((product) => (
              <div key={product.slug} className="product">
                <ProductScreen product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
