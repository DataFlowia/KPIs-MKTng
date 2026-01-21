
import React, { useState } from 'react';
import { kpisData } from './constants';
import { Category, Kpi } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import KpiDetailModal from './components/KpiDetailModal';
import CalculatorModule from './components/CalculatorModule';
import Footer from './components/Footer';
import ResponsiveLayout from './components/mobile-optimization/ResponsiveLayout';
import KpiCard3D from './components/mobile-optimization/KpiCard3D';
import './components/mobile-optimization/MobileOptimization.css';

type View = 'dashboard' | 'calculator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<Category>(kpisData.categorias[0]);
  const [selectedKpi, setSelectedKpi] = useState<Kpi | null>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView('dashboard');
  };
  
  const handleSelectView = (view: View) => {
      setCurrentView(view);
  }

  return (
        <ResponsiveLayout>
    <div className="flex h-screen bg-slate-900 font-sans">
      <Sidebar
        categories={kpisData.categorias}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        currentView={currentView}
        onSelectView={handleSelectView}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">KPIs: Estratega Digital</h1>
        <p className="text-slate-400 mb-8">Transformando datos en insights accionables para el crecimiento del negocio.</p>
        
        {currentView === 'dashboard' ? (
          <Dashboard
            category={selectedCategory}
            onSelectKpi={setSelectedKpi}
          />
        ) : (
          <CalculatorModule />
        )}

        <Footer />
      </main>

      {selectedKpi && (
        <KpiDetailModal
          kpi={selectedKpi}
          onClose={() => setSelectedKpi(null)}
          categoryColor={selectedCategory.color}
        />
      )}
    </div>
                </ResponsiveLayout>
  );
};

export default App;
