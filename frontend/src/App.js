import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TestComponent } from "./components";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: ["Sora", "cursive"].join(",") }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<TestComponent />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
