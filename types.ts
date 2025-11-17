
export interface Kpi {
  nombre: string;
  descripcion: string;
  formula?: string;
  ejemplo?: string;
  utilidad?: string;
  importancia?: string;
  relacion?: string;
  ratio_ideal?: string;
  variaciones?: string;
  escala?: string;
  rango?: string;
  interpretacion?: string;
}

export interface AdditionalKpi {
    nombre: string;
    formula?: string;
    ejemplo?: string;
    utilidad?: string;
    interpretacion?: string;
}

export interface MetricGroup {
    [key: string]: AdditionalKpi[];
}

export interface Category {
  nombre: string;
  color: 'Cyan' | 'Verde' | 'Azul' | 'Morado' | 'Rosa' | 'Naranja' | 'Amarillo' | 'Rojo';
  descripcion: string;
  kpis: Kpi[];
}

export interface KpiData {
  categorias: Category[];
  metricas_adicionales: MetricGroup;
}
