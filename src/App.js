import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalManager from "./Utils/ModalManager";
import Profile from "./Pages/Profile/Profile";
import Chat from "./Pages/Chat";

function App() {
  return (
    <div className="App">
      <ModalManager />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
