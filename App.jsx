import { useEffect, useState } from "react";
import io from "socket.io-client";

// const socket = io("https://mychatbackend.onrender.com");
const socket = io("https://simple-chat-backend-fe4e.onrender.com");

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    socket.on("onlineCount", (count) => {
      setOnlineCount(count);
    });
  }, []);

  function sendMessage() {
    socket.emit("message", input);
    setInput("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>🔥 Super Simple Chat 🔥</h2>
      <h3>Online: {onlineCount}</h3>

      <div style={{
        border: "1px solid black",
        padding: 10,
        height: 300,
        overflowY: "auto"
      }}>
        {messages.map((m, i) => <div key={i}>{m}</div>)}
      </div>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: 200 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
