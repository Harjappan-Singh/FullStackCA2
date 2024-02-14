import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/main.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HomeScreen from './components/HomeScreen';
import ProductDetails from './components/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">ShirtShack</Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/product/:slug" component={ProductDetails} />
              <Route path="*" component={HomeScreen} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
