import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RelativeWrapper from "./components/layout/navigation/MobileNav/RelativeWrapper";
import Navbar from "./components/layout/navigation/Navbar";
import GlobalStyle from "./globalStyle/GlobalStyle";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Establishment from "./pages/Establishments";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <RelativeWrapper>
        <GlobalStyle />
        <Navbar />

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/establishments">
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
      </RelativeWrapper>
    </Router>
  );
}

export default App;
