import React, { Component } from 'react';
import { BrowserRouter ,Route, Router,Switch,NavLink } from 'react-router-dom';
//import{NavLink} from 'react-router';
import Home from './Home/Home'
import Product from './Product/Product'
import Header from './Share/Header'
import Customer from './Customer/Customer';
import Tax from './Tax/Tax';

import './App.css';

class App extends Component {
  render() {
    return (    
<BrowserRouter>
<div>
<Header/>
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/product" component={Product}/>
<Route path="/customer" component={Customer}/>
<Route path="/tax" component={Tax}/>
</Switch>
</div>
</BrowserRouter>
      
    );
  }
}

export default App;
