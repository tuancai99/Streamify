import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TestComponent } from "./components";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Room from "./components/Room";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestComponent />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </Router>
  );
}

export default App;
