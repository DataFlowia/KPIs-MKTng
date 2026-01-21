import React, { useState, useEffect } from 'react';
import MobileNavigation from './MobileNavigation';
import './MobileOptimization.css';

const ResponsiveLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('dashboard');

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Detectar orientación del dispositivo
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  // Prevenir zoom en inputs en iOS
  useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.fontSize = '16px';
      });
    });
  }, []);

  return (
    <div className={`app-container ${isMobile ? 'mobile-view' : ''}`}>
      {/* Navegación Móvil */}
      {isMobile && (
        <MobileNavigation 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory}
        />
      )}

      {/* Navegación Desktop (existente) */}
      {!isMobile && (
        <nav className="desktop-navigation">
          {/* Tu navegación desktop existente */}
        </nav>
      )}

      {/* Contenido Principal */}
      <main className="main-content no-horizontal-scroll">
        {children}
      </main>

      {/* Notificación de Rotación en Móvil */}
      {isMobile && (
        <div className="rotation-notification">
          📱 Para mejor experiencia, usa el modo vertical
        </div>
      )}
    </div>
  );
};

export default ResponsiveLayout;
