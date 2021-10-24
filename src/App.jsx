import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Order from "./pages/Order";

import { useSelector } from "react-redux";
import ShippingForm from "./pages/ShippingForm";
import PlaceOrder from "./pages/PlaceOrder";
import Profile from "./pages/Profile";

const App = () => {
  const user = useSelector((state) => state.userDetails);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/product">
          {<Product />}
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/cart/:id">
          <Cart />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/orderdetails">
          <Order />
        </Route>
        <Route exact path="/order/:id">
          <Order />
        </Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/shipping">
          <ShippingForm />
        </Route>
        <Route path="/placeOrder">
          <PlaceOrder />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
