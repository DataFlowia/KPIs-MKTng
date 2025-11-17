import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 mt-8 border-t border-slate-700/50">
      <div className="text-slate-500 text-sm space-y-2">
        <p>
          <a href="http://www.dataflowia.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">www.dataflowia.com</a>
          <span className="mx-2">|</span>
          <a href="mailto:contacto@dataflowia.com" className="hover:text-slate-300 transition-colors">contacto@dataflowia.com</a>
        </p>
        <p>&copy;2025 todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
