import React, { useState, useMemo } from 'react';

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
        <input
            {...props}
            type="number"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="0"
        />
    </div>
);

const ResultCard: React.FC<{ title: string; value: string; unit?: string; colorClass?: string }> = ({ title, value, unit, colorClass = 'text-white' }) => (
    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
        <h4 className="text-sm text-slate-400 font-medium">{title}</h4>
        <p className={`text-2xl font-bold ${colorClass}`}>{value}<span className="text-lg ml-1 text-slate-400">{unit}</span></p>
    </div>
);

const RatioAlert: React.FC<{ ratio: number | null }> = ({ ratio }) => {
    if (ratio === null || isNaN(ratio)) {
        return (
            <div className="mt-6 p-4 rounded-lg border-2 border-slate-700 bg-slate-800/50">
                <div className="flex items-start">
                     <div className="flex flex-col space-y-2 mr-4 mt-1">
                        <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-slate-300">Relación CLV:CAC</p>
                        <p className="text-sm text-slate-400 mt-2">Ingresa los datos de CAC y CLV para calcular la relación y ver el estado de salud de tu estrategia de adquisición.</p>
                    </div>
                </div>
            </div>
        );
    }

    const state = ratio < 3 ? (ratio < 1 ? 'danger' : 'warning') : 'ideal';
    
    const config = {
        danger: {
            color: 'red',
            message: "Crítico! Estás perdiendo dinero con cada cliente. Revisa tus costos de adquisición y estrategias de precios urgentemente.",
        },
        warning: {
            color: 'yellow',
            message: "Alerta! La relación es inferior al ideal de 3:1. El negocio es sostenible, pero hay poco margen para crecer. Optimiza costos o aumenta el CLV.",
        },
        ideal: {
            color: 'green',
            message: "Excelente! La relación es saludable, indicando un modelo de negocio rentable y con potencial de crecimiento.",
        }
    };

    const { color, message } = config[state];
    
    return (
        <div className={`mt-6 p-4 rounded-lg border-2 border-${color}-500/50 bg-${color}-500/10 transition-all duration-300`}>
             <div className="flex items-start">
                {/* Traffic Light */}
                <div className="flex flex-col space-y-2 mr-4 mt-1">
                    <div className={`w-4 h-4 rounded-full transition-colors ${state === 'danger' ? 'bg-red-500 shadow-[0_0_8px_theme(colors.red.500)]' : 'bg-red-500/20'}`}></div>
                    <div className={`w-4 h-4 rounded-full transition-colors ${state === 'warning' ? 'bg-yellow-500 shadow-[0_0_8px_theme(colors.yellow.500)]' : 'bg-yellow-500/20'}`}></div>
                    <div className={`w-4 h-4 rounded-full transition-colors ${state === 'ideal' ? 'bg-green-500 shadow-[0_0_8px_theme(colors.green.500)]' : 'bg-green-500/20'}`}></div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <p className={`font-bold text-${color}-400`}>Relación CLV:CAC</p>
                        <p className={`text-2xl font-bold text-${color}-300`}>{ratio.toFixed(2)} : 1</p>
                    </div>
                    <p className={`text-sm text-${color}-200 mt-2`}>{message}</p>
                </div>
            </div>
        </div>
    );
};


