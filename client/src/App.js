import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Result } from "./pages/Result";
import { Results } from "./pages/Results";
import { MainMenu } from "./pages/MainMenu";
import { Create } from "./pages/Create";
import { UserSection } from "./pages/UserSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/offers/:offer">
            <Result />
          </Route>
          <Route path="/offers">
            <Results />
          </Route>
          <Route path="/createoffer">
            <Create />
          </Route>
          <Route path="/usersection">
            <UserSection />
          </Route>
          <Route path="/menu">
            <MainMenu />
          </Route>
          <Route path="/">
            <Redirect to="/offers" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
