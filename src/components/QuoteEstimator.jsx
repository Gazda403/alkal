import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Building2, 
  Home, 
  Layers, 
  ShieldCheck, 
  Calendar,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/alkalData';

export default function QuoteEstimator({ preselectedProduct = null }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [productType, setProductType] = useState(preselectedProduct || 'PVC Prozori & Balkonska Vrata');
  const [openingsCount, setOpeningsCount] = useState('4-8 otvora (stan ili sprat kuće)');
  const [profileColor, setProfileColor] = useState('Antracit siva RAL 7016');
  const [glassType, setGlassType] = useState('Troslojno 4-sezonsko Low-E + Argon (A+++)');
  const [services, setServices] = useState([
    'Besplatno lasersko mjerenje na lokaciji',
    'Stručna montaža sa RAL garancijom'
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Banja Luka',
    notes: ''
  });

  const toggleService = (srv) => {
    if (services.includes(srv)) {
      setServices(services.filter(s => s !== srv));
    } else {
      setServices([...services, srv]);
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateViberMessage = () => {
    const text = `Pozdrav Dario (ALKAL Banja Luka),
Želio bih zatražiti ponudu za stolariju:
• Proizvod: ${productType}
• Broj otvora: ${openingsCount}
• Boja: ${profileColor}
• Staklo: ${glassType}
• Usluge: ${services.join(', ')}
• Ime: ${formData.name || 'Zainteresovani klijent'}
• Telefon: ${formData.phone || 'Nije unesen'}
• Lokacija: ${formData.location}
${formData.notes ? `• Napomena: ${formData.notes}` : ''}`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Molimo unesite vaše ime i kontakt telefon kako bismo vam poslali ponudu.');
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const openViberDirectly = () => {
    const viberMsg = generateViberMessage();
    const url = `https://viber.click/38766530113?text=${viberMsg}`;
    window.open(url, '_blank');
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-20 border-b border-[#D8D6CE] bg-[#F4F3EF] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-2 border border-[#D8D6CE] bg-white px-3 py-1">
            <span className="w-2 h-2 bg-blue-600"></span>
            <span>BRZA ONLINE PROCJENA U 3 KORAKA</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
            KALKULATOR & ZAHTJEV ZA PONUDU
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#475569]">
            Izaberite opcije i pošaljite upit direktno vlasniku Dariju Kaleziću na Viber ili putem forme.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="border border-[#D8D6CE] bg-white shadow-xl overflow-hidden">
          {/* Step Progress Bar - Mobile Friendly */}
          <div className="grid grid-cols-3 border-b border-[#D8D6CE] bg-[#FAF9F6] text-center font-mono text-[11px] sm:text-xs">
            <div className={`py-3 px-1 sm:px-2 border-r border-[#D8D6CE] flex items-center justify-center space-x-1 ${
              step === 1 ? 'bg-[#0F172A] text-white font-bold' : step > 1 ? 'text-[#0F172A] font-semibold bg-slate-100' : 'text-slate-400'
            }`}>
              <span>01.</span>
              <span className="truncate">PROIZVOD</span>
            </div>
            <div className={`py-3 px-1 sm:px-2 border-r border-[#D8D6CE] flex items-center justify-center space-x-1 ${
              step === 2 ? 'bg-[#0F172A] text-white font-bold' : step > 2 ? 'text-[#0F172A] font-semibold bg-slate-100' : 'text-slate-400'
            }`}>
              <span>02.</span>
              <span className="truncate">DETALJI</span>
            </div>
            <div className={`py-3 px-1 sm:px-2 flex items-center justify-center space-x-1 ${
              step === 3 ? 'bg-[#0F172A] text-white font-bold' : 'text-slate-400'
            }`}>
              <span>03.</span>
              <span className="truncate">KONTAKT</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-5 sm:p-8 lg:p-10">
            {!submitted ? (
              <div>
                {/* STEP 1: Product Selection */}
                {step === 1 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="border-b border-[#E7E5DD] pb-3">
                      <h3 className="font-heading font-black text-lg sm:text-xl uppercase text-[#0F172A]">
                        1. Izaberite šta vam je potrebno:
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-mono mt-0.5">
                        Pojedinačne pozicije ili kompletna stolarija za objekat.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {[
                        { title: 'PVC Prozori & Balkonska Vrata', desc: 'Višekomorni profili, troslojno staklo A+++' },
                        { title: 'Zatvorena Terasa (Zastakljivanje Terasa)', desc: 'Klizni sistemi, zaštita od vjetra i roletne' },
                        { title: 'ALU Panoramske Klizne Stijene', desc: 'Prekinuti termički most, moderni veliki otvori' },
                        { title: 'Ulazna Sigurnosna Vrata', desc: 'Aluminijumska ili PVC vrata sa inox detaljima' },
                        { title: 'Roletne, Žaluzine & Komarnici', desc: 'Aluminijske termo lamele, rolo i plise komarnici' },
                        { title: 'Kompletna Kuća / Objekat', desc: 'Kombinacija svih elemenata sa popustom na količinu' }
                      ].map((item, i) => (
                        <div
                          key={i}
                          onClick={() => setProductType(item.title)}
                          className={`p-3.5 sm:p-4 border transition-all cursor-pointer flex items-start justify-between ${
                            productType === item.title
                              ? 'border-[#0F172A] bg-[#FAF9F6] ring-1 ring-[#0F172A]'
                              : 'border-[#D8D6CE] hover:border-slate-500 bg-white'
                          }`}
                        >
                          <div>
                            <span className="font-heading font-bold text-xs sm:text-sm uppercase text-[#0F172A] block">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 mt-0.5 block">
                              {item.desc}
                            </span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            productType === item.title ? 'border-[#0F172A] bg-[#0F172A] text-white' : 'border-slate-300'
                          }`}>
                            {productType === item.title && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#E7E5DD]">
                      <label className="block font-mono text-xs uppercase font-bold text-[#0F172A] mb-2">
                        Okviran broj otvora:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          '1-3 otvora (manja zamjena)',
                          '4-8 otvora (stan ili sprat)',
                          '9+ otvora (kompletna kuća)'
                        ].map((count, cIdx) => (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() => setOpeningsCount(count)}
                            className={`py-2.5 px-3 font-mono text-xs border cursor-pointer transition-all ${
                              openingsCount === count
                                ? 'bg-[#0F172A] text-white border-[#0F172A] font-bold'
                                : 'bg-white text-slate-700 border-[#D8D6CE] hover:border-slate-400'
                            }`}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Color, Glass & Services */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="border-b border-[#E7E5DD] pb-3">
                      <h3 className="font-heading font-black text-lg sm:text-xl uppercase text-[#0F172A]">
                        2. Boja profila i paket stakla:
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-mono mt-0.5">
                        Izaberite estetiku i nivo toplotne zaštite.
                      </p>
                    </div>

                    {/* Color selection */}
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-[#0F172A] mb-2">
                        Željena boja profila:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { name: 'Antracit siva RAL 7016', color: 'bg-slate-700' },
                          { name: 'Klasična Bijela', color: 'bg-white border' },
                          { name: 'Zlatni Hrast (Drvo)', color: 'bg-amber-700' },
                          { name: 'Tamni Hrast / Orah', color: 'bg-amber-950' }
                        ].map((c, idx) => (
                          <div
                            key={idx}
                            onClick={() => setProfileColor(c.name)}
                            className={`p-2.5 sm:p-3 border cursor-pointer flex items-center space-x-2 transition-all ${
                              profileColor === c.name
                                ? 'border-[#0F172A] bg-[#FAF9F6] ring-1 ring-[#0F172A]'
                                : 'border-[#D8D6CE] bg-white hover:border-slate-400'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full ${c.color} border border-slate-300 shrink-0`}></span>
                            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#0F172A] truncate">
                              {c.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Glass selection */}
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-[#0F172A] mb-2">
                        Paket stakla:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {[
                          {
                            name: 'Troslojno 4-sezonsko Low-E + Argon (A+++)',
                            desc: 'Maksimalna toplotna i zvučna izolacija, do 40% manji računi za grijanje.'
                          },
                          {
                            name: 'Dvoslojno Low-E sa Argonom (Standard)',
                            desc: 'Ekonomična varijanta za pomoćne prostorije ili umjerenu klimu.'
                          }
                        ].map((gl, gIdx) => (
                          <div
                            key={gIdx}
                            onClick={() => setGlassType(gl.name)}
                            className={`p-3 border cursor-pointer transition-all ${
                              glassType === gl.name
                                ? 'border-[#0F172A] bg-[#FAF9F6] ring-1 ring-[#0F172A]'
                                : 'border-[#D8D6CE] bg-white hover:border-slate-400'
                            }`}
                          >
                            <span className="font-heading font-bold text-xs uppercase text-[#0F172A] block">
                              {gl.name}
                            </span>
                            <span className="text-[11px] text-slate-500 mt-0.5 block">
                              {gl.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-[#0F172A] mb-2">
                        Dodatne usluge:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'Besplatno lasersko mjerenje na lokaciji',
                          'Stručna montaža sa garancijom',
                          'Demontaža i odvoz stare stolarije',
                          'Ugradnja komarnika (plise / rolo)',
                          'Ugradnja aluminijskih roletni'
                        ].map((srv, sIdx) => {
                          const active = services.includes(srv);
                          return (
                            <div
                              key={sIdx}
                              onClick={() => toggleService(srv)}
                              className={`p-2.5 sm:p-3 border cursor-pointer flex items-center space-x-2.5 transition-all ${
                                active ? 'border-[#0F172A] bg-slate-50' : 'border-[#D8D6CE] bg-white'
                              }`}
                            >
                              <div className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                                active ? 'border-[#0F172A] bg-[#0F172A] text-white' : 'border-slate-300'
                              }`}>
                                {active && <Check className="w-3 h-3" />}
                              </div>
                              <span className="text-xs text-slate-800 font-medium">{srv}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact & Submission */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
                    <div className="border-b border-[#E7E5DD] pb-3">
                      <h3 className="font-heading font-black text-lg sm:text-xl uppercase text-[#0F172A]">
                        3. Gdje da vam pošaljemo ponudu?
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-mono mt-0.5">
                        Dario Kalezić će pregledati zahtjev i pripremiti specifikaciju.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                          Vaše Ime i Prezime *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="npr. Marko Jovanović"
                          className="w-full border border-[#D8D6CE] p-3 text-base sm:text-sm focus:outline-none focus:border-[#0F172A] bg-[#FAF9F6]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                          Broj Telefona / Viber *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="npr. 065 123 456"
                          className="w-full border border-[#D8D6CE] p-3 text-base sm:text-sm focus:outline-none focus:border-[#0F172A] bg-[#FAF9F6]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                        Lokacija objekta (Naselje / Grad):
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="npr. Banja Luka, Laktaši, Čelinac..."
                        className="w-full border border-[#D8D6CE] p-3 text-base sm:text-sm focus:outline-none focus:border-[#0F172A] bg-[#FAF9F6]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                        Okvirne dimenzije ili napomene (opciono):
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Ako imate okvirne dimenzije prozora (npr. 140x140cm)..."
                        className="w-full border border-[#D8D6CE] p-3 text-base sm:text-sm focus:outline-none focus:border-[#0F172A] bg-[#FAF9F6]"
                      ></textarea>
                    </div>

                    {/* Summary box */}
                    <div className="bg-[#FAF9F6] border border-[#D8D6CE] p-3.5 text-xs font-mono text-slate-600 space-y-1">
                      <div className="font-bold text-[#0F172A] uppercase mb-0.5">SAŽETAK UPITA:</div>
                      <div>• Proizvod: <strong className="text-[#0F172A]">{productType}</strong> ({openingsCount})</div>
                      <div>• Boja: <strong className="text-[#0F172A]">{profileColor}</strong></div>
                      <div>• Staklo: <strong className="text-[#0F172A]">{glassType}</strong></div>
                    </div>
                  </form>
                )}

                {/* Wizard Navigation & CTA Buttons */}
                <div className="mt-6 pt-5 border-t border-[#D8D6CE] flex flex-col sm:flex-row items-center justify-between gap-3">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-full sm:w-auto font-mono text-xs uppercase font-bold text-slate-600 hover:text-[#0F172A] px-4 py-3 border border-[#D8D6CE] hover:border-[#0F172A] flex items-center justify-center space-x-1 cursor-pointer transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                      <span>PRETHODNI KORAK</span>
                    </button>
                  ) : <div />}

                  <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-800 text-white font-mono text-xs uppercase font-bold tracking-wider px-7 py-3.5 flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
                      >
                        <span>SLJEDEĆI KORAK</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={openViberDirectly}
                          className="w-full sm:w-auto bg-[#7360F2] hover:bg-[#6350E2] text-white font-mono text-xs uppercase font-bold tracking-wider px-5 py-3.5 flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>POŠALJI NA VIBER (066 530 113)</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-800 text-white font-mono text-xs uppercase font-bold tracking-wider px-5 py-3.5 flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
                        >
                          <Send className="w-4 h-4" />
                          <span>POŠALJI ZAHTJEV</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Success state */
              <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 border-2 border-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-black text-xl sm:text-2xl uppercase text-[#0F172A]">
                  HVALA VAM, VAŠ ZAHTJEV JE ZABILJEŽEN!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-normal">
                  Vlasnik <strong>Dario Kalezić</strong> će vas kontaktirati na broj <span className="font-mono font-bold text-[#0F172A]">{formData.phone}</span> radi dogovora o besplatnom mjerenju ili slanja okvirne ponude.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="border border-[#0F172A] bg-white text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-mono text-xs uppercase font-bold py-3 px-5 flex items-center space-x-2 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>POZOVI DIREKTNO: {COMPANY_INFO.phoneDisplay}</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="font-mono text-xs uppercase font-semibold text-slate-500 hover:text-slate-800 underline py-2"
                  >
                    Novi upit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
