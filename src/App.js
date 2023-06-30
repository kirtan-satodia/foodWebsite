import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/ContextReducer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
