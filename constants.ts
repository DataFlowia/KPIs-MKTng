
import { KpiData } from './types';

export const kpisData: KpiData = {
  "categorias": [
    {
      "nombre": "ÁREA DE IMPACTO (Rentabilidad)",
      "color": "Cyan",
      "descripcion": "Métricas que miden la visibilidad y alcance de las acciones de marketing.",
      "kpis": [
        {
          "nombre": "Retorno de la inversión (ROI)",
          "descripcion": "Mide el beneficio generado directamente por los esfuerzos de marketing.",
          "formula": "ROI = (Ingresos - Inversión) / Inversión × 100",
          "ejemplo": "Si inviertes $10,000 y generas $50,000: ROI = ($50,000 - $10,000) / $10,000 × 100 = 400%",
          "utilidad": "Permite evaluar la rentabilidad de campañas y justificar presupuestos futuros."
        },
        {
          "nombre": "ROI de Marketing (MRO)",
          "descripcion": "Mide cómo las actividades de marketing contribuyen al crecimiento de ventas.",
          "formula": "MRO = (Crecimiento de ventas - Gasto de marketing) / Gasto de marketing × 100",
          "utilidad": "Conecta directamente el marketing con resultados de negocio."
        },
        {
          "nombre": "Coste por adquisición (CPA)",
          "descripcion": "Indica cuánto se gasta para conseguir un cliente que realiza una acción determinada.",
          "formula": "CPA = Gasto total de marketing / Número de conversiones",
          "ejemplo": "Con un gasto de $5,000 y 50 conversiones: CPA = $5,000 / 50 = $100 por cliente",
          "utilidad": "Ayuda a optimizar la asignación de presupuesto entre canales."
        },
        {
          "nombre": "Coste por lead (CPL)",
          "descripcion": "Mide la inversión necesaria para captar un lead o contacto calificado.",
          "formula": "CPL = Gasto total de generación de leads / Número de leads",
          "utilidad": "Fundamental para evaluar eficiencia en campañas de captación."
        }
      ]
    },
    {
      "nombre": "CAPTAR CLIENTES (Conversión)",
      "color": "Verde",
      "descripcion": "KPIs centrados en convertir visitantes y leads en clientes.",
      "kpis": [
        {
          "nombre": "Tasa de conversión",
          "descripcion": "Porcentaje de personas que completan una acción deseada del total de visitantes.",
          "formula": "Tasa de conversión = (Número de conversiones / Total de visitantes) × 100",
          "ejemplo": "1,000 visitantes y 50 compras: (50 / 1,000) × 100 = 5%",
          "utilidad": "Mide la efectividad para convertir tráfico en resultados concretos."
        },
        {
          "nombre": "Leads calificados (MQL)",
          "descripcion": "Contactos que han mostrado interés real y están más cerca de comprar.",
          "utilidad": "Permite priorizar esfuerzos de ventas en prospectos de mayor calidad."
        },
        {
          "nombre": "Coste de adquisición de cliente (CAC)",
          "descripcion": "Inversión total para conseguir un nuevo cliente.",
          "formula": "CAC = (Gastos de marketing + Gastos de ventas) / Número de nuevos clientes",
          "ejemplo": "Gastos de $36,000 y 1,000 nuevos clientes: CAC = $36,000 / 1,000 = $36 por cliente",
          "ratio_ideal": "La relación CLV:CAC ideal es de 3:1 o superior."
        }
      ]
    },
    {
      "nombre": "CREAR EXPECTACIÓN (Engagement)",
      "color": "Azul",
      "descripcion": "Métricas que miden la interacción y compromiso de la audiencia.",
      "kpis": [
        {
          "nombre": "Tasa de retención",
          "descripcion": "Mide la capacidad de la empresa para mantener a sus clientes existentes.",
          "formula": "Tasa de retención = ((Clientes finales - Nuevos clientes) / Clientes iniciales) × 100",
          "ejemplo": "100 clientes iniciales, 20 nuevos, 95 finales: ((95-20)/100) × 100 = 75%",
          "importancia": "Retener clientes cuesta hasta 700% menos que adquirir nuevos."
        },
        {
          "nombre": "Tasa de abandono (Churn Rate)",
          "descripcion": "Porcentaje de clientes que dejan de comprar en un período determinado.",
          "formula": "Churn Rate = (Clientes perdidos / Clientes iniciales) × 100",
          "ejemplo": "200 clientes iniciales y 8 cancelaciones: (8 / 200) × 100 = 4%",
          "relacion": "Churn Rate = 100% - Tasa de retención."
        },
        {
          "nombre": "Tasa de engagement (Redes Sociales)",
          "descripcion": "Mide la interacción de la audiencia con el contenido.",
          "formula": "ER = (Total de interacciones / Total de seguidores) × 100",
          "ejemplo": "100 interacciones (likes, comentarios, shares) y 5,000 seguidores: (100/5,000) × 100 = 2%",
          "variaciones": "Por alcance (ERR), por post, por impresiones."
        }
      ]
    },
    {
      "nombre": "APUNTALAR (Fidelización)",
      "color": "Morado",
      "descripcion": "KPIs relacionados con el valor a largo plazo de los clientes.",
      "kpis": [
        {
          "nombre": "Crecimiento de ventas",
          "descripcion": "Analiza el incremento del volumen de ventas respecto a períodos anteriores.",
          "utilidad": "Indica si las estrategias están impulsando el crecimiento del negocio."
        },
        {
          "nombre": "Valor medio de pedido (AOV)",
          "descripcion": "Determina el promedio de ingresos que genera cada pedido.",
          "formula": "AOV = Ingresos totales / Número de pedidos",
          "ejemplo": "$2,000,000 en ventas con 100,000 pedidos: $2,000,000 / 100,000 = $20",
          "utilidad": "Ayuda a establecer estrategias de upselling y cross-selling."
        },
        {
          "nombre": "Valor del ciclo de vida del cliente (CLV)",
          "descripcion": "Calcula los ingresos totales que un cliente genera durante toda su relación con la empresa.",
          "formula": "CLV = (Valor promedio de compra × Frecuencia de compra) × Vida útil del cliente",
          "ejemplo": "Compra promedio $500, frecuencia 12 veces/año, 5 años de vida: CLV = (500 × 12) × 5 = $30,000",
          "importancia": "Permite determinar cuánto invertir en adquirir y retener clientes."
        },
        {
          "nombre": "Tasa de recompra",
          "descripcion": "Mide cuántos clientes vuelven a comprar después de su primera compra.",
          "utilidad": "Indica la satisfacción del cliente y efectividad de programas de fidelización."
        },
        {
          "nombre": "Net Promoter Score (NPS)",
          "descripcion": "Mide la probabilidad de que los clientes recomienden tu marca a otros.",
          "formula": "NPS = % Promotores - % Detractores",
          "escala": "Escala de 0-10 donde 0-6 son detractores, 7-8 pasivos, 9-10 promotores.",
          "ejemplo": "70% promotores, 10% detractores: NPS = 70 - 10 = 60",
          "rango": "De -100 a +100. Un NPS de +50 o más se considera excelente."
        }
      ]
    },
    {
      "nombre": "COMPROMISO (Customer Experience)",
      "color": "Rosa",
      "descripcion": "Métricas relacionadas con la experiencia y satisfacción del cliente.",
      "kpis": [
        {
          "nombre": "Puntuación de satisfacción del cliente (CSAT)",
          "descripcion": "Evalúa el nivel de satisfacción del cliente con tu producto o servicio.",
          "utilidad": "Proporciona feedback directo sobre la experiencia del cliente."
        },
        {
          "nombre": "Customer Effort Score (CES)",
          "descripcion": "Mide el nivel de esfuerzo que requiere interactuar con tu empresa.",
          "utilidad": "Menor esfuerzo = mayor satisfacción y lealtad."
        },
        {
          "nombre": "Customer Support Response Time",
          "descripcion": "Tiempo medio de respuesta al solicitar soporte o ayuda.",
          "utilidad": "La rapidez en responder impacta directamente en la satisfacción."
        },
        {
          "nombre": "Customer Engagement Score",
          "descripcion": "Evalúa el grado de compromiso de los clientes con tu marca.",
          "utilidad": "Identifica clientes comprometidos vs. en riesgo de abandono."
        },
        {
          "nombre": "Feedback del cliente",
          "descripcion": "Opiniones y valoraciones que los clientes comparten sobre tu marca.",
          "utilidad": "Fuente invaluable de insights para mejora continua."
        }
      ]
    },
    {
      "nombre": "SENSIBILIZACIÓN (Awareness)",
      "color": "Naranja",
      "descripcion": "KPIs que miden el conocimiento de marca y alcance inicial.",
      "kpis": [
        {
          "nombre": "Tasa de adopción del producto",
          "descripcion": "Porcentaje de usuarios que comienzan a usar regularmente un producto.",
          "utilidad": "Fundamental para productos nuevos o features."
        },
        {
          "nombre": "Tasa de devolución del producto",
          "descripcion": "Porcentaje de productos devueltos vs. vendidos.",
          "utilidad": "Indica problemas de calidad, expectativas o satisfacción."
        },
        {
          "nombre": "Satisfacción del producto",
          "descripcion": "Nivel de satisfacción de los clientes con las características del producto.",
          "utilidad": "Guía mejoras y desarrollo de producto."
        },
        {
          "nombre": "Características más utilizadas (Feature Adoption)",
          "descripcion": "Mide cuántos usuarios utilizan características específicas del producto.",
          "utilidad": "Ayuda a priorizar desarrollo y optimizar recursos."
        },
        {
          "nombre": "Porcentaje de recomendación del producto",
          "descripcion": "Porcentaje de usuarios que recomendarían el producto.",
          "relacion": "Similar al NPS pero enfocado específicamente en el producto."
        }
      ]
    },
    {
      "nombre": "MARCA (Brand)",
      "color": "Amarillo",
      "descripcion": "Métricas centradas en la percepción y valor de la marca.",
      "kpis": [
        {
          "nombre": "Atribución de marketing",
          "descripcion": "Analiza qué canales generan más conversiones.",
          "utilidad": "Optimiza la inversión identificando canales más efectivos."
        },
        {
          "nombre": "Ratio de alcance de marketing",
          "descripcion": "Evalúa el alcance de las campañas respecto a la target deseado.",
          "utilidad": "Mide efectividad de segmentación y targeting."
        },
        {
          "nombre": "Porcentaje de procesos automatizados",
          "descripcion": "Porcentaje de procesos de marketing automatizados dentro de la estrategia.",
          "utilidad": "Mayor automatización = mayor eficiencia y escalabilidad."
        },
        {
          "nombre": "Ratio de gastos de marketing",
          "descripcion": "Mide la efectividad del gasto en marketing en relación a los resultados.",
          "utilidad": "Evalúa eficiencia presupuestaria y optimiza asignación."
        },
        {
          "nombre": "Ratio KPI/ROI",
          "descripcion": "Mide la efectividad con la que se están cumpliendo los objetivos clave (KPI) en relación al retorno de inversión (ROI).",
          "utilidad": "Alinea métricas operativas con resultados financieros."
        }
      ]
    },
    {
      "nombre": "VISIBILIDAD (Traffic & Reach)",
      "color": "Rojo",
      "descripcion": "KPIs relacionados con tráfico web y alcance digital.",
      "kpis": [
        {
          "nombre": "Recomendación de marca",
          "descripcion": "Tu marca no es para ti sino para los que perciben de ti.",
          "utilidad": "La recomendación orgánica es el marketing más poderoso."
        },
        {
          "nombre": "Share of Voice (SoV)",
          "descripcion": "Mide el cuido de tu marca comparado con el mercado.",
          "utilidad": "Indica posicionamiento competitivo en el mercado."
        },
        {
          "nombre": "Menciones de marca",
          "descripcion": "Número de veces que se nombra tu marca en relación a otras.",
          "utilidad": "Tracking de awareness y presencia en conversaciones."
        },
        {
          "nombre": "Reputación de marca",
          "descripcion": "Analiza la percepción pública respecto a una marca en redes.",
          "utilidad": "Gestión de imagen y crisis de reputación."
        },
        {
          "nombre": "Crecimiento del conocimiento de marca (Brand Awareness Growth)",
          "descripcion": "Evalúa el crecimiento del reconocimiento de marca.",
          "utilidad": "Mide efectividad de campañas de awareness a largo plazo."
        }
      ]
    }
  ],
  "metricas_adicionales": {
    "Web Analytics": [
      {
        "nombre": "Tasa de rebote (Bounce Rate)",
        "formula": "Bounce Rate = (Sesiones de una página / Total sesiones) × 100",
        "ejemplo": "De 1,000 visitas, 300 ven solo una página: (300/1,000) × 100 = 30%",
        "interpretacion": "Tasa alta (>60%) sugiere problemas de UX o contenido irrelevante."
      },
      {
        "nombre": "Click-Through Rate (CTR)",
        "formula": "CTR = (Total de clics / Total de impresiones) × 100",
        "utilidad": "Mide efectividad de anuncios y elementos clickeables."
      }
    ],
    "Publicidad Digital": [
      {
        "nombre": "Coste por clic (CPC)",
        "formula": "CPC = Gasto total de campaña / Número de clics",
        "ejemplo": "$1,000 gastados, 2,000 clics: $1,000 / 2,000 = $0.50 por clic",
        "utilidad": "Evalúa eficiencia de campañas PPC."
      },
      {
        "nombre": "Coste por mil impresiones (CPM)",
        "formula": "CPM = (Coste total / Impresiones) × 1,000",
        "utilidad": "Modelo de pago en publicidad display."
      }
    ]
  }
};

