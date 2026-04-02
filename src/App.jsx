import { useEffect, useState } from 'react';
import heroImg from './assets/hero.png'; 
import versionText from '../VERSION?raw';

function App() {
  const [version, setVersion] = useState('0.0.0');

  useEffect(() => {
    setVersion(versionText.trim());
  }, []);

  const cardStyle = {
    maxWidth: '400px',
    width: '90%',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    transition: 'transform 0.3s',
  };

  const cardHover = {
    transform: 'scale(1.03)',
  };

  const heroStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #4f46e5',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s',
  };

  const versionStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    padding: '5px 12px',
    borderRadius: '20px',
    backgroundColor: '#e0e7ff',
    color: '#3730a3',
    fontWeight: 'bold',
    fontSize: '12px',
  };

  const linkStyle = {
    margin: '0 8px',
    textDecoration: 'none',
    color: '#4f46e5',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '20px',
  };

  // Responsive adjustments
  const responsiveText = {
    fontSize: '1rem',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <div
        style={cardStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = cardHover.transform}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
      >
        <div style={versionStyle}>v{version}</div>

        <img
          src={heroImg}
          alt="Hero"
          style={heroStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
        />

        <h1 style={{ marginTop: '20px', fontSize: '1.8rem', fontWeight: 'bold', color: '#111827' }}>
          Alfin Akash
        </h1>
        <p style={{ marginTop: '10px', color: '#6b7280', ...responsiveText }}>
          2+ years of experience in Software Engineering: Backend, Cloud, DevOps, Automation
        </p>

        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://www.instagram.com/a.alfinakash" target="_blank" style={linkStyle}>Instagram</a>
          <a href="https://www.twitter.com/AlfinAkash" target="_blank" style={linkStyle}>Twitter</a>
          <a href="https://www.linkedin.com/in/AlfinAkash" target="_blank" style={linkStyle}>LinkedIn</a>
          <a href="https://github.com/AlfinAkash" target="_blank" style={linkStyle}>GitHub</a>
          <a href="https://alfinakash.is-a.dev/" target="_blank" style={linkStyle}>Portfolio</a>
        </div>

        <p style={{ marginTop: '25px', color: '#9ca3af', fontSize: '0.8rem' }}>
          Powered by React + Vite
        </p>
      </div>
    </div>
  );
}

export default App;