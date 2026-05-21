import { SwotCell } from "../../../types";

interface SwotMobileCardProps {
  title: string;
  gradient: string;
  icon: React.ReactNode;
  items: SwotCell[];
  onClick: () => void;
}

export function SwotMobileCard({ title, gradient, icon, items, onClick }: SwotMobileCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 shadow-lg relative overflow-hidden group mobile-safe-card`}
    >
      <div className="mobile-hide-heavy absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center md:backdrop-blur-md text-white">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white text-xs font-bold">
          {items.length}
        </span>
      </div>
      
      <p className="relative z-10 text-white/80 text-sm">
        Toque para ver el análisis detallado de los {items.length} puntos estratégicos.
      </p>
    </button>
  );
}
