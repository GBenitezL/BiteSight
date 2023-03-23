import "./App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* must add the content-wrap */}
      <Header />
      <div className="content-wrap">
        <Body />
        <h1 style={{ textAlign: "center" }}>React Footer using CSS Grid</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
