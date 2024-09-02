import React, { useState } from 'react';
import axios from 'axios';

function AIChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'mentee', text: input }];
    setMessages(newMessages);

    try {
      const response = await axios.post('http://localhost:5000/chat', {
        message: input,
      });

      const botMessage = response.data.reply;
      setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
      setMessages([...newMessages, { sender: 'bot', text: 'Something went wrong. Please try again later.' }]);
    }

    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">AI Chatbot</h1>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-4 flex-grow">
        <div className="h-96 overflow-y-scroll">
          {messages.map((message, index) => (
            <div key={index} className={`my-2 p-2 rounded-lg ${message.sender === 'mentee' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'}`}>
              <p className="text-gray-800">{message.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIChatbot;
