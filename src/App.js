import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CGPortfolio from "./Components/CGPortfolio";
import CSPortfolio from "./Components/CSPortfolio";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/CGPortfolio" element={<CGPortfolio />} />
          <Route exact path="/CSPortfolio" element={<CSPortfolio />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
