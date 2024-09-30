import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./comp/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import RefreshHandler from "./comp/RefreshHandler";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : navigate("/login");
  };
  return (
    <>
      <Navbar />
      <RefreshHandler setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
