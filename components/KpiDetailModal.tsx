
import React from 'react';
import { Kpi } from '../types';
import { CATEGORY_COLORS } from '../constants';
import { CloseIcon, FormulaIcon, ExampleIcon, UtilityIcon } from './icons';

interface KpiDetailModalProps {
  kpi: Kpi;
  onClose: () => void;
  categoryColor: keyof typeof CATEGORY_COLORS;
}

const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value?: string; valueClass?: string }> = ({ icon, label, value, valueClass }) => {
    if (!value) return null;
    return (
        <div className="mt-4">
            <div className="flex items-center text-sm font-semibold text-slate-300 mb-1">
                {icon}
                <span className="ml-2">{label}</span>
            </div>
            <p className={`bg-slate-900/50 p-3 rounded-md text-slate-300 text-sm font-mono ${valueClass}`}>{value}</p>
        </div>
    );
};

const KpiDetailModal: React.FC<KpiDetailModalProps> = ({ kpi, onClose, categoryColor }) => {
  const colors = CATEGORY_COLORS[categoryColor];
  
  return (
    <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" 
        onClick={onClose}
    >
      <div 
        className={`bg-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border-2 ${colors.border} relative animate-fade-in`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-6 sticky top-0 bg-slate-800/80 backdrop-blur-sm z-10 border-b ${colors.border}/50`}>
            <div className="flex justify-between items-start">
                <div>
                    <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${categoryColor === 'Amarillo' ? colors.text : 'text-white'}`}>{categoryColor.toUpperCase()}</div>
                    <h2 className="text-2xl font-bold mt-2 text-white">{kpi.nombre}</h2>
                </div>
                <button onClick={onClose} className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
                    <CloseIcon className="w-6 h-6"/>
                </button>
            </div>
            <p className="text-slate-400 mt-2">{kpi.descripcion}</p>
        </div>
        
        <div className="p-6">
            <DetailItem icon={<FormulaIcon />} label="Fórmula" value={kpi.formula} valueClass="text-cyan-300"/>
            <DetailItem icon={<ExampleIcon />} label="Ejemplo" value={kpi.ejemplo} valueClass="text-amber-300" />
            <DetailItem icon={<UtilityIcon />} label="Utilidad Estratégica" value={kpi.utilidad} valueClass="text-slate-300" />
            
            {kpi.importancia && <DetailItem icon={<UtilityIcon />} label="Importancia" value={kpi.importancia} />}
            {kpi.relacion && <DetailItem icon={<UtilityIcon />} label="Relación" value={kpi.relacion} />}
            {kpi.ratio_ideal && <DetailItem icon={<UtilityIcon />} label="Ratio Ideal" value={kpi.ratio_ideal} valueClass="text-green-400" />}
            {kpi.escala && <DetailItem icon={<UtilityIcon />} label="Escala" value={kpi.escala} />}
            {kpi.rango && <DetailItem icon={<UtilityIcon />} label="Rango" value={kpi.rango} />}
            {kpi.interpretacion && <DetailItem icon={<UtilityIcon />} label="Interpretación" value={kpi.interpretacion} />}
            {kpi.variaciones && <DetailItem icon={<UtilityIcon />} label="Variaciones" value={kpi.variaciones} />}
        </div>
      </div>
    </div>
  );
};

export default KpiDetailModal;
