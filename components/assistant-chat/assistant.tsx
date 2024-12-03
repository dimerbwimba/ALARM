import React, { useState, useEffect } from 'react';

interface ChatMessage {
  user: boolean;
  message: string;
}

const Chat = () => {
  const [gemini, setGemini] = useState(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual Gemini API key
  const API_KEY = 'AIzaSyBybEwIl5cUDcx9tAfdy1baxYJc9mXBWPY';

  useEffect(() => {
    const initializeGemini = async () => {
      try {
        
      } catch (err) {
       
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    initializeGemini();
  }, []); // Empty dependency array to run only on initial render

  const handleSendMessage = async () => {
    if (userInput.trim() === '') {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
     
      setMessages([...messages, { user: false, message: "" }]);
      setUserInput('');
    } catch (err:any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      {error && <div className="error-message">{error}</div>}
      <ul className="messages">
        {messages.map((message, index) => (
          <li key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.message}
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chat;
