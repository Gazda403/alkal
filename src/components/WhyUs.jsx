import React from 'react';
import { ShieldCheck, Award, Wrench, Ruler, CheckCircle, Clock, UserCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/alkalData';

export default function WhyUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      icon: Ruler,
      title: "LIČNI NADZOR VLASNIKA",
      desc: "Dario Kalezić lično prisustvuje ključnim fazama mjerenja i montaže. Nema posrednika, nema prebacivanja odgovornosti – imate direktan kontakt sa vlasnikom od prvog dana."
    },
    {
      icon: Award,
      title: "NJEMAČKI A-KLASA MATERIJALI",
      desc: "Radimo isključivo sa sertifikovanim profilima najviše klase debljine stijenki, Maco/Siegenia protivprovalnim okovima i višekomornom termo-barijerom."
    },
    {
      icon: Wrench,
      title: "ČISTA RAL MONTAŽA",
      desc: "Naši monteri paze na vaš dom. Pažljivo demontiramo stare otvore bez obijanja pola zida, a prostor ostavljamo urednim i usisanim uz profesionalno zaptivanje."
    },
    {
      icon: ShieldCheck,
      title: "PISMENA GARANCIJA DO 10 GODINA",
      desc: "Zvanična pravna garancija registrovane firme 'ALKAL' s.p. Banja Luka na profile, stakla i ugradnju. Stojimo iza svakog ugrađenog šrafa."
    }
  ];

  return (
    <section className="py-20 border-b border-[#D8D6CE] bg-[#F0EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-2">
            <span className="w-2 h-2 bg-[#0F172A]"></span>
            <span>STANDARD KVALITETA // BANJA LUKA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
            ZAŠTO INVESTITORI I VLASNICI DOMOVA BIRAJU ALKAL?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Kupovina stolarije je odluka koja se donosi jednom u 30 godina. Kod nas ne kupujete samo profil i staklo – dobijate inženjersku preciznost i sigurnost da će svaki prozor funkcionisati besprijekorno decenijama.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#D8D6CE] divide-y md:divide-y-0 md:divide-x divide-[#D8D6CE] bg-white shadow-sm mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#FAF9F6] transition-colors">
                <div>
                  <div className="w-12 h-12 border border-[#0F172A] bg-[#0F172A] text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-lg uppercase tracking-tight text-[#0F172A] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-[10px] font-mono text-slate-400 font-bold uppercase">
                  <span>STANDARD #0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Business Certificate Banner */}
        <div className="border border-[#0F172A] bg-white p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0">
              <UserCheck className="w-8 h-8 text-[#0F172A]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-2 py-0.5">
                  AKTIVNO I REGISTROVANO OD 20.10.2017.
                </span>
                <span className="font-mono text-xs text-slate-400 hidden sm:inline">9+ GODINA RADA</span>
              </div>
              <h4 className="font-heading font-black text-xl text-[#0F172A] uppercase mt-1">
                "ALKAL" Dario Kalezić s.p. Banja Luka
              </h4>
              <p className="text-xs text-slate-600 font-mono mt-0.5">
                Sjedište: Bistrica bb, 78000 Banja Luka, BiH | Kontakt telefon: 066 530 113
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#0F172A] hover:bg-slate-800 text-white font-mono text-xs uppercase font-bold py-3.5 px-6 tracking-wider text-center cursor-pointer shadow-sm transition-all"
            >
              ZATRAŽITE BESPLATNO MJERENJE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
