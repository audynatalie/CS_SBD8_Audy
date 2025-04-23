import React, { useState } from 'react';
import './HelpDeskPopup.css';

const HelpDeskPopup = ({ isOpen, onClose, theme }) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim pesan
    // ke sistem helpdesk atau API backend
    console.log('Form submitted:', { name, email, subject, message });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className={`helpdesk-popup ${theme}`}>
      <div className="helpdesk-popup-content">
        <div className="helpdesk-popup-header">
          <h3>Pusat Bantuan IBM</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="helpdesk-popup-body">
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h4>Terima kasih!</h4>
              <p>Pesan Anda telah dikirim. Tim kami akan segera menghubungi Anda.</p>
            </div>
          ) : (
            <>
              <div className="helpdesk-intro">
                <div className="helpdesk-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <p>Ada pertanyaan atau membutuhkan bantuan? Isi formulir di bawah dan tim kami akan segera membantu Anda.</p>
              </div>
              <form onSubmit={handleSubmit} className="helpdesk-form">
                <div className="form-group">
                  <label htmlFor="name">Nama</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subjek</label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="">Pilih subjek</option>
                    <option value="product">Pertanyaan Produk</option>
                    <option value="technical">Bantuan Teknis</option>
                    <option value="sales">Informasi Penjualan</option>
                    <option value="general">Pertanyaan Umum</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={onClose}>Batal</button>
                  <button type="submit" className="btn-primary">Kirim</button>
                </div>
              </form>
              <div className="helpdesk-links">
                <h4>Solusi cepat:</h4>
                <ul>
                  <li><a href="/dukungan/faq">FAQ</a></li>
                  <li><a href="/dukungan/dokumentasi">Dokumentasi Produk</a></li>
                  <li><a href="/dukungan/tutorial">Tutorial</a></li>
                  <li><a href="/dukungan/komunitas">Komunitas IBM</a></li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpDeskPopup;