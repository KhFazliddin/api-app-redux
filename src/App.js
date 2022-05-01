import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar/Header";
import ChoosenProduct from "./pages/ChoosenProduct";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/productDetails/:id"
              element={<ChoosenProduct />}
            ></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
