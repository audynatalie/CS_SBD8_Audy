import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import './HomePage.css';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`home-page ${theme}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Teknologi yang membuat masa depan bekerja</h1>
            <p className="hero-subtitle">
              Hybrid cloud & AI adalah kunci transformasi bisnis. Temukan bagaimana solusi IBM dapat membantu bisnis Anda.
            </p>
            <div className="hero-buttons">
              <Link to="/konsultasi" className="btn">Bicara dengan ahli</Link>
              <Link to="/solusi" className="btn btn-secondary">Jelajahi solusi kami</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="container">
          <h2>Temukan Produk Kami</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                  <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                  <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>
              </div>
              <h3>watsonx</h3>
              <p>Platform AI dan data yang membantu bisnis meningkatkan efisiensi.</p>
              <Link to="/ai/watsonx" className="product-link">Pelajari lebih lanjut →</Link>
            </div>

            <div className="product-card">
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>IBM Cloud</h3>
              <p>Infrastruktur dan layanan cloud dengan fitur keamanan terdepan.</p>
              <Link to="/hybrid-cloud/platform-cloud" className="product-link">Pelajari lebih lanjut →</Link>
            </div>

            <div className="product-card">
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Quantum</h3>
              <p>Solusi komputasi quantum untuk memecahkan masalah kompleks.</p>
              <Link to="/produk/quantum" className="product-link">Pelajari lebih lanjut →</Link>
            </div>

            <div className="product-card">
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Keamanan</h3>
              <p>Solusi keamanan siber modern untuk melindungi bisnis Anda.</p>
              <Link to="/produk/keamanan-identitas" className="product-link">Pelajari lebih lanjut →</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="solutions-content">
            <h2>Solusi untuk setiap industri</h2>
            <p>IBM memiliki pengalaman mendalam di berbagai industri, membantu organisasi menghadapi tantangan unik.</p>
            <div className="industry-grid">
              <div className="industry-card">
                <h3>Perbankan & Keuangan</h3>
                <p>Transformasi digital untuk layanan keuangan modern.</p>
                <Link to="/industri/perbankan-keuangan" className="industry-link">Pelajari lebih lanjut →</Link>
              </div>
              
              <div className="industry-card">
                <h3>Kesehatan</h3>
                <p>Solusi teknologi untuk meningkatkan perawatan pasien.</p>
                <Link to="/industri/kesehatan" className="industry-link">Pelajari lebih lanjut →</Link>
              </div>
              
              <div className="industry-card">
                <h3>Manufaktur</h3>
                <p>Inovasi produksi dengan AI dan IoT.</p>
                <Link to="/industri/manufaktur" className="industry-link">Pelajari lebih lanjut →</Link>
              </div>
              
              <div className="industry-card">
                <h3>Energi & Utilitas</h3>
                <p>Teknologi untuk mengoptimalkan operasi energi.</p>
                <Link to="/industri/energi-utilitas" className="industry-link">Pelajari lebih lanjut →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="container">
          <h2>Studi Kasus</h2>
          <div className="case-studies-grid">
            <div className="case-study-card">
              <div className="case-study-image">
                <div className="placeholder-image"></div>
              </div>
              <div className="case-study-content">
                <h3>Bank Mandiri</h3>
                <p>Meningkatkan pengalaman nasabah dengan AI dan analitik data.</p>
                <Link to="/studi-kasus/bank-mandiri" className="case-study-link">Baca selengkapnya →</Link>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-image">
                <div className="placeholder-image"></div>
              </div>
              <div className="case-study-content">
                <h3>Pertamina</h3>
                <p>Transformasi digital untuk efisiensi operasional yang lebih tinggi.</p>
                <Link to="/studi-kasus/pertamina" className="case-study-link">Baca selengkapnya →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Siap memulai transformasi digital?</h2>
            <p>Tim ahli kami siap membantu bisnis Anda mencapai potensi penuh.</p>
            <div className="cta-buttons">
              <Link to="/konsultasi" className="btn">Bicara dengan ahli</Link>
              <Link to="/produk" className="btn btn-secondary">Jelajahi produk</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;