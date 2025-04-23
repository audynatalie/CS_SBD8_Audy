import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import IBMLogo from '../assets/ibm-logo.svg';
import IBMLogoDark from '../assets/ibm-logo-dark.svg';
import './Footer.css';

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const footerLinks = [
    {
      title: 'Produk',
      links: [
        { label: 'AI & machine learning', url: '/produk/ai-machine-learning' },
        { label: 'Hybrid cloud', url: '/hybrid-cloud' },
        { label: 'Keamanan', url: '/produk/keamanan-identitas' },
        { label: 'Analisis data', url: '/produk/analisis' },
        { label: 'Quantum', url: '/produk/quantum' }
      ]
    },
    {
      title: 'Industri',
      links: [
        { label: 'Perbankan', url: '/industri/perbankan' },
        { label: 'Kesehatan', url: '/industri/kesehatan' },
        { label: 'Retail', url: '/industri/retail' },
        { label: 'Manufaktur', url: '/industri/manufaktur' },
        { label: 'Energi', url: '/industri/energi' }
      ]
    },
    {
      title: 'Dukungan',
      links: [
        { label: 'Hubungi kami', url: '/hubungi-kami' },
        { label: 'Find a Business Partner', url: '/partners' },
        { label: 'Dokumentasi', url: '/dukungan/dokumentasi' },
        { label: 'Komunitas', url: '/dukungan/komunitas' },
        { label: 'Pelatihan', url: '/dukungan/pelatihan' }
      ]
    },
    {
      title: 'Tentang IBM',
      links: [
        { label: 'Perusahaan', url: '/tentang/perusahaan' },
        { label: 'Karir', url: '/karir' },
        { label: 'Berita', url: '/berita' },
        { label: 'Keberlanjutan', url: '/keberlanjutan' },
        { label: 'Penelitian', url: '/penelitian' }
      ]
    }
  ];
  
  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/">
              <img src={theme === 'dark' ? IBMLogoDark : IBMLogo} alt="IBM Logo" />
            </Link>
          </div>
          <div className="theme-toggle">
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {theme === 'dark' ? (
                <>
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
                  <span>Mode Terang</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <span>Mode Gelap</span>
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="footer-links">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-links-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <Link to="/kontak">Kontak</Link>
            <Link to="/privasi">Privasi</Link>
            <Link to="/syarat-penggunaan">Syarat Penggunaan</Link>
            <Link to="/aksesibilitas">Aksesibilitas</Link>
            <Link to="/cookie-preferences">Cookie Preferences</Link>
          </div>
          <div className="footer-copyright">
            <p>© IBM Corp. {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;