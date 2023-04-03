import "./App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* must add the content-wrap */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <div className="content-wrap">
              <Body />
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
