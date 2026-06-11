// navigation/app/components/Chatbot.js

'use client';

import { useState, useRef, useEffect } from 'react';
import { getAllAmenities, searchAmenities, filterByStatus, filterByDistance } from '../data/airportData';

const Chatbot = ({ isOpen, onClose, onSearch }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 1,
          type: 'bot',
          text: "Hello! I'm your airport concierge assistant. I can help you find restaurants, restrooms, gates, and shops. Try asking me something like:",
          suggestions: [
            "Show me vegetarian food near gate 4",
            "Where are the nearest restrooms?",
            "Find open restaurants",
            "What's near gate A12?",
            "Show me shops that are open"
          ]
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const parseQuery = (query) => {
    const lowerQuery = query.toLowerCase();
    const amenities = getAllAmenities();
    let filtered = amenities;

    // Parse natural language queries
    if (lowerQuery.includes('vegetarian') || lowerQuery.includes('vegan')) {
      filtered = filtered.filter(amenity => 
        amenity.features && amenity.features.some(feature => 
          feature.toLowerCase().includes('vegetarian') || feature.toLowerCase().includes('vegan')
        )
      );
    }

    if (lowerQuery.includes('food') || lowerQuery.includes('restaurant') || lowerQuery.includes('eat')) {
      filtered = filtered.filter(amenity => amenity.type === 'restaurant');
    }

    if (lowerQuery.includes('restroom') || lowerQuery.includes('bathroom') || lowerQuery.includes('toilet')) {
      filtered = filtered.filter(amenity => amenity.type === 'restroom');
    }

    if (lowerQuery.includes('gate')) {
      const gateMatch = lowerQuery.match(/gate\s+([a-z]\d+|\d+)/i);
      if (gateMatch) {
        const gateNumber = gateMatch[1].toUpperCase();
        filtered = filtered.filter(amenity => 
          amenity.location.gate.toLowerCase().includes(gateNumber.toLowerCase())
        );
      }
    }

    if (lowerQuery.includes('near') || lowerQuery.includes('closest') || lowerQuery.includes('nearest')) {
      filtered = filtered.sort((a, b) => a.distance - b.distance);
    }

    if (lowerQuery.includes('open')) {
      filtered = filtered.filter(amenity => amenity.status === 'open');
    }

    if (lowerQuery.includes('shop') || lowerQuery.includes('store')) {
      filtered = filtered.filter(amenity => amenity.type === 'shop');
    }

    // If no specific filters applied, do a general search
    if (filtered.length === amenities.length) {
      filtered = searchAmenities(query, amenities);
    }

    return filtered.slice(0, 5); // Limit to 5 results
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const results = parseQuery(inputValue);
      
      let botResponse = '';
      if (results.length === 0) {
        botResponse = "I couldn't find anything matching your request. Try being more specific or ask about restaurants, restrooms, gates, or shops.";
      } else {
        botResponse = `I found ${results.length} result${results.length > 1 ? 's' : ''} for you:\n\n`;
        results.forEach((amenity, index) => {
          const status = amenity.status === 'open' ? '✅' : '❌';
          botResponse += `${index + 1}. ${status} ${amenity.name} (${amenity.type})\n`;
          botResponse += `   Terminal ${amenity.location.terminal}, Gate ${amenity.location.gate}\n`;
          botResponse += `   Distance: ${amenity.distance} miles\n`;
          if (amenity.rating) {
            botResponse += `   Rating: ⭐ ${amenity.rating}/5\n`;
          }
          botResponse += '\n';
        });
      }

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Trigger search in main component
      if (results.length > 0) {
        onSearch(inputValue);
      }
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 h-[600px] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Cebu Pacific Assistant</h3>
                <p className="text-sm text-red-100">Ask me anything about airport amenities</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 text-2xl transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="whitespace-pre-line">{message.text}</p>
                  
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      <p className="text-sm font-medium">Try asking:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about airport amenities..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
