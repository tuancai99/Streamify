import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TestComponent } from "./components";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
