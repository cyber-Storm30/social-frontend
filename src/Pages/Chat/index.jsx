import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import ChatCard from "../../Components/ChatCard";
import Navbar from "../../Components/Navbar/Navbar";
import { pixToRem } from "../../Utils/pixToRem";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const ENDPOIENT = "http://localhost:5000";

var socket, selectedChatCompare;
const Chat = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    socket = io(ENDPOIENT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
  }, []);

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: pixToRem(10),
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 30,
        }}
      >
        <div
          style={{
            flex: 2,
            backgroundColor: "#ffffff",
            height: "100%",
            borderRadius: pixToRem(10),
            padding: 10,
          }}
        >
          <p style={{ fontSize: 32, fontWeight: 400 }}>My Chats</p>
          <ChatCard />
        </div>
        <div
          style={{
            flex: 8,
            backgroundColor: "#ffffff",
            height: "85vh",
            borderRadius: pixToRem(10),
            padding: 20,
          }}
        >
          <p style={{ fontSize: 32, fontWeight: 400 }}>User 1</p>
          <div
            style={{
              width: "100%",
              height: "80vh",
              borderRadius: pixToRem(10),
              backgroundColor: "#DCDCDC",
              position: "relative",
            }}
          >
            <p>jfiew</p>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  position: "absolute",
                  bottom: 10,
                  width: "95%",
                  height: "50px",
                  paddingLeft: "10px",
                  outline: "none",
                  borderRadius: "10px",
                  border: "none",
                }}
                placeholder="Enter a message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
