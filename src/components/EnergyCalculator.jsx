import React, { useState } from 'react';
import { Flame, VolumeX, Sparkles, TrendingDown, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/alkalData';

export default function EnergyCalculator({ onOpenQuoteModal }) {
  const [windowArea, setWindowArea] = useState(16);
  const [oldWindowType, setOldWindowType] = useState('wood');

  const savingsPerM2 = oldWindowType === 'wood' ? 48 : 28;
  const totalSavingsKM = Math.round(windowArea * savingsPerM2);
  const tenYearSavings = totalSavingsKM * 10;
  const decibelReduction = oldWindowType === 'wood' ? 'do 46 dB (75% tiši dom)' : 'do 40 dB (60% tiši dom)';

  return (
    <section className="py-16 sm:py-20 border-b border-[#D8D6CE] bg-[#1E293B] text-white relative overflow-hidden">
      <div className="absolute right-4 bottom-4 font-mono text-7xl sm:text-8xl font-black text-slate-800/40 select-none pointer-events-none">
        A+++
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Explainer and Sliders */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-blue-400 uppercase border border-slate-700 bg-slate-800/80 px-3 py-1">
              <Flame className="w-3.5 h-3.5" />
              <span>ENERGETSKA MATEMATIKA</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              KOLIKO MOŽETE UŠTEDJETI SA ALKAL STOLARIJOM?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Dotrajala stolarija je odgovorna za više od <strong>35% ukupnih toplotnih gubitaka</strong>. 
              Ugradnjom novih višekomornih profila sa troslojnim staklom, investicija se isplaćuje kroz smanjene troškove grijanja i hlađenja.
            </p>

            {/* Old Window Type Selector */}
            <div className="space-y-2 pt-1">
              <label className="block font-mono text-[11px] sm:text-xs uppercase font-bold text-slate-300 tracking-wider">
                1. Šta trenutno imate na objektu?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setOldWindowType('wood')}
                  className={`py-2.5 px-3.5 text-xs font-mono uppercase font-bold border transition-all text-left cursor-pointer ${
                    oldWindowType === 'wood'
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <span className="block text-xs sm:text-sm">Stari drveni prozori</span>
                  <span className="text-[10px] text-slate-300 font-normal">Gubici toplote ~ 70%</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOldWindowType('old_pvc')}
                  className={`py-2.5 px-3.5 text-xs font-mono uppercase font-bold border transition-all text-left cursor-pointer ${
                    oldWindowType === 'old_pvc'
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <span className="block text-xs sm:text-sm">Stara 2-komorna PVC</span>
                  <span className="text-[10px] text-slate-300 font-normal">Dvoslojno obično staklo</span>
                </button>
              </div>
            </div>

            {/* Slider for Window Surface */}
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="text-slate-300 uppercase font-bold text-[11px] sm:text-xs">2. Površina prozora u m²:</span>
                <span className="text-base sm:text-lg font-black text-white bg-slate-800 px-2.5 py-0.5 border border-slate-700">
                  {windowArea} m²
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="60"
                step="2"
                value={windowArea}
                onChange={(e) => setWindowArea(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
                <span>Manji stan (6 m²)</span>
                <span>Porodična kuća (24 m²)</span>
                <span>Veći objekat (60 m²)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Savings Display */}
          <div className="lg:col-span-6 border border-slate-700 bg-slate-900/95 p-5 sm:p-8 lg:p-10 shadow-2xl space-y-5">
            <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
              <span className="font-mono text-[11px] sm:text-xs uppercase font-extrabold text-blue-400 tracking-wider">
                PRORAČUN PROCJENE UŠTEDE
              </span>
              <span className="font-mono text-[10px] text-slate-400">KLIMATSKA ZONA BANJA LUKA</span>
            </div>

            {/* Big Stat Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="border border-slate-800 bg-slate-800/40 p-4">
                <span className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  Godišnja ušteda na energentima
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">
                  ~ {totalSavingsKM} KM
                </div>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Ušteđeno na grijanju na pelet, struju ili drva
                </span>
              </div>

              <div className="border border-slate-800 bg-slate-800/40 p-4">
                <span className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  Ušteda za 10 godina rada
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-black text-white">
                  ~ {tenYearSavings.toLocaleString()} KM
                </div>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Isplaćuje investiciju nove stolarije
                </span>
              </div>
            </div>

            {/* Acoustic reduction metric */}
            <div className="border-l-2 border-blue-500 pl-3 py-0.5">
              <div className="flex items-center text-xs font-mono uppercase text-slate-300 font-bold mb-0.5">
                <VolumeX className="w-3.5 h-3.5 mr-1 text-blue-400" />
                Zvučna izolacija
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Smanjenje ulične buke: <strong className="text-white font-mono">{decibelReduction}</strong>.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-white hover:bg-slate-100 text-[#0F172A] font-mono text-xs uppercase font-extrabold tracking-wider py-3.5 px-5 flex items-center justify-between transition-all group cursor-pointer shadow-lg"
              >
                <span>ZATRAŽITE BESPLATAN PRORAČUN</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
