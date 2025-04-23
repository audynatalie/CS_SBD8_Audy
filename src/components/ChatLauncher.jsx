// components/ChatPopup.jsx
import React, { useState, useRef, useEffect } from 'react';
import './ChatPopup.css';

const ChatPopup = ({ onClose, theme }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Halo! Selamat datang di IBM Indonesia. Ada yang bisa saya bantu hari ini?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim() && !attachment) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      attachment: attachment,
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setAttachment(null);

    // Simulate bot typing
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      setIsTyping(false);

      // Generate a response based on the input
      let botResponse;
      const lowercaseInput = inputValue.toLowerCase();

      if (lowercaseInput.includes('produk') || lowercaseInput.includes('product')) {
        botResponse =
          'Kami memiliki berbagai produk seperti watsonx, IBM Cloud, dan solusi keamanan. Anda ingin tahu lebih lanjut tentang produk yang mana?';
      } else if (lowercaseInput.includes('harga') || lowercaseInput.includes('biaya')) {
        botResponse =
          'Untuk informasi harga, silakan hubungi tim sales kami di 021-2992-xxxx atau isi formulir di halaman Kontak.';
      } else if (lowercaseInput.includes('cloud')) {
        botResponse =
          'IBM Cloud menawarkan infrastruktur cloud yang aman dan skalabel untuk bisnis Anda. Mau tahu lebih lanjut?';
      } else if (lowercaseInput.includes('ai') || lowercaseInput.includes('artificial intelligence') || lowercaseInput.includes('kecerdasan buatan')) {
        botResponse =
          'IBM memiliki solusi AI seperti watsonx yang dapat membantu bisnis Anda meningkatkan efisiensi dan inovasi. Kami juga menyediakan alat AI untuk pengembang dan pemimpin bisnis.';
      } else if (lowercaseInput.includes('bantuan') || lowercaseInput.includes('help')) {
        botResponse =
          'Saya dapat membantu Anda menemukan informasi tentang produk IBM, sumber daya teknis, atau menghubungkan Anda dengan tim sales kami.';
      } else if (lowercaseInput.includes('kontak') || lowercaseInput.includes('hubungi')) {
        botResponse =
          'Anda dapat menghubungi kami melalui telepon di 021-2992-xxxx atau mengunjungi halaman Kontak kami.';
      } else if (lowercaseInput.includes('studi kasus') || lowercaseInput.includes('case study')) {
        botResponse =
          'IBM Indonesia telah bekerja dengan berbagai perusahaan terkemuka seperti Bank Mandiri dan Pertamina. Apakah Anda tertarik untuk melihat studi kasus kami?';
      } else if (lowercaseInput.includes('quantum') || lowercaseInput.includes('kuantum')) {
        botResponse =
          'IBM Quantum adalah teknologi komputasi kuantum kami yang dapat memecahkan masalah kompleks yang tak terpecahkan oleh komputer klasik. Mau tahu lebih detail?';
      } else if (lowercaseInput.includes('watsonx') || lowercaseInput.includes('watson')) {
        botResponse =
          'watsonx adalah platform AI dan data terintegrasi kami, yang dapat membantu mengotomatisasi alur kerja, memprediksi tren, dan mengoptimalkan keputusan bisnis.';
      } else if (lowercaseInput.includes('keamanan') || lowercaseInput.includes('security')) {
        botResponse =
          'Solusi keamanan IBM mencakup IBM Security QRadar, IBM Security Verify, dan rangkaian produk keamanan siber lainnya untuk melindungi infrastruktur, data, dan aplikasi Anda.';
      } else if (attachment) {
        botResponse = 'Terima kasih telah mengunggah file. Tim kami akan segera mempelajarinya dan menghubungi Anda kembali. Ada yang bisa saya bantu lagi?';
      } else {
        botResponse =
          'Terima kasih atas pertanyaan Anda. Ingin saya informasikan lebih lanjut tentang produk IBM, layanan dukungan, atau menghubungkan Anda dengan tim sales?';
      }

      setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botResponse }]);
    }, 1500);
  };

  const quickResponses = [
    'Saya ingin tahu lebih lanjut tentang watsonx',
    'Apa saja alat AI untuk pengembang?',
    'Bagaimana cara menghubungi tim sales?',
    'Tunjukkan studi kasus IBM Indonesia',
  ];

  const sendQuickResponse = (text) => {
    setMessages([...messages, { type: 'user', text }]);

    // Simulate bot typing
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      setIsTyping(false);
      let botResponse;

      if (text.includes('watsonx')) {
        botResponse =
          'watsonx adalah platform AI dan data yang dirancang untuk membantu perusahaan meningkatkan efisiensi dan inovasi. Fitur utamanya meliputi:\n\n1. watsonx.ai - Studio untuk membangun dan melatih model AI\n2. watsonx.data - Platform data terintegrasi untuk analitik skala besar\n3. watsonx.governance - Alat untuk mengelola dan memantau AI secara bertanggung jawab\n\nApakah Anda ingin demo atau konsultasi dengan ahli watsonx kami?';
      } else if (text.includes('alat AI untuk pengembang')) {
        botResponse =
          'IBM menyediakan berbagai alat AI untuk pengembang, termasuk:\n\n1. IBM Code Assistant - Membantu pengembang menulis kode lebih cepat dengan AI\n2. IBM Watson APIs - Menyediakan kemampuan NLP, pengenalan gambar, dan lebih banyak lagi\n3. IBM Cloud Code Engine - Lingkungan serverless untuk menjalankan aplikasi AI\n4. Quantum Developer Tools - Untuk eksperimen dengan algoritma kuantum\n\nIngin saya tunjukkan tutorial atau dokumentasi untuk salah satu alat ini?';
      } else if (text.includes('sales')) {
        botResponse =
          'Anda dapat menghubungi tim sales kami melalui beberapa cara:\n\n1. Telepon: 021-2992-xxxx (jam kerja: 09.00-17.00 WIB)\n2. Email: sales@id.ibm.com\n3. Formulir Kontak: Kunjungi halaman Kontak di website kami\n4. Jadwalkan Pertemuan: Anda dapat menjadwalkan konsultasi virtual dengan tim sales kami\n\nBagaimana Anda ingin menghubungi kami?';
      } else if (text.includes('studi kasus')) {
        botResponse =
          'IBM telah bermitra dengan berbagai perusahaan terkemuka di Indonesia, termasuk:\n\n1. Bank Mandiri - Transformasi digital dan implementasi AI untuk meningkatkan pengalaman nasabah\n2. Pertamina - Modernisasi infrastruktur TI dan implementasi solusi hibrid cloud\n3. Telkom Indonesia - Pengembangan solusi IoT dan smart city\n4. Astra International - Implementasi solusi analytics untuk pengambilan keputusan\n\nIngin saya tunjukkan detail studi kasus tertentu?';
      }

      setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botResponse }]);
    }, 1500);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment({
        name: e.target.files[0].name,
        size: e.target.files[0].size,
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeAttachment = () => {
    setAttachment(null);
    fileInputRef.current.value = '';
  };

  return (
    <div className={`chat-popup-wrapper ${theme} ${isMinimized ? 'minimized' : ''}`}>
      <div className="chat-header">
        <h3>IBM Assistant</h3>
        <div className="chat-actions">
          <button className="minimize-button" onClick={toggleMinimize} title={isMinimized ? 'Expand' : 'Minimize'}>
            {isMinimized ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            )}
          </button>
          <button className="close-button" onClick={onClose} title="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="chat-body">
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.type === 'bot' && (
                <div className="avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              )}
              <div className="bubble">
                {message.text.split('\n').map((text, i) => (
                  <React.Fragment key={i}>
                    {text}
                    {i < message.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
                {message.attachment && (
                  <div className="attachment-info">
                    <small>📎 {message.attachment.name}</small>
                  </div>
                )}
              </div>
              {message.type === 'bot' && (
                <div className="chat-feedback">
                  <button className="feedback-button" title="Thumbs Up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </button>
                  <button className="feedback-button" title="Thumbs Down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="bubble typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-responses">
          {quickResponses.map((response, index) => (
            <button
              key={index}
              className="quick-response-btn"
              onClick={() => sendQuickResponse(response)}
            >
              {response}
            </button>
          ))}
        </div>

        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <button type="button" className="attachment-button" onClick={triggerFileInput} title="Lampirkan file">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Ketik pesan Anda di sini..."
            value={inputValue}
            onChange={handleInputChange}
            className="chat-input"
          />
          <button type="submit" className="send-button" disabled={!inputValue.trim() && !attachment}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

        {attachment && (
          <div className="attachment-preview">
            <span className="attachment-name">📎 {attachment.name}</span>
            <button className="remove-attachment" onClick={removeAttachment}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPopup;