const CalculatorModule: React.FC = () => {
    const [inputs, setInputs] = useState({
        ingresos: '', inversion: '', crecimientoVentas: '', gastoMarketing: '',
        gastoVentas: '', nuevosClientes: '', valorPromedioCompra: '', frecuenciaCompra: '',
        vidaUtilCliente: '', clientesIniciales: '', clientesFinales: '',
        promotores: '', detractores: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const parsed = useMemo(() => {
        const p: { [key: string]: number } = {};
        for (const key in inputs) {
            p[key] = parseFloat((inputs as any)[key]) || 0;
        }
        return p;
    }, [inputs]);

    const results = useMemo(() => {
        const {
            ingresos, inversion, crecimientoVentas, gastoMarketing, gastoVentas, nuevosClientes,
            valorPromedioCompra, frecuenciaCompra, vidaUtilCliente, clientesIniciales, clientesFinales,
            promotores, detractores
        } = parsed;

        const roi = inversion > 0 ? ((ingresos - inversion) / inversion) * 100 : 0;
        const mro = gastoMarketing > 0 ? ((crecimientoVentas - gastoMarketing) / gastoMarketing) * 100 : 0;
        const cac = nuevosClientes > 0 ? (gastoMarketing + gastoVentas) / nuevosClientes : 0;
        const clv = valorPromedioCompra * frecuenciaCompra * vidaUtilCliente;
        const clvCacRatio = cac > 0 ? clv / cac : null;
        const tasaRetencion = clientesIniciales > 0 ? ((clientesFinales - nuevosClientes) / clientesIniciales) * 100 : 0;
        const nps = promotores - detractores;
        
        return { roi, mro, cac, clv, clvCacRatio, tasaRetencion, nps };
    }, [parsed]);


    return (
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-1">Calculadora de KPIs</h2>
            <p className="text-slate-400 mb-6">Ingresa tus datos brutos para calcular automáticamente los indicadores clave.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-indigo-300 border-b border-indigo-300/20 pb-2">Datos Financieros</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="Ingresos ($)" name="ingresos" value={inputs.ingresos} onChange={handleInputChange} />
                        <InputField label="Inversión ($)" name="inversion" value={inputs.inversion} onChange={handleInputChange} />
                        <InputField label="Crecimiento de Ventas ($)" name="crecimientoVentas" value={inputs.crecimientoVentas} onChange={handleInputChange} />
                        <InputField label="Gasto de Marketing ($)" name="gastoMarketing" value={inputs.gastoMarketing} onChange={handleInputChange} />
                        <InputField label="Gasto de Ventas ($)" name="gastoVentas" value={inputs.gastoVentas} onChange={handleInputChange} />
                    </div>
                    <h3 className="font-semibold text-lg text-indigo-300 border-b border-indigo-300/20 pb-2 pt-4">Datos de Clientes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="Clientes Iniciales" name="clientesIniciales" value={inputs.clientesIniciales} onChange={handleInputChange} />
                        <InputField label="Nuevos Clientes" name="nuevosClientes" value={inputs.nuevosClientes} onChange={handleInputChange} />
                        <InputField label="Clientes Finales" name="clientesFinales" value={inputs.clientesFinales} onChange={handleInputChange} />
                    </div>
                     <h3 className="font-semibold text-lg text-indigo-300 border-b border-indigo-300/20 pb-2 pt-4">Datos de Valor de Cliente</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <InputField label="Valor Promedio Compra ($)" name="valorPromedioCompra" value={inputs.valorPromedioCompra} onChange={handleInputChange} />
                        <InputField label="Frecuencia Compra (anual)" name="frecuenciaCompra" value={inputs.frecuenciaCompra} onChange={handleInputChange} />
                        <InputField label="Vida Útil Cliente (años)" name="vidaUtilCliente" value={inputs.vidaUtilCliente} onChange={handleInputChange} />
                    </div>
                    <h3 className="font-semibold text-lg text-indigo-300 border-b border-indigo-300/20 pb-2 pt-4">Datos de Satisfacción</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="% Promotores (NPS)" name="promotores" value={inputs.promotores} onChange={handleInputChange} />
                        <InputField label="% Detractores (NPS)" name="detractores" value={inputs.detractores} onChange={handleInputChange} />
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-white">Resultados Calculados</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ResultCard title="ROI" value={results.roi.toFixed(2)} unit="%" colorClass={results.roi >= 0 ? 'text-green-400' : 'text-red-400'}/>
                        <ResultCard title="MRO" value={results.mro.toFixed(2)} unit="%" colorClass={results.mro >= 0 ? 'text-green-400' : 'text-red-400'}/>
                        <ResultCard title="CAC" value={results.cac.toFixed(2)} unit="$" colorClass="text-amber-400"/>
                        <ResultCard title="CLV" value={results.clv.toFixed(2)} unit="$" colorClass="text-cyan-400"/>
                        <ResultCard title="Tasa de Retención" value={results.tasaRetencion.toFixed(2)} unit="%" />
                        <ResultCard title="NPS" value={results.nps.toFixed(0)} colorClass={results.nps >= 50 ? 'text-green-400' : results.nps > 0 ? 'text-yellow-400' : 'text-red-400'}/>
                    </div>
                    <RatioAlert ratio={results.clvCacRatio} />
                </div>
            </div>
        </div>
    );
};

export default CalculatorModule;