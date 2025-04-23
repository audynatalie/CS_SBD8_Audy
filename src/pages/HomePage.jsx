import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import './HomePage.css';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const solutionsRef = useRef(null);
  const recommendationsRef = useRef(null);
  const insightsRef = useRef(null);

  // Animation observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections with animation
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Clean up
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Particle background effect for hero section
  useEffect(() => {
    if (!heroRef.current) return;
    
    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    heroRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = heroRef.current.offsetWidth;
    canvas.height = heroRef.current.offsetHeight;
    
    // Particle properties
    const particlesArray = [];
    const numberOfParticles = 100;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const animate = () => {
      if (!heroRef.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    };
    
    init();
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!heroRef.current) return;
      canvas.width = heroRef.current.offsetWidth;
      canvas.height = heroRef.current.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (heroRef.current && canvas) {
        heroRef.current.removeChild(canvas);
      }
    };
  }, [heroRef]);

  return (
    <div className={`home-page ${theme}`}>
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content animate-on-scroll fade-in-up">
            <h1 className="animated-title">Teknologi yang membuat masa depan bekerja</h1>
            <p className="hero-subtitle">
              Hybrid cloud & AI adalah kunci transformasi bisnis. Temukan bagaimana solusi IBM dapat membantu bisnis Anda.
            </p>
            <div className="hero-buttons">
              <Link to="/konsultasi" className="btn btn-primary pulse">Bicara dengan ahli</Link>
              <Link to="/solusi" className="btn btn-secondary">Jelajahi solusi kami</Link>
            </div>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* Recommended For You Section */}
      <section className="recommendations-section" ref={recommendationsRef}>
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Direkomendasikan untuk Anda</h2>
          <div className="recommendations-grid">
            {/* Recommendation Card 1 */}
            <div className="recommendation-card animate-on-scroll fade-in-up" style={{animationDelay: '0ms'}}>
              <div className="recommendation-animation">
                <div className="mainframe-animation">
                  <div className="server-rack">
                    <div className="server-unit"></div>
                    <div className="server-unit"></div>
                    <div className="server-unit"></div>
                    <div className="server-lights">
                      <div className="light blink"></div>
                      <div className="light blink"></div>
                      <div className="light blink"></div>
                    </div>
                  </div>
                  <div className="connection-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="pulse-dot"></div>
                  </div>
                </div>
              </div>
              <div className="recommendation-content">
                <div className="recommendation-category">Wawasan</div>
                <h3>Lihat apa yang selanjutnya untuk mainframe dan AI</h3>
                <p>Temukan bagaimana integrasi AI dengan sistem mainframe dapat meningkatkan kemampuan bisnis Anda.</p>
                <Link to="/wawasan/mainframe-ai" className="recommendation-link hover-effect">Pelajari selengkapnya →</Link>
              </div>
            </div>

            {/* Recommendation Card 2 */}
            <div className="recommendation-card animate-on-scroll fade-in-up" style={{animationDelay: '150ms'}}>
              <div className="recommendation-animation">
                <div className="modernization-animation">
                  <div className="legacy-system"></div>
                  <div className="arrows">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                  </div>
                  <div className="modern-system">
                    <div className="system-elements">
                      <div className="element"></div>
                      <div className="element"></div>
                      <div className="element"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommendation-content">
                <div className="recommendation-category">Studi kasus</div>
                <h3>Pelajari bagaimana NOSI melakukan modernisasi tanpa gangguan</h3>
                <p>Modernisasi sistem IT dengan zero downtime untuk memastikan layanan berkelanjutan.</p>
                <Link to="/studi-kasus/nosi" className="recommendation-link hover-effect">Pelajari selengkapnya →</Link>
              </div>
            </div>

            {/* Recommendation Card 3 */}
            <div className="recommendation-card animate-on-scroll fade-in-up" style={{animationDelay: '300ms'}}>
              <div className="recommendation-animation">
                <div className="watson-animation">
                  <div className="watson-icon">
                    <div className="watson-circle"></div>
                    <div className="watson-pulse"></div>
                  </div>
                  <div className="automation-flow">
                    <div className="flow-item"></div>
                    <div className="flow-connector"></div>
                    <div className="flow-item"></div>
                    <div className="flow-connector"></div>
                    <div className="flow-item"></div>
                  </div>
                </div>
              </div>
              <div className="recommendation-content">
                <div className="recommendation-category">Watson Orchestrate</div>
                <h3>Perangkat lunak sistem pribadi yang mengotomatiskan tugas berulang</h3>
                <p>Tingkatkan produktivitas dengan otomatisasi berbasis AI untuk pekerjaan rutin.</p>
                <Link to="/produk/watson-orchestrate" className="recommendation-link hover-effect">Pelajari selengkapnya →</Link>
              </div>
            </div>

            {/* Recommendation Card 4 */}
            <div className="recommendation-card animate-on-scroll fade-in-up" style={{animationDelay: '450ms'}}>
              <div className="recommendation-animation">
                <div className="instana-animation">
                  <div className="dashboard">
                    <div className="dashboard-header"></div>
                    <div className="dashboard-grid">
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                    </div>
                  </div>
                  <div className="data-pulse">
                    <div className="pulse"></div>
                    <div className="connection"></div>
                  </div>
                </div>
              </div>
              <div className="recommendation-content">
                <div className="recommendation-category">Instana</div>
                <h3>Perangkat lunak untuk pemantauan dan otomatisasi kinerja aplikasi</h3>
                <p>Pantau dan visualisasikan kinerja aplikasi secara real-time untuk deteksi masalah lebih cepat.</p>
                <Link to="/produk/instana" className="recommendation-link hover-effect">Pelajari selengkapnya →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section" ref={productsRef}>
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Temukan Produk Kami</h2>
          <div className="products-grid">
            {/* Product Card 1 */}
            <div className="product-card animate-on-scroll slide-in-left" style={{animationDelay: '0ms'}}>
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-pulse">
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
              <Link to="/ai/watsonx" className="product-link hover-effect">Pelajari lebih lanjut →</Link>
            </div>

            {/* Product Card 2 */}
            <div className="product-card animate-on-scroll slide-in-left" style={{animationDelay: '150ms'}}>
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-pulse">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>IBM Cloud</h3>
              <p>Infrastruktur dan layanan cloud dengan fitur keamanan terdepan.</p>
              <Link to="/hybrid-cloud/platform-cloud" className="product-link hover-effect">Pelajari lebih lanjut →</Link>
            </div>

            {/* Product Card 3 */}
            <div className="product-card animate-on-scroll slide-in-left" style={{animationDelay: '300ms'}}>
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-pulse">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Quantum</h3>
              <p>Solusi komputasi quantum untuk memecahkan masalah kompleks.</p>
              <Link to="/produk/quantum" className="product-link hover-effect">Pelajari lebih lanjut →</Link>
            </div>

            {/* Product Card 4 */}
            <div className="product-card animate-on-scroll slide-in-left" style={{animationDelay: '450ms'}}>
              <div className="product-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-pulse">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Keamanan</h3>
              <p>Solusi keamanan siber modern untuk melindungi bisnis Anda.</p>
              <Link to="/produk/keamanan-identitas" className="product-link hover-effect">Pelajari lebih lanjut →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section" ref={solutionsRef}>
        <div className="container">
          <div className="solutions-content">
            <h2 className="section-title animate-on-scroll fade-in-up">Solusi untuk setiap industri</h2>
            <p className="animate-on-scroll fade-in-up">IBM memiliki pengalaman mendalam di berbagai industri, membantu organisasi menghadapi tantangan unik.</p>
            <div className="industry-grid">
              <div className="industry-card animate-on-scroll zoom-in" style={{animationDelay: '0ms'}}>
                <div className="industry-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <h3>Perbankan & Keuangan</h3>
                <p>Transformasi digital untuk layanan keuangan modern.</p>
                <Link to="/industri/perbankan-keuangan" className="industry-link hover-effect">Pelajari lebih lanjut →</Link>
              </div>

              <div className="industry-card animate-on-scroll zoom-in" style={{animationDelay: '150ms'}}>
                <div className="industry-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3>Kesehatan</h3>
                <p>Solusi teknologi untuk meningkatkan perawatan pasien.</p>
                <Link to="/industri/kesehatan" className="industry-link hover-effect">Pelajari lebih lanjut →</Link>
              </div>

              <div className="industry-card animate-on-scroll zoom-in" style={{animationDelay: '300ms'}}>
                <div className="industry-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
                    <line x1="4" y1="3" x2="20" y2="3"></line>
                    <line x1="12" y1="15" x2="12" y2="22"></line>
                    <line x1="9" y1="22" x2="15" y2="22"></line>
                  </svg>
                </div>
                <h3>Manufaktur</h3>
                <p>Inovasi produksi dengan AI dan IoT.</p>
                <Link to="/industri/manufaktur" className="industry-link hover-effect">Pelajari lebih lanjut →</Link>
              </div>

              <div className="industry-card animate-on-scroll zoom-in" style={{animationDelay: '450ms'}}>
                <div className="industry-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h3>Energi & Utilitas</h3>
                <p>Teknologi untuk mengoptimalkan operasi energi.</p>
                <Link to="/industri/energi-utilitas" className="industry-link hover-effect">Pelajari lebih lanjut →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Effect */}
      <section className="cta-section cta-3d">
        <div className="container">
          <div className="cta-content animate-on-scroll fade-in-up">
            <h2>Siap memulai transformasi digital?</h2>
            <p>Tim ahli kami siap membantu bisnis Anda mencapai potensi penuh.</p>
            <div className="cta-buttons">
              <Link to="/konsultasi" className="btn btn-primary pulse">Bicara dengan ahli</Link>
              <Link to="/produk" className="btn btn-secondary">Jelajahi produk</Link>
            </div>
          </div>
        </div>
        <div className="cta-bg-pattern"></div>
      </section>

      {/* Wawasan dan Alat AI Section */}
      <section className="insights-ai-section" ref={insightsRef}>
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Wawasan dan alat AI</h2>
          <div className="insights-grid">
            <div className="insights-column animate-on-scroll slide-in-left">
              <div className="insights-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>Untuk pengembang</h3>
              <p>Model IBM Granite yang disesuaikan dengan kebutuhan dapat mengurangi biaya AI lebih dari 90% dengan kinerja yang tetap kompetitif.</p>
              <div className="insights-links">
                <Link to="/ai/granite" className="insight-link hover-effect">Mulai bangun dengan model IBM Granite <span>→</span></Link>
                <Link to="/ai/kelas" className="insight-link hover-effect">Jelajahi kelas AI, API, dataset, dan lainnya <span>→</span></Link>
                <Link to="/ai/watsonx-code" className="insight-link hover-effect">Percepat pengembangan perangkat lunak dengan watsonx Code Assistant <span>→</span></Link>
                <Link to="/ai/toolkit" className="insight-link hover-effect">Lihat Toolkit Developer watsonx.ai <span>→</span></Link>
              </div>
            </div>
            <div className="insights-column animate-on-scroll slide-in-right">
              <div className="insights-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3>Untuk pemimpin bisnis</h3>
              <p>Transformasikan bisnis Anda dan dorong pertumbuhan dengan alat AI, teknologi, dan wawasan yang mendukung daya saing Anda—serta merencanakan masa depan organisasi dengan cara yang bertanggung jawab.</p>
              <div className="insights-links">
                <Link to="/ai/panduan-ceo" className="insight-link hover-effect">Baca panduan CEO tentang AI generative <span>→</span></Link>
                <Link to="/ai/laporan" className="insight-link hover-effect">Dapatkan laporan AI in Action <span>→</span></Link>
                <Link to="/ai/etika" className="insight-link hover-effect">Pelajari pendekatan etika AI dari IBM <span>→</span></Link>
                <Link to="/ai/buletin" className="insight-link hover-effect">Langganan buletin Think <span>→</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="insights-shape"></div>
      </section>

      {/* Teknologi & Konsultasi Section */}
      <section className="technology-consulting-section">
        <div className="container">
          <div className="technology-consulting-content animate-on-scroll fade-in-up">
            <div className="tech-consulting-header">
              <h2>Teknologi & Konsultasi</h2>
            </div>
            <div className="tech-consulting-text">
              <p>
                Dari <Link to="/ai/generasi-berikutnya" className="inline-link highlight-effect">AI generasi berikutnya</Link> hingga <Link to="/cloud/hybrid" className="inline-link highlight-effect">solusi hybrid cloud</Link> yang canggih hingga keahlian mendalam <Link to="/konsultasi" className="inline-link highlight-effect">IBM Consulting</Link>, IBM memiliki apa yang diperlukan untuk membantu Anda menemukan kembali cara kerja bisnis Anda pada era AI.
              </p>
            </div>
          </div>
        </div>
        <div className="tech-consulting-pattern"></div>
      </section>

      {/* Inside IBM Section */}
      <section className="inside-ibm-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-in-up">Di dalam IBM</h2>
          <div className="inside-ibm-grid">
            <div className="inside-ibm-column animate-on-scroll slide-in-up" style={{animationDelay: '0ms'}}>
              <div className="ibm-card">
                <div className="ibm-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3>Perusahaan kami</h3>
                <p>Jelajahi sejarah dan budaya IBM dalam menerapkan teknologi di dunia nyata</p>
                <div className="inside-ibm-links">
                  <Link to="/tentang" className="inside-ibm-link hover-effect">Tentang IBM <span>→</span></Link>
                  <Link to="/sejarah" className="inside-ibm-link hover-effect">Sejarah kami <span>→</span></Link>
                </div>
              </div>
            </div>
            <div className="inside-ibm-column animate-on-scroll slide-in-up" style={{animationDelay: '150ms'}}>
              <div className="ibm-card">
                <div className="ibm-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3>Inovasi kami</h3>
                <p>Kunjungi lab IBM dan lihat hal yang tersedia untuk masa depan komputasi</p>
                <div className="inside-ibm-links">
                  <Link to="/research" className="inside-ibm-link hover-effect">IBM Research <span className="external-icon">↗</span></Link>
                  <Link to="/quantum" className="inside-ibm-link hover-effect">Komputasi quantum <span>→</span></Link>
                </div>
              </div>
            </div>
            <div className="inside-ibm-column animate-on-scroll slide-in-up" style={{animationDelay: '300ms'}}>
              <div className="ibm-card">
                <div className="ibm-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3>Karyawan kami</h3>
                <p>Lihat apa yang dibutuhkan untuk menjadi IBMer, atau bangun keterampilan Anda dengan kursus pendidikan kami.</p>
                <div className="inside-ibm-links">
                  <Link to="/karir" className="inside-ibm-link hover-effect">Menjadi IBMer <span>→</span></Link>
                  <Link to="/belajar" className="inside-ibm-link hover-effect">Mulai belajar <span className="external-icon">↗</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;