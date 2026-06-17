"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Navy Banner Header Section */}
      <section className="bg-[#0b1e33] pt-40 pb-24 text-white relative overflow-hidden">
        {/* Subtle decorative glowing background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2ecc71]/5 rounded-full blur-2xl pointer-events-none -ml-24 -mb-24" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Холбоо барих
            </h1>
            <div className="w-12 h-1.5 bg-[#2ecc71] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content Section (2-Column Layout) */}
      <section className="py-20 bg-white text-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Phone */}
              <div className="flex items-start gap-5 p-6 border border-slate-100 bg-slate-50/50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Утас</h3>
                  <p className="text-lg font-bold text-[#0b1e33]">+(976) 8804-2323</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 p-6 border border-slate-100 bg-slate-50/50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Имэйл хаяг</h3>
                  <p className="text-lg font-bold text-[#0b1e33]">info@almachem.mn</p>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-5 p-6 border border-slate-100 bg-slate-50/50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Төв оффис</h3>
                  <p className="text-slate-700 leading-relaxed font-light text-sm sm:text-base">
                    Монгол улс, Улаанбаатар хот 14220, Сүхбаатар дүүрэг, 1-р хороо,
                    13-р хороолол, Элчингийн гудамж 9,
                    Sky Plaza бизнес төв, D хэсэг, 1 давхар
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                
                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
                    <CheckCircle2 className="w-16 h-16 text-[#2ecc71] mb-6" />
                    <h3 className="text-2xl font-bold text-[#0b1e33] mb-2">Амжилттай илгээгдлээ</h3>
                    <p className="text-slate-500 max-w-sm text-sm">
                      Таны зурвасыг бид хүлээн авлаа. Тантай тун удахгүй эргэн холбогдох болно.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-semibold text-[#2ecc71] hover:text-[#27ae60] underline underline-offset-4"
                    >
                      Дахин зурвас илгээх
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-[#0b1e33]">Нэр</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/40 focus:border-[#2ecc71] bg-white text-slate-800 text-sm transition-all"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-[#0b1e33]">Утасны дугаар</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/40 focus:border-[#2ecc71] bg-white text-slate-800 text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-[#0b1e33]">Имэйл хаяг</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/40 focus:border-[#2ecc71] bg-white text-slate-800 text-sm transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-[#0b1e33]">Зурвас</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ecc71]/40 focus:border-[#2ecc71] bg-white text-slate-800 text-sm transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold shadow-md transition-all group"
                    >
                      <span>Илгээх</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
