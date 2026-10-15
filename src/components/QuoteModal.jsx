import React, { useState, useEffect } from 'react';
import { X, Check, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/alkalData';

export default function QuoteModal({ isOpen, onClose, initialProduct = '' }) {
  const [product, setProduct] = useState(initialProduct || 'PVC Prozori (Standardni paket)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Banja Luka');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Molimo unesite vaše ime i kontakt telefon.');
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const handleViberSend = () => {
    const text = `Pozdrav Dario (ALKAL Banja Luka),
Zainteresovan sam za ponudu:
• Proizvod: ${product}
• Ime: ${name || 'Klijent'}
• Telefon: ${phone || 'Nije unesen'}
• Lokacija: ${location}
${notes ? `• Napomena: ${notes}` : ''}`;

    window.open(`https://viber.click/38766530113?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-[#0F172A] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#0F172A] font-mono text-sm cursor-pointer"
          aria-label="Zatvori"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="border-b border-[#D8D6CE] pb-4 mb-6">
              <span className="font-mono text-[10px] uppercase font-bold text-blue-600 tracking-wider block mb-1">
                // ALKAL BRZI ZAHTJEV ZA PONUDU
              </span>
              <h3 className="font-heading font-black text-2xl uppercase text-[#0F172A]">
                ZATRAŽITE BESPLATNO MJERENJE
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Banja Luka i regija. Vlasnik Dario Kalezić lično odgovara na svaki upit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                  Izaberite stolariju:
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-[#D8D6CE] p-2.5 text-xs font-mono bg-[#FAF9F6] focus:outline-none focus:border-[#0F172A]"
                >
                  <option value="PVC Prozori i Balkonska Vrata">PVC Prozori i Balkonska Vrata (6 & 7 komora)</option>
                  <option value="Zatvorena Terasa (Zastakljivanje Terase)">Zatvorena Terasa (Zastakljivanje Terase / Balkona)</option>
                  <option value="ALU Panoramske Klizne Stijene">ALU Panoramske Klizne Stijene</option>
                  <option value="Aluminijumska Ulazna Vrata">Aluminijumska Sigurnosna Ulazna Vrata</option>
                  <option value="Roletne, Žaluzine i Komarnici">Roletne, Vanjske Žaluzine i Komarnici</option>
                  <option value="Kompletna Stolarija za Novogradnju / Kuću">Kompletna Stolarija za Kuću / Zgradu</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                    Vaše Ime i Prezime *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marko Jovanović"
                    className="w-full border border-[#D8D6CE] p-2.5 text-xs bg-[#FAF9F6] focus:outline-none focus:border-[#0F172A]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                    Broj Telefona / Viber *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="065 123 456"
                    className="w-full border border-[#D8D6CE] p-2.5 text-xs bg-[#FAF9F6] focus:outline-none focus:border-[#0F172A]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                  Lokacija u Banjoj Luci ili regiji:
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="npr. Nova Varoš, Starčevica, Laktaši..."
                  className="w-full border border-[#D8D6CE] p-2.5 text-xs bg-[#FAF9F6] focus:outline-none focus:border-[#0F172A]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase font-bold text-slate-700 mb-1">
                  Dodatne napomene ili dimenzije:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="npr. 5 prozora, potrebna i demontaža stare stolarije..."
                  className="w-full border border-[#D8D6CE] p-2.5 text-xs bg-[#FAF9F6] focus:outline-none focus:border-[#0F172A]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={handleViberSend}
                  className="flex-1 bg-[#7360F2] hover:bg-[#6350E2] text-white py-3 px-3 font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>POŠALJI NA VIBER</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-[#0F172A] hover:bg-slate-800 text-white py-3 px-3 font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>POŠALJI ZAHTJEV</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center text-xs font-mono text-slate-600 hover:text-[#0F172A]"
                >
                  <Phone className="w-3.5 h-3.5 mr-1 text-[#0F172A]" />
                  <span>Ili pozovite odmah: <strong>{COMPANY_INFO.phoneDisplay}</strong></span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-500">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-black text-xl uppercase text-[#0F172A]">
              HVALA! ZAHTJEV JE USPJEŠNO POSLAT
            </h3>
            <p className="text-xs text-slate-600">
              Vlasnik Dario Kalezić će vas kontaktirati na <strong>{phone}</strong> u najkraćem roku.
            </p>
            <button
              onClick={onClose}
              className="bg-[#0F172A] text-white py-2.5 px-6 font-mono text-xs uppercase font-bold tracking-wider hover:bg-slate-800"
            >
              U REDU, ZATVORI
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
