import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Feed from "./Pages/Feed/Feed";
import Register from "./Pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import Write from "./Components/Write/Write";
import { useSelector } from "react-redux";
import ModalManager from "./Utils/ModalManager";

function App() {
  return (
    <div className="App">
      <ModalManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
