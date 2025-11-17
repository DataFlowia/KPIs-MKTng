
import React from 'react';
import { LightBulbIcon } from './icons';

const benchmarks = [
    { title: "Ratio CLV:CAC Ideal", value: "3:1 o superior", description: "Asegura que el valor de un cliente es al menos 3 veces su costo de adquisición." },
    { title: "NPS Excelente", value: "+50 o más", description: "Indica una fuerte lealtad y promoción por parte de los clientes." },
    { title: "Costo de Retención", value: "Hasta 700% más barato", description: "Retener clientes existentes es significativamente más económico que adquirir nuevos." },
];

const StrategicAdvisor: React.FC = () => {
    return (
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <div className="flex items-center mb-4">
                <LightBulbIcon className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white ml-3">Asesoría Estratégica</h3>
            </div>
            <p className="text-slate-400 mb-6 text-sm">Recuerda que los KPIs deben analizarse en conjunto, no de forma aislada. Una métrica por sí sola no cuenta toda la historia. Utiliza estos benchmarks como referencia para tus análisis.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {benchmarks.map((item, index) => (
                    <div key={index} className="bg-slate-900/40 p-4 rounded-lg border border-slate-700">
                        <p className="font-semibold text-indigo-300">{item.title}</p>
                        <p className="text-2xl font-bold text-white my-1">{item.value}</p>
                        <p className="text-xs text-slate-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StrategicAdvisor;
