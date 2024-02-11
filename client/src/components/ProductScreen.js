import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({ slug: this.props.match.params.slug });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.slug}</h1>
      </div>
    );
  }
}

export default withRouter(ProductScreen);
