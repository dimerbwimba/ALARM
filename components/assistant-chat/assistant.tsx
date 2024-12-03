import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chat = () => {
  const [gemini, setGemini] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual Gemini API key
  const API_KEY = 'AIzaSyBybEwIl5cUDcx9tAfdy1baxYJc9mXBWPY';

  useEffect(() => {
    const initializeGemini = async () => {
      try {
        const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        setGemini(model);
      } catch (err) {
        setError(err.message);
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
      const response = await gemini.generateText({
        prompt: userInput,
        maxTokens: 1024, // Adjust as needed to control response length
        temperature: 0.7, // Adjust temperature to control creativity vs. informativeness
      });

      setMessages([...messages, { user: false, message: response.text }]);
      setUserInput('');
    } catch (err) {
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