export const CATEGORY_COLORS: { [key: string]: { bg: string; text: string; border: string; lightBg: string } } = {
  Cyan: { bg: 'bg-cyan', text: 'text-cyan-light', border: 'border-cyan-dark', lightBg: 'bg-cyan-dark/20' },
  Verde: { bg: 'bg-verde', text: 'text-verde-light', border: 'border-verde-dark', lightBg: 'bg-verde-dark/20' },
  Azul: { bg: 'bg-azul', text: 'text-azul-light', border: 'border-azul-dark', lightBg: 'bg-azul-dark/20' },
  Morado: { bg: 'bg-morado', text: 'text-morado-light', border: 'border-morado-dark', lightBg: 'bg-morado-dark/20' },
  Rosa: { bg: 'bg-rosa', text: 'text-rosa-light', border: 'border-rosa-dark', lightBg: 'bg-rosa-dark/20' },
  Naranja: { bg: 'bg-naranja', text: 'text-naranja-light', border: 'border-naranja-dark', lightBg: 'bg-naranja-dark/20' },
  Amarillo: { bg: 'bg-amarillo', text: 'text-amarillo-dark', border: 'border-amarillo-dark', lightBg: 'bg-amarillo-dark/20' },
  Rojo: { bg: 'bg-rojo', text: 'text-rojo-light', border: 'border-rojo-dark', lightBg: 'bg-rojo-dark/20' },
};
