import React, { useState } from 'react';
import { Layers, Shield, Sparkles, Check, ArrowRight, Gauge, Wind } from 'lucide-react';
import { PROFILE_LAYERS } from '../data/alkalData';

export default function ProfileCutaway() {
  const [selectedLayer, setSelectedLayer] = useState(PROFILE_LAYERS[0]);

  return (
    <section id="preciznost" className="py-16 sm:py-20 border-b border-[#D8D6CE] bg-[#F0EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 border-b border-[#D8D6CE] pb-5 sm:pb-6">
          <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-2">
            <span className="w-2 h-2 bg-[#0F172A]"></span>
            <span>ARHITEKTONSKA PRECIZNOST & FIZIKA ZGRADE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
              ANATOMIJA ALKAL PROFILA
            </h2>
            <p className="mt-2 md:mt-0 text-[11px] sm:text-xs text-[#475569] max-w-md font-mono">
              [DETALJAN PRESJEK SISTEMA SA TROSLOJNIM PAKETOM]
            </p>
          </div>
        </div>

        {/* Interactive Anatomy Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Layer Selection Tabs */}
          <div className="lg:col-span-5 space-y-2">
            <div className="font-mono text-[11px] sm:text-xs uppercase font-bold text-slate-500 mb-2 sm:mb-3 tracking-wider">
              IZABERITE KOMPONENTU ZA ANALIZU:
            </div>

            <div className="space-y-2">
              {PROFILE_LAYERS.map((layer, index) => {
                const isSelected = selectedLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer)}
                    className={`w-full text-left p-3.5 sm:p-5 border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                        : 'bg-white text-[#0F172A] border-[#D8D6CE] hover:border-[#0F172A]'
                    }`}
                  >
                    <div className="flex items-start space-x-2.5 sm:space-x-3">
                      <span className={`font-mono text-xs font-bold px-1.5 py-0.5 border shrink-0 ${
                        isSelected ? 'border-slate-600 bg-slate-800 text-slate-300' : 'border-slate-300 bg-slate-100 text-slate-600'
                      }`}>
                        0{index + 1}
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-xs sm:text-base uppercase tracking-tight">
                          {layer.name}
                        </h4>
                        <p className={`text-[10px] sm:text-[11px] font-mono mt-0.5 line-clamp-1 ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 shrink-0 transition-transform ${
                      isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-300'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layer Inspection Display */}
          <div className="lg:col-span-7 border border-[#D8D6CE] bg-white p-5 sm:p-8 lg:p-10 shadow-lg relative">
            <div className="flex flex-wrap items-center justify-between border-b border-[#D8D6CE] pb-3 mb-5 gap-2">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-blue-600 shrink-0"></span>
                <span className="font-mono text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-[#0F172A]">
                  TEHNIČKI DOSIJE KOMPONENTE
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-xs px-2 py-0.5 bg-slate-100 border border-slate-300 font-bold text-[#0F172A]">
                SERTIFIKOVANO EN 14351-1
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest block mb-1">
                  KOMPONENTA #{selectedLayer.id.toUpperCase()}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase text-[#0F172A] tracking-tight">
                  {selectedLayer.name}
                </h3>
                <p className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1 uppercase">
                  {selectedLayer.subtitle}
                </p>
              </div>

              {/* Blueprint Card */}
              <div className="border border-dashed border-slate-300 bg-[#F8F7F4] p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase flex items-center">
                    <Gauge className="w-3.5 h-3.5 mr-1 text-blue-600" />
                    IZMJERENA VRIJEDNOST
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-extrabold text-[#0F172A] bg-white px-2 py-0.5 border border-slate-300">
                    {selectedLayer.stat}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedLayer.desc}
                </p>
              </div>

              {/* Advantages List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start space-x-2 text-xs text-slate-700">
                  <span className="text-emerald-600 font-bold font-mono">✓</span>
                  <span>Otporno na deformacije usljed mraza i jakog ljetnog sunca</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-slate-700">
                  <span className="text-emerald-600 font-bold font-mono">✓</span>
                  <span>Ekološki profili bez prisustva teških metala (RoHS standard)</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-slate-700">
                  <span className="text-emerald-600 font-bold font-mono">✓</span>
                  <span>Smanjenje nivoa ulične buke u urbanim zonama Banje Luke</span>
                </div>
                <div className="flex items-start space-x-2 text-xs text-slate-700">
                  <span className="text-emerald-600 font-bold font-mono">✓</span>
                  <span>Lako održavanje bez potrebe za ponovnim lakiranjem</span>
                </div>
              </div>

              {/* Guarantee Note */}
              <div className="border-t border-[#E7E5DD] pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-500 gap-1">
                <span>VLASNIK: DARIO KALEZIĆ S.P.</span>
                <span className="text-slate-800 font-bold">GARANCIJA NA UGRADNJU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
