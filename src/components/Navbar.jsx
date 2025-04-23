// components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import IBMLogo from '../assets/ibm-logo.svg';
import IBMLogoDark from '../assets/ibm-logo-dark.svg';
import { ThemeContext } from '../contexts/ThemeContext';
import HelpDeskPopup from './HelpDeskPopup';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const [showHelpDesk, setShowHelpDesk] = useState(false);
  
  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
    setShowChatPopup(false);
  };

  const toggleChatPopup = () => {
    setShowChatPopup(!showChatPopup);
    setShowUserDropdown(false);
  };

  const toggleHelpDesk = () => {
    setShowHelpDesk(!showHelpDesk);
  };

  const menus = {
    ai: {
      title: 'AI',
      items: [
        { label: 'Ikhtisar', link: '/ai/ikhtisar' },
        { label: 'watsonx', link: '/ai/watsonx' },
        { label: 'Assistant', link: '/ai/assistant' },
        { label: 'Model Granite', link: '/ai/model-granite' },
        { label: 'Konsultasi', link: '/ai/konsultasi' },
        { label: 'Penelitian', link: '/ai/penelitian' },
        { label: 'Etika dan tata kelola', link: '/ai/etika-tata-kelola' },
      ]
    },
    hybridCloud: {
      title: 'Hybrid Cloud',
      items: [
        { label: 'Ikhtisar', link: '/hybrid-cloud/ikhtisar' },
        { label: 'Platform cloud', link: '/hybrid-cloud/platform-cloud' },
        { label: 'Konsultasi', link: '/hybrid-cloud/konsultasi' },
        { label: 'Komputasi quantum', link: '/hybrid-cloud/komputasi-quantum' },
        { label: 'Penelitian', link: '/hybrid-cloud/penelitian' },
      ]
    },
    product: {
      title: 'Produk',
      items: [
        { label: 'Keunggulan', link: '/produk/keunggulan' },
        { label: 'AI & machine learning', link: '/produk/ai-machine-learning' },
        { label: 'Analisis', link: '/produk/analisis' },
        { label: 'Manajemen siklus hidup aset', link: '/produk/manajemen-siklus-hidup-aset' },
        { label: 'Otomatisasi bisnis', link: '/produk/otomatisasi-bisnis' },
        { label: 'Kontainer', link: '/produk/kontainer' },
        { label: 'Basis Data', link: '/produk/basis-data' },
        { label: 'DevOps', link: '/produk/devops' },
        { label: 'Otomatisasi IT', link: '/produk/otomatisasi-it' },
        { label: 'Middleware', link: '/produk/middleware' },
        { label: 'Jaringan', link: '/produk/jaringan' },
        { label: 'Sistem operasi', link: '/produk/sistem-operasi' },
        { label: 'Quantum', link: '/produk/quantum' },
        { label: 'Keamanan & identitas', link: '/produk/keamanan-identitas' },
        { label: 'Server', link: '/produk/server' },
        { label: 'Penyimpanan', link: '/produk/penyimpanan' },
      ],
      featured: [
        { 
          label: 'API Connect', 
          description: 'Perangkat lunak untuk membuat, melindungi, mensosialisasikan, dan mengelola API dengan cepat',
          link: '/produk/api-connect' 
        },
        { 
          label: 'IBM Z', 
          description: 'Mainframe unggula dengan AI pada chip dan kriptografi yang aman dari quantum',
          link: '/produk/ibm-z' 
        },
        { 
          label: 'Planning Analytics', 
          description: 'Perangkat lunak untuk mengotomatiskan perencanaan keuangan dan operasional',
          link: '/produk/planning-analytics' 
        },
      ]
    },
    support: {
      title: 'Dukungan',
      items: [
        { label: 'Apa yang baru', link: '/dukungan/apa-yang-baru' },
        { label: 'Dokumentasi', link: '/dukungan/dokumentasi' },
        { label: 'Dukungan', link: '/dukungan' },
        { label: 'Layanan Siklus Hidup Teknologi', link: '/dukungan/layanan-siklus-hidup' },
        { label: 'Komunitas', link: '/dukungan/komunitas' },
        { label: 'Pengembang', link: '/dukungan/pengembang' },
      ],
      featured: [
        { label: 'Semua dokumentasi produk', link: '/dukungan/dokumentasi/produk' },
        { label: 'Dokumentasi IBM Cloud', link: '/dukungan/dokumentasi/ibm-cloud' },
        { label: 'IBM Redbooks', link: '/dukungan/dokumentasi/redbooks' },
      ]
    }
  };

  return (
    <header className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={theme === 'dark' ? IBMLogoDark : IBMLogo} alt="IBM Logo" />
          </Link>
        </div>
        
        <div className="navbar-center">
          <nav className="navbar-nav">
            {Object.keys(menus).map(key => (
              <div key={key} className="nav-item">
                <button 
                  className={`nav-link ${activeMenu === key ? 'active' : ''}`}
                  onClick={() => toggleMenu(key)}
                >
                  {menus[key].title} 
                  <span className="chevron">
                    {activeMenu === key ? '∧' : '∨'}
                  </span>
                </button>
              </div>
            ))}
            <div className="nav-item">
              <Link to="/konsultasi" className="nav-link">Konsultasi</Link>
            </div>
            <div className="nav-item">
              <Link to="/think" className="nav-link">Think</Link>
            </div>
          </nav>
        </div>
        
        <div className="navbar-right">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Cari semua di IBM" />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button className="clear-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="navbar-icons">
            {/* Tombol Theme Mode */}
            <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
            <button className="icon-button" onClick={toggleChatPopup}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            {/* Tombol HelpDesk */}
            <button className="icon-button" onClick={toggleHelpDesk} aria-label="Help Desk">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </button>
            <div className="account-container">
              <button className="icon-button" onClick={toggleUserDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              {showUserDropdown && (
                <div className="user-dropdown">
                  <Link to="/my-ibm" className="dropdown-item">My IBM</Link>
                  <Link to="/login" className="dropdown-item">Masuk</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {activeMenu && (
        <div className="dropdown-menu">
          <div className={`dropdown-menu-content ${activeMenu}`}>
            <div className="dropdown-links">
              {menus[activeMenu].items.map((item, index) => (
                <Link key={index} to={item.link} className="dropdown-link">
                  {item.label} <span className="arrow">→</span>
                </Link>
              ))}
            </div>
            {menus[activeMenu].featured && (
              <div className="featured-products">
                {menus[activeMenu].featured.map((product, index) => (
                  <div key={index} className="featured-product">
                    <h3>{product.label}</h3>
                    {product.description && <p>{product.description}</p>}
                    <Link to={product.link} className="learn-more">Learn more</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showChatPopup && (
        <ChatPopup onClose={toggleChatPopup} theme={theme} />
      )}

      {/* Menambahkan HelpDesk Popup */}
      <HelpDeskPopup isOpen={showHelpDesk} onClose={toggleHelpDesk} theme={theme} />
    </header>
  );
};

// Komponen ChatPopup (sebagai placeholder jika belum didefinisikan)
const ChatPopup = ({ onClose, theme }) => (
  <div className={`chat-popup ${theme}`}>
    <div className="chat-popup-header">
      <h3>Chat dengan IBM</h3>
      <button className="close-button" onClick={onClose}>×</button>
    </div>
    <div className="chat-popup-content">
      <div className="chat-message-wrapper">
        <div className="chat-icon">🤖</div>
        <p>Hai, ada yang bisa saya bantu?</p>
      </div>
      <div className="chat-options">
        <a href="/dukungan" className="chat-option-link">
          <div className="chat-option">
            <p>Butuh bantuan teknis?</p>
            <span className="external-icon">→</span>
          </div>
        </a>
        <a href="/produk" className="chat-option-link">
          <div className="chat-option">
            <p>Informasi produk</p>
            <span className="external-icon">→</span>
          </div>
        </a>
        <a href="/konsultasi" className="chat-option-link">
          <div className="chat-option">
            <p>Bicara dengan ahli</p>
            <span className="external-icon">→</span>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;