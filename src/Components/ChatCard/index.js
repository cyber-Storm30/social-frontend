import React from "react";
import { pixToRem } from "../../Utils/pixToRem";

const ChatCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "70px",
        backgroundColor: "#DCDCDC",
        borderRadius: pixToRem(10),
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: 20, fontWeight: 600 }}>User</p>
      <p
        style={{
          fontSize: 16,
        }}
      >
        User: Content
      </p>
    </div>
  );
};

export default ChatCard;
