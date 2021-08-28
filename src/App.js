import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import Success from "./components/Success";

const App = () => {
  return (
    <div>
      <Header />
      <br />
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/success" component={Success} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>

      <Footer />
    </div>
  );
};
export default App;
