
import React from 'react';
import { Category } from '../types';
import { CATEGORY_COLORS } from '../constants';
import { ChartBarIcon, CalculatorIcon } from './icons';

interface SidebarProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  currentView: 'dashboard' | 'calculator';
  onSelectView: (view: 'dashboard' | 'calculator') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory, currentView, onSelectView }) => {
  return (
    <aside className="w-64 bg-slate-800/50 backdrop-blur-sm p-4 flex flex-col space-y-4 border-r border-slate-700/50">
      <div className="pb-4 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">DATAFLOW IA</h1>
      </div>
      <div className="flex items-center space-x-2 pt-4">
          <div className="p-2 bg-indigo-600 rounded-lg">
              <ChartBarIcon className="w-6 h-6 text-white"/>
          </div>
        <h2 className="text-xl font-bold text-white">Categorías</h2>
      </div>
      <nav className="flex-1 space-y-2">
        {categories.map((cat) => {
          const isActive = currentView === 'dashboard' && cat.nombre === selectedCategory.nombre;
          const colors = CATEGORY_COLORS[cat.color];
          
          return (
            <button
              key={cat.nombre}
              onClick={() => onSelectCategory(cat)}
              className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-3
                ${isActive
                  ? `${colors.bg} text-white shadow-md`
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
            >
                <span className={`w-2 h-2 rounded-full ${colors.bg}`}></span>
                <span>{cat.nombre.split(' (')[0]}</span>
            </button>
          );
        })}
      </nav>
      <div className="pt-4 border-t border-slate-700">
        <button
          onClick={() => onSelectView('calculator')}
          className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-3
            ${currentView === 'calculator'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
            }`}
        >
          <CalculatorIcon className="w-5 h-5" />
          <span>Calculadora de KPIs</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
