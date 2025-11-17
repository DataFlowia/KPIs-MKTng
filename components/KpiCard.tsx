
import React from 'react';
import { Kpi } from '../types';
import { CATEGORY_COLORS } from '../constants';

interface KpiCardProps {
    kpi: Kpi;
    onSelectKpi: (kpi: Kpi) => void;
    color: keyof typeof CATEGORY_COLORS;
}

const KpiCard: React.FC<KpiCardProps> = ({ kpi, onSelectKpi, color }) => {
    const colors = CATEGORY_COLORS[color];
    return (
        <div 
            onClick={() => onSelectKpi(kpi)}
            className={`
                bg-slate-800/60 rounded-xl p-5 border border-slate-700/50
                hover:border-slate-500 hover:bg-slate-800/90 transform hover:-translate-y-1 
                transition-all duration-300 cursor-pointer shadow-lg
                flex flex-col justify-between
            `}
        >
            <div>
                <div className={`w-3 h-3 rounded-full ${colors.bg} mb-3`}></div>
                <h3 className="font-bold text-lg text-slate-100">{kpi.nombre}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {kpi.descripcion.length > 100 ? `${kpi.descripcion.substring(0, 100)}...` : kpi.descripcion}
                </p>
            </div>
            <div className="text-right mt-4 text-indigo-400 text-xs font-semibold">
                VER DETALLES &rarr;
            </div>
        </div>
    )
}

export default KpiCard;
