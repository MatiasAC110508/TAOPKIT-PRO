import { Search } from "lucide-react";
import type { ReactNode } from "react";
import type { SwotCell, SwotData } from "../../../types";

interface SwotDesktopTableProps {
  swotData: SwotData;
  onOpenModal: (title: string, items: SwotCell[], gradient: string, icon: ReactNode) => void;
}

export function SwotDesktopTable({ swotData, onOpenModal }: SwotDesktopTableProps) {
  return (
    <div className="grid grid-cols-[150px_1fr_1fr] gap-4 min-w-[800px]">
      {/* Header Row */}
      <div className="bg-transparent" />
      <div className="bg-gradient-to-br from-teal-500/20 to-teal-900/40 border border-teal-500/30 rounded-2xl p-6 flex items-center justify-center">
        <h3 className="text-xl font-bold text-teal-400">Fortalezas (F)</h3>
      </div>
      <div className="bg-gradient-to-br from-rose-500/20 to-rose-900/40 border border-rose-500/30 rounded-2xl p-6 flex items-center justify-center">
        <h3 className="text-xl font-bold text-rose-400">Debilidades (D)</h3>
      </div>

      {/* Row 1: Oportunidades */}
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-900/40 border border-amber-500/30 rounded-2xl p-6 flex items-center justify-center text-center">
        <h3 className="text-xl font-bold text-amber-400">Oportunidades (O)</h3>
      </div>
      
      {/* FO Strategies */}
      <div className="glass-card-strong mobile-safe-card rounded-2xl p-6 border border-teal-500/20 hover:border-teal-400/50 transition-all group relative overflow-hidden">
        <div className="mobile-hide-heavy absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all" />
        <h4 className="font-bold text-white mb-4 relative z-10">Estrategias FO (Maxi-Maxi)</h4>
        <p className="text-teal-100/70 text-sm mb-6 relative z-10">
          Uso de las fortalezas internas para aprovechar al máximo las oportunidades externas.
        </p>
        <button
          onClick={() => onOpenModal("Estrategias FO", swotData.so, "from-teal-600 to-teal-800", <Search />)}
          className="w-full py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 font-semibold text-sm transition-colors flex items-center justify-center gap-2 relative z-10"
        >
          <Search className="w-4 h-4" /> Ver {swotData.so.length} Estrategias
        </button>
      </div>

      {/* DO Strategies */}
      <div className="glass-card-strong mobile-safe-card rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all group relative overflow-hidden">
        <div className="mobile-hide-heavy absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
        <h4 className="font-bold text-white mb-4 relative z-10">Estrategias DO (Mini-Maxi)</h4>
        <p className="text-teal-100/70 text-sm mb-6 relative z-10">
          Mejora de las debilidades internas aprovechando las oportunidades del entorno.
        </p>
        <button
          onClick={() => onOpenModal("Estrategias DO", swotData.wo, "from-amber-600 to-amber-800", <Search />)}
          className="w-full py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold text-sm transition-colors flex items-center justify-center gap-2 relative z-10"
        >
          <Search className="w-4 h-4" /> Ver {swotData.wo.length} Estrategias
        </button>
      </div>

      {/* Row 2: Amenazas */}
      <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-900/40 border border-indigo-500/30 rounded-2xl p-6 flex items-center justify-center text-center">
        <h3 className="text-xl font-bold text-indigo-400">Amenazas (A)</h3>
      </div>

      {/* FA Strategies */}
      <div className="glass-card-strong mobile-safe-card rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-400/50 transition-all group relative overflow-hidden">
        <div className="mobile-hide-heavy absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
        <h4 className="font-bold text-white mb-4 relative z-10">Estrategias FA (Maxi-Mini)</h4>
        <p className="text-teal-100/70 text-sm mb-6 relative z-10">
          Uso de las fortalezas para evitar o reducir el impacto de las amenazas externas.
        </p>
        <button
          onClick={() => onOpenModal("Estrategias FA", swotData.st, "from-indigo-600 to-indigo-800", <Search />)}
          className="w-full py-2.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-semibold text-sm transition-colors flex items-center justify-center gap-2 relative z-10"
        >
          <Search className="w-4 h-4" /> Ver {swotData.st.length} Estrategias
        </button>
      </div>

      {/* DA Strategies */}
      <div className="glass-card-strong mobile-safe-card rounded-2xl p-6 border border-rose-500/20 hover:border-rose-400/50 transition-all group relative overflow-hidden">
        <div className="mobile-hide-heavy absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all" />
        <h4 className="font-bold text-white mb-4 relative z-10">Estrategias DA (Mini-Mini)</h4>
        <p className="text-teal-100/70 text-sm mb-6 relative z-10">
          Tácticas defensivas dirigidas a disminuir debilidades y evitar amenazas.
        </p>
        <button
          onClick={() => onOpenModal("Estrategias DA", swotData.wt, "from-rose-600 to-rose-800", <Search />)}
          className="w-full py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-semibold text-sm transition-colors flex items-center justify-center gap-2 relative z-10"
        >
          <Search className="w-4 h-4" /> Ver {swotData.wt.length} Estrategias
        </button>
      </div>
    </div>
  );
}
