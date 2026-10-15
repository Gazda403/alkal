import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sliders, ShieldCheck, Zap, VolumeX, Maximize2 } from 'lucide-react';
import { PRODUCTS } from '../data/alkalData';

export default function ProductShowcase({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'SVI PROIZVODI' },
    { id: 'pvc', label: 'PVC PROZORI' },
    { id: 'alu', label: 'ZATVORENE TERASE' },
    { id: 'vrata', label: 'ULAZNA VRATA' },
    { id: 'roletne', label: 'ROLETNE & ŽALUZINE' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.id === activeCategory);

  return (
    <section id="proizvodi" className="py-16 sm:py-20 border-b border-[#D8D6CE] bg-[#F4F3EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-[#D8D6CE] pb-5 sm:pb-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-2">
              <span className="w-2 h-2 bg-[#0F172A]"></span>
              <span>KATALOG & TEHNIČKA PONUDA</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
              VRHUNSKI PROIZVODNI PROGRAM
            </h2>
          </div>
          <p className="mt-3 md:mt-0 max-w-md text-xs sm:text-sm text-[#475569] font-normal">
            Svaki element se izrađuje po tačnim mjerama vašeg objekta sa višestrukom kontrolom geometrije i termo-izolacije.
          </p>
        </div>

        {/* Filter Category Tabs - Mobile Scrollable */}
        <div className="flex overflow-x-auto pb-3 mb-8 sm:mb-10 border-b border-[#D8D6CE] gap-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-mono text-[11px] sm:text-xs uppercase font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 transition-all border shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                  : 'bg-white text-[#475569] border-[#D8D6CE] hover:border-[#0F172A] hover:text-[#0F172A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-[#D8D6CE] bg-white flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 group"
            >
              <div>
                {/* Product Card Top Meta Header */}
                <div className="bg-[#FAF9F6] border-b border-[#D8D6CE] px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between font-mono text-[11px] sm:text-xs">
                  <span className="font-bold text-[#0F172A] tracking-wider uppercase truncate pr-2">
                    {product.category}
                  </span>
                  <span className="bg-[#0F172A] text-white text-[9px] sm:text-[10px] uppercase font-semibold px-2 py-0.5 tracking-wider shrink-0">
                    {product.badge}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-slate-100 border-b border-[#D8D6CE]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm border border-[#D8D6CE] px-2 py-0.5 font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#0F172A]">
                    PRECIZNA IZRADA
                  </div>
                </div>

                {/* Card Content & Specs */}
                <div className="p-5 sm:p-7">
                  <h3 className="font-heading font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0F172A] mb-2 sm:mb-3">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mb-5 leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Technical Specs Grid */}
                  <div className="border border-[#E7E5DD] bg-[#FAF9F6] p-3.5 sm:p-4 mb-5">
                    <div className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#64748B] tracking-wider mb-2.5 flex items-center">
                      <Sliders className="w-3 h-3 mr-1 text-[#0F172A]" />
                      KLJUČNE TEHNIČKE SPECIFIKACIJE
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {product.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="border-l-2 border-[#0F172A] pl-2">
                          <span className="block text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase truncate">
                            {spec.label}
                          </span>
                          <span className="font-mono text-[11px] sm:text-xs font-bold text-[#0F172A] leading-tight block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-medium text-slate-600 mb-2">
                    <span className="font-bold text-[#0F172A] font-mono uppercase text-[10px] sm:text-[11px] mr-1.5">
                      IDEALNO ZA:
                    </span>
                    {product.idealFor}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 sm:px-7 sm:pb-7 pt-0">
                <button
                  onClick={() => onSelectProduct(product.name)}
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-mono text-xs uppercase font-bold tracking-wider py-3.5 px-4 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <span>ZATRAŽITE PONUDU ZA OVAJ MODEL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
