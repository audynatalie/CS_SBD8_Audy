import { useState, useRef, useEffect } from 'react';
import './ChatPopup.css';

function ChatPopup({ onClose }) {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Halo! Saya asisten virtual IBM. Bagaimana saya bisa membantu Anda hari ini?', 
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  
  const quickResponses = [
    "Produk IBM terbaru",
    "Layanan cloud",
    "Solusi AI",
    "Hubungi tim penjualan"
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      let response;
      
      if (input.toLowerCase().includes('produk') || input.toLowerCase().includes('product')) {
        response = "IBM menawarkan berbagai produk dari AI, Cloud, Software, Hardware hingga Konsultasi. Untuk informasi lebih lanjut silakan kunjungi halaman Produk kami.";
      } else if (input.toLowerCase().includes('cloud')) {
        response = "Solusi IBM Hybrid Cloud memungkinkan Anda menjalankan aplikasi di lingkungan mana pun, termasuk on-premise, private cloud, dan public cloud.";
      } else if (input.toLowerCase().includes('ai') || input.toLowerCase().includes('artificial intelligence')) {
        response = "IBM watsonx adalah platform AI dan data terdepan yang membantu Anda membangun, menjalankan, dan menskala AI generatif yang terpercaya untuk bisnis.";
      } else if (input.toLowerCase().includes('kontak') || input.toLowerCase().includes('contact') || input.toLowerCase().includes('sales')) {
        response = "Anda dapat menghubungi tim penjualan kami di 0800-1-471-2347 (bebas pulsa) atau melalui email di id_ibm@id.ibm.com";
      } else {
        response = "Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail, Anda dapat mengunjungi website kami atau menghubungi tim penjualan.";
      }
      
      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (text) => {
    // Add user message with quick response
    const userMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setIsTyping(true);
    
    // Simulate bot response based on quick response
    setTimeout(() => {
      let response;
      
      if (text === "Produk IBM terbaru") {
        response = "Produk terbaru kami termasuk IBM watsonx.ai, IBM Cloud Satellite, dan IBM Storage Defender. Anda dapat menjelajahi semua produk kami di halaman Produk.";
      } else if (text === "Layanan cloud") {
        response = "IBM Cloud menawarkan layanan termasuk komputasi, database, AI, IoT, blockchain, dan lebih banyak lagi. Semua didukung oleh keamanan kelas dunia.";
      } else if (text === "Solusi AI") {
        response = "IBM menawarkan solusi AI termasuk platform watsonx, asisten AI, otomatisasi, dan alat machine learning untuk membantu bisnis Anda menghadapi tantangan paling kompleks.";
      } else if (text === "Hubungi tim penjualan") {
        response = "Tim penjualan kami dapat dihubungi di 0800-1-471-2347 (bebas pulsa) atau melalui email di id_ibm@id.ibm.com";
      }
      
      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-popup">
      <div className="chat-header">
        <div className="chat-title">
          <img src="/src/assets/ibm-logo.svg" alt="IBM Logo" className="chat-logo" />
          <h3>IBM Assistant</h3>
        </div>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <div className="chat-body">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-time">{message.time}</span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot">
            <div className="message-content typing">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        
        <div ref={chatEndRef} />
      </div>
      
      <div className="quick-responses">
        {quickResponses.map((response, index) => (
          <button 
            key={index} 
            className="quick-response-btn" 
            onClick={() => handleQuickResponse(response)}
          >
            {response}
          </button>
        ))}
      </div>
      
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Ketik pesan Anda di sini..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="send-btn" onClick={handleSend}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatPopup;