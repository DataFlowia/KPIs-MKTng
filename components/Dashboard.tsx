
import React from 'react';
import { Category, Kpi } from '../types';
import { CATEGORY_COLORS } from '../constants';
import KpiCard from './KpiCard';
import StrategicAdvisor from './StrategicAdvisor';

interface DashboardProps {
  category: Category;
  onSelectKpi: (kpi: Kpi) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ category, onSelectKpi }) => {
    const colors = CATEGORY_COLORS[category.color];
  return (
    <div className="space-y-8">
       <div className={`p-4 rounded-xl border-2 ${colors.border} ${colors.lightBg}`}>
        <h2 className={`text-2xl font-bold ${category.color === 'Amarillo' ? 'text-amarillo-dark' : 'text-white'}`}>{category.nombre}</h2>
        <p className="text-slate-300 mt-1">{category.descripcion}</p>
      </div>
      
      <StrategicAdvisor />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.kpis.map((kpi) => (
          <KpiCard key={kpi.nombre} kpi={kpi} onSelectKpi={onSelectKpi} color={category.color} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
