import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalManager from "./Utils/ModalManager";
import Profile from "./Pages/Profile/Profile";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="App">
      <ModalManager />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
