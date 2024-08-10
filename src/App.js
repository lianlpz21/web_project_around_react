import "./index.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
