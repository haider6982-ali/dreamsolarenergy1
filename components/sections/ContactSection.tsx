"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  Mail,
  AtSign,
} from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: "Complete Solar System",
    city: "Vehari",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Dream Solar Energy,\n\nName: ${form.name}\nPhone: ${form.phone}\nCity/Area: ${form.city}\nInterested In: ${form.requirement}\n${
        form.message ? `Details: ${form.message}` : ""
      }`
    );
    window.open(`https://wa.me/923202200884?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        phone: "",
        requirement: "Complete Solar System",
        city: "Vehari",
        message: "",
      });
    }, 5000);
  };

  // Google Maps: Dream Solar Energy official listing
  const MAPS_URL =
    "https://www.google.com/maps/place/Dream+Solar+Energy/@30.0420355,72.3516198,46m/data=!3m1!1e3!4m6!3m5!1s0x393cebcde0626c79:0x31e8618de89de98b!8m2!3d30.0420259!4d72.3518256!16s%2Fg%2F11zyyvx49w?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg px-3.5 py-1 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#F7941D]" />
            <span className="text-xs font-bold text-[#1B2A4A] uppercase tracking-wide">
              Store &amp; Consultation
            </span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Contact &amp; Store Location
          </h2>
          <p className="text-[#5B6472] text-sm sm:text-base mt-2">
            Visit our store &amp; office in Vehari or contact us for a customized solar proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">

            {/* Business Owner Card */}
            <div className="bg-[#1B2A4A] rounded-lg p-6 shadow-sm border border-[#22325A] text-white">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#F7941D]/30 shrink-0 bg-[#0F1B2E]">
                  <Image
                    src="/tariq-mahmood.png"
                    alt="Tariq Mahmood"
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FBB859] uppercase tracking-widest mb-0.5">
                    Business Owner
                  </p>
                  <h3
                    className="text-xl font-black text-white"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Tariq Mahmood
                  </h3>
                  <p className="text-slate-300 text-xs mt-0.5">Dream Solar Energy — Vehari</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href="tel:03202200884"
                  className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-[#FBB859] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FBB859]" />
                  0320-2200884
                </a>
                <a
                  href="https://wa.me/923202200884"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="mailto:tariqdp36@gmail.com"
                  className="flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-[#FBB859] transition-colors"
                >
                  <AtSign className="w-3.5 h-3.5 text-[#FBB859]" />
                  tariqdp36@gmail.com
                </a>
              </div>
            </div>

            {/* Store Address Card */}
            <div className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FBB859]/25/80 text-[#F7941D] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="font-bold text-base text-[#1B2A4A]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Main Store &amp; Office
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Allama Iqbal Road, near Bank of Punjab<br />
                    Vehari, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#F8F7F4] hover:bg-[#EFEDE7] border border-[#E2DFD6] text-[#1B2A4A] text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                title="Dream Solar Energy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100!2d72.3518256!3d30.0420259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393cebcde0626c79%3A0x31e8618de89de98b!2sDream%20Solar%20Energy!5e0!3m2!1sen!2spk!4v1699000000000!5m2!1sen!2spk"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct Phone, WhatsApp & Email Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:03202200884"
                className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 group-hover:bg-[#1B2A4A] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Call Directly</p>
                  <p className="font-bold text-sm text-[#1B2A4A]">0320-2200884</p>
                </div>
              </a>

              <a
                href="https://wa.me/923202200884"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-200/80 rounded-lg p-4 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-bold text-sm text-emerald-950">0320-2200884</p>
                </div>
              </a>

              <a
                href="mailto:tariqdp36@gmail.com"
                className="sm:col-span-2 flex items-center gap-3 bg-[#F8F7F4]/60 hover:bg-[#F8F7F4] border border-[#E2DFD6]/80 rounded-lg p-4 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EFEDE7] text-[#1B2A4A] flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#1B2A4A] uppercase tracking-wider">Email Us</p>
                  <p className="font-bold text-sm text-sky-900">tariqdp36@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock className="w-4 h-4 text-[#F7941D]" />
                <h4
                  className="font-bold text-sm text-[#1B2A4A] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Operating Hours
                </h4>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                  <span className="font-medium text-slate-600">Saturday – Thursday</span>
                  <span className="font-bold text-[#1B2A4A]">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-600">Friday (Juma)</span>
                  <span className="font-bold text-emerald-700">9:00 AM – 12:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form Column */}
          <div className="lg:col-span-7 bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h3
                className="text-xl font-bold text-[#1B2A4A]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Request Quotation &amp; Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below and submit. Your inquiry will open in WhatsApp directly.
              </p>
            </div>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                <h4 className="font-bold text-lg text-emerald-950">Inquiry Opened in WhatsApp!</h4>
                <p className="text-xs text-slate-600 max-w-sm">
                  Your message has been composed. Our team at Dream Solar Energy will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ahmad"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300-1234567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Required Solution
                    </label>
                    <select
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg px-4 py-2.5 text-sm text-[#14202F] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                    >
                      <option>4 kW Solar System</option>
                      <option>6 kW Solar System</option>
                      <option>8 kW Solar System</option>
                      <option>10 kW Solar System</option>
                      <option>Complete Solar System (Turnkey)</option>
                      <option>Solar Panels Only</option>
                      <option>Solar Inverter Only</option>
                      <option>Lithium / Tubular Batteries</option>
                      <option>Mounting Structures &amp; Accessories</option>
                      <option>Technical Survey &amp; Advice</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      City / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vehari, Burewala, Mailsi"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as approximate monthly electricity bill or appliances you need to run..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg px-4 py-2.5 text-sm text-[#14202F] placeholder-[#5B6472] focus:outline-none focus:ring-2 focus:ring-[#F7941D]/30 focus:border-[#F7941D] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3.5 rounded-lg shadow-sm transition-colors cursor-pointer active:scale-98"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
