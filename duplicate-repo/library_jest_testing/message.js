import React, { useState } from "react";

const Message = ({ initialMessage }) => {
  const [message, setMessage] = useState(initialMessage);

  return (
    <div>
      <p data-testid="message-text">{message}</p>
      <button onClick={() => setMessage("Hello from Focus Bear!")}>
        Change Message
      </button>
    </div>
  );
};

export default Message;
