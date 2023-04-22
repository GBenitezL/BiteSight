import "./App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./components/404";
import Home from "./components/Home";
import CheckboxList from "./components/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-wrap">
          {/* must add the content-wrap */}
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/recommendations">
              <Body />
            </Route>
            <Route path="/form">
              <CheckboxList />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
