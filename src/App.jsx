import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import Books from "./Components/Books";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;