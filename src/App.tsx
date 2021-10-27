import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "./components/layout/Container/Container";
import Navbar from "./components/layout/navigation/Navbar";
import GlobalStyle from "./globalStyle/GlobalStyle";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Establishment from "./pages/Establishment";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Navbar />

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/establishment">
            <Establishment />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
