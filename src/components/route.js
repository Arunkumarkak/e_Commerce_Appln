import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList/productList";
import Login  from "./Login/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/ProductList" component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
