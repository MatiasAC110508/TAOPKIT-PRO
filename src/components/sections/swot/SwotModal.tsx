import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { SwotCell } from "../../../types";

interface SwotModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  gradient: string;
  items: SwotCell[];
  icon: React.ReactNode;
}

export function SwotModal({ isOpen, onClose, title, gradient, items, icon }: SwotModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0b1717] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className={`p-6 md:p-8 bg-gradient-to-br ${gradient} flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Análisis: {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                {items.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={item.id}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-teal-400">{item.id}</span>
                    </div>
                    <p className="text-teal-100/90 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-white/5 bg-black/20 text-center">
               <span className="text-teal-200/40 text-xs italic">
                 TAOP KIT PRO - Matriz Estratégica
               </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
