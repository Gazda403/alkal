import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Layers, Maximize2, X, Hammer, ShieldCheck } from 'lucide-react';
import { REAL_PROJECTS } from '../data/alkalData';

export default function ProjectsGallery({ onOpenQuoteModal }) {
  const [activeTag, setActiveTag] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'RADIONICA & MONTAŽA', 'ULAZNA VRATA', 'PROZORI & KOMARNICI'];

  const filtered = activeTag === 'ALL'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter(p => p.tag === activeTag || (activeTag === 'ULAZNA VRATA' && p.category === 'ULAZNA VRATA'));

  return (
    <section id="projekti" className="py-16 sm:py-20 border-b border-[#D8D6CE] bg-[#F4F3EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-[#D8D6CE] pb-5 sm:pb-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-2">
              <span className="w-2 h-2 bg-[#0F172A]"></span>
              <span>AUTENTIČNA PROIZVODNJA & UGRADNJA</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
              STVARNI RADOVI IZ NAŠE RADIONICE
            </h2>
          </div>
          <p className="mt-3 md:mt-0 max-w-md text-xs sm:text-sm text-[#475569] font-normal">
            Fotografije direktno iz radionice u Banjoj Luci (Bistrica bb) i sa objekata naših zadovoljnih kupaca.
          </p>
        </div>

        {/* Filter tags - Horizontal scrollable on small mobile */}
        <div className="flex overflow-x-auto pb-3 mb-8 sm:mb-10 border-b border-[#D8D6CE] gap-2 scrollbar-none">
          {categories.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={`font-mono text-[11px] sm:text-xs uppercase font-bold px-3.5 sm:px-4 py-2 border cursor-pointer shrink-0 transition-all ${
                activeTag === t
                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                  : 'bg-white text-slate-600 border-[#D8D6CE] hover:border-slate-800'
              }`}
            >
              {t === 'ALL' ? 'SVI RADOVI' : t}
            </button>
          ))}
        </div>

        {/* Real Projects Editorial Grid - Mobile 1-col, Tablet 2-col, Desktop 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="border border-[#D8D6CE] bg-white group cursor-pointer overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
              onClick={() => setSelectedProject(proj)}
            >
              <div>
                {/* Image Container with authentic aspect ratio */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                  {/* Top Tag Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-[#D8D6CE] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[#0F172A] shadow-sm">
                    {proj.tag}
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 border border-slate-300 flex items-center justify-center text-[#0F172A] opacity-90 group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4 sm:p-5">
                  <div className="font-mono text-[10px] uppercase text-slate-500 mb-1.5 flex items-center">
                    <Hammer className="w-3 h-3 mr-1 text-[#0F172A]" />
                    {proj.category}
                  </div>

                  <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight text-[#0F172A] mb-2 leading-snug group-hover:text-blue-900 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center justify-between text-[11px] font-mono font-bold text-[#0F172A] border-t border-[#F0EFEA] pt-3">
                <span className="uppercase tracking-wider group-hover:underline">PREGLEDAJ DETALJ</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full photo view - Fully Mobile Optimized */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
            <div className="bg-white border border-[#0F172A] max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 bg-[#0F172A] text-white flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors"
                aria-label="Zatvori"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] bg-slate-900 max-h-[50vh]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain bg-slate-950"
                />
              </div>

              <div className="p-5 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                  <span className="font-mono text-xs uppercase font-bold text-[#0F172A] flex items-center">
                    <span className="w-2 h-2 bg-blue-600 mr-2"></span>
                    ALKAL PROIZVODNJA & MONTAŽA
                  </span>
                  <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 text-slate-700">
                    {selectedProject.tag}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl sm:text-2xl uppercase text-[#0F172A] leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProject.desc}
                </p>

                <div className="border border-slate-200 bg-[#FAF9F6] p-3.5 font-mono text-xs text-slate-800">
                  <strong className="block text-[#0F172A] uppercase mb-0.5">TEHNIČKI DETALJI:</strong>
                  {selectedProject.details}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuoteModal();
                    }}
                    className="flex-1 bg-[#0F172A] text-white py-3 font-mono text-xs uppercase font-bold tracking-wider hover:bg-slate-800 transition-colors text-center"
                  >
                    ZATRAŽITE PONUDU ZA SLIČNU IZRADU
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="border border-slate-300 py-3 px-5 font-mono text-xs uppercase font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    ZATVORI
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
