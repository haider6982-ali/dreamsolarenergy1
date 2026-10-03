"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle2,
  Navigation,
  AtSign,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    propertyType: "Residential Home",
    requirement: "10 kW Solar System",
    city: "Vehari",
    monthlyBill: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Dream Solar Energy – Website Contact Inquiry*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `📍 City / Area: ${form.city}\n` +
      `🏢 Property Type: ${form.propertyType}\n` +
      `⚡ Requirement: ${form.requirement}\n` +
      `💡 Monthly Electricity Bill: Rs. ${form.monthlyBill || "N/A"}\n` +
      (form.message ? `💬 Details: ${form.message}` : "")
    );
    window.open(`https://wa.me/923202200884?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        phone: "",
        propertyType: "Residential Home",
        requirement: "10 kW Solar System",
        city: "Vehari",
        monthlyBill: "",
        message: "",
      });
    }, 4500);
  };

  const MAPS_URL =
    "https://www.google.com/maps/place/30%C2%B002'30.4%22N+72%C2%B021'07.0%22E/@30.0417733,72.3493651,633m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.0417733!4d72.35194?hl=en&entry=ttu";

  const faqs = [
    {
      q: "Where is Dream Solar Energy's office located?",
      a: "Our office is on Allama Iqbal Road, near Bank of Punjab, Vehari. You are always welcome to visit us Saturday to Thursday (8:00 AM – 7:00 PM) and Friday morning (9:00 AM – 12:30 PM).",
    },
    {
      q: "Do you visit nearby cities like Burewala, Mailsi, or Lodhran for site surveys?",
      a: "Yes! Our engineers regularly travel across Vehari district, Burewala, Mailsi, Khanewal, Lodhran, and surrounding towns to inspect rooftops and tube wells free of charge.",
    },
    {
      q: "Can I check the authenticity of the solar panels before buying?",
      a: "Yes, 100%! Every panel in our stock comes with an official factory QR code and barcode. You can scan it on your phone right at our shop to check flash test data and warranty validity.",
    },
    {
      q: "How does the MEPCO Green Meter (Net Metering) process work?",
      a: "We handle the entire process from A to Z: preparation of single line electrical diagrams, submitting application to MEPCO, technical inspection, and green meter installation.",
    },
    {
      q: "How long does it take to install a residential solar system?",
      a: "For standard home systems (4 kW to 15 kW), our certified installation team finishes the entire job — frame mounting, wiring, and inverter testing — within 48 to 72 hours.",
    },
  ];

  return (
    <div className="bg-solar-alabaster min-h-screen">
      {/* Page Hero */}
      <PageHero
        crumb="Contact Us"
        eyebrow="Get In Touch"
        title="We Are Ready to Help You"
        accent="Cut Your Electricity Bill"
        description={
          <p>
            Have a question about solar packages, panel prices, or net metering? Call us directly, send a WhatsApp message, or visit our office on Allama Iqbal Road in Vehari.
          </p>
        }
        visualTone="navy"
        visualKicker="Direct Contact"
        visualBody="Tariq Mahmood: 0320-2200884 • Allama Iqbal Road, Vehari"
        photoSrc="/images/solar-maintenance.jpg"
        photoAlt="Dream Solar Energy engineer ready to assist customers"
        stats={[
          { value: "6 Days", label: "Open Mon-Sat" },
          { value: "24/7", label: "WhatsApp Active" },
        ]}
      />

      {/* Main Grid: Info Cards + Inquiry Form */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Contact Details & Office */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Tariq Mahmood Direct Contact Card */}
              <div className="bg-solar-deep border border-white/10 rounded-2xl p-6 sm:p-7 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-solar-amber/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-solar-amber shadow-sm bg-solar-navy shrink-0">
                    <Image
                      src="/tariq-mahmood.png"
                      alt="Tariq Mahmood"
                      fill
                      className="object-cover scale-110"
                      style={{ objectPosition: "50% 18%" }}
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-solar-amber uppercase tracking-wider block mb-0.5">
                      Business Owner & Director
                    </span>
                    <h3 className="text-xl font-display font-black text-white">
                      Tariq Mahmood
                    </h3>
                    <p className="text-slate-300 text-xs">Dream Solar Energy — Vehari</p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 pt-5 border-t border-white/10 flex flex-wrap gap-4 text-xs font-semibold">
                  <a
                    href="tel:03202200884"
                    className="flex items-center gap-1.5 text-white/90 hover:text-solar-amber transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-solar-amber" />
                    0320-2200884
                  </a>
                  <a
                    href="https://wa.me/923202200884"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-white/90 hover:text-emerald-400 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-solar-emerald" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:tariqdp36@gmail.com"
                    className="flex items-center gap-1.5 text-white/90 hover:text-solar-amber transition-colors"
                  >
                    <AtSign className="w-3.5 h-3.5 text-solar-amber" />
                    tariqdp36@gmail.com
                  </a>
                </div>
              </div>

              {/* Showroom & Office Location */}
              <div className="bg-white border border-solar-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-solar-amber/15 text-solar-amber flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-solar-navy">
                      Vehari Office & Store
                    </h3>
                    <p className="text-sm text-solar-muted mt-1 leading-relaxed font-sans">
                      Allama Iqbal Road, near Bank of Punjab<br />
                      Vehari, Punjab, Pakistan<br />
                      <span className="text-xs text-solar-muted/70 font-mono">30°02′30.4″N 72°21′07.0″E</span>
                    </p>
                  </div>
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-solar-subtle hover:bg-solar-border/60 text-solar-navy text-xs font-display font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-solar-amber" />
                  <span>Open in Google Maps Navigation</span>
                </a>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-solar-border shadow-sm bg-white">
                <iframe
                  title="Dream Solar Energy Showroom Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1266.3!2d72.35194!3d30.0417733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzMwLjQiTiA3MsKwMjEnMDcuMCJF!5e0!3m2!1sen!2s!4v1695000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Operating Hours */}
              <div className="bg-white border border-solar-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <Clock className="w-4 h-4 text-solar-amber" />
                  <h4 className="font-display font-bold text-sm text-solar-navy uppercase tracking-wider">
                    Office Hours
                  </h4>
                </div>

                <div className="space-y-2 text-xs sm:text-sm font-sans">
                  <div className="flex items-center justify-between pb-2 border-b border-solar-border">
                    <span className="text-solar-muted">Saturday – Thursday</span>
                    <span className="font-bold text-solar-navy">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-solar-muted">Friday (Juma)</span>
                    <span className="font-bold text-solar-emerald">9:00 AM – 12:30 PM</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Instant WhatsApp Proposal Form */}
            <div className="lg:col-span-7 bg-white border border-solar-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                  <span className="w-5 h-0.5 bg-solar-amber" />
                  <span>Free Assessment</span>
                </div>
                <h3 className="text-2xl font-display font-black text-solar-navy">
                  Request a Free Proposal or Site Visit
                </h3>
                <p className="text-xs sm:text-sm text-solar-muted mt-1 font-sans">
                  Fill in your details below. Your request will open immediately in WhatsApp with all calculations pre-filled!
                </p>
              </div>

              {sent && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your inquiry was opened in WhatsApp. We will reply to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-bold text-solar-navy mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ahmad"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-solar-subtle border border-solar-border rounded-xl px-4 py-2.5 text-sm text-solar-navy focus:outline-hidden focus:border-solar-navy transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold text-solar-navy mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0320-XXXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-solar-subtle border border-solar-border rounded-xl px-4 py-2.5 text-sm text-solar-navy focus:outline-hidden focus:border-solar-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-bold text-solar-navy mb-1.5">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vehari, Burewala, Mailsi"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-solar-subtle border border-solar-border rounded-xl px-4 py-2.5 text-sm text-solar-navy focus:outline-hidden focus:border-solar-navy transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold text-solar-navy mb-1.5">
                      Monthly Electricity Bill (Avg)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rs. 45,000"
                      value={form.monthlyBill}
                      onChange={(e) => setForm({ ...form, monthlyBill: e.target.value })}
                      className="w-full bg-solar-subtle border border-solar-border rounded-xl px-4 py-2.5 text-sm text-solar-navy focus:outline-hidden focus:border-solar-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-bold text-solar-navy mb-1.5">
                      Property Type
                    </label>
                    <select
                      value={form.propertyType}
                      onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                      className="w-full bg-solar-subtle border border-solar-border rounded-xl px-4 py-2.5 text-sm text-solar-navy focus:outline-hidden focus:border-solar-navy transition-colors"
                    >
                      <option>Residential Home (3–10 Marla)</option>
                      <option>Residential Bungalow (1 Kanal+)</option>
                      <option>Commercial Shop / Plaza</option>
                      <option>Agricultural Land / Tube Well</option>
                      <option>Industrial Factory / Cold Storage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold text-solar-navy mb-1.5">
                      Estimated System Size
                    </label>
                    <select
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      className="w-full bg-solar-subtle border border-solar-border rounded-xl px-4 py-2.5 text-sm text-solar-navy focus:outline-hidden focus:border-solar-navy transition-colors"
                    >
                      <option>4 kW Solar System</option>
                      <option>6 kW Solar System</option>
                      <option>8 kW Solar System</option>
                      <option>10 kW Solar System (Net Metering)</option>
                      <option>15 kW – 30 kW Commercial</option>
                      <option>Agricultural Tube Well (15–25 HP)</option>
                      <option>Not Sure — Need Advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-bold text-solar-navy mb-1.5">
                    Any Specific Appliances or Requirements? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Want to run 2 Inverter ACs in the day, plus battery backup for fans at night."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-solar-subtle border border-solar-border rounded-xl px-4 py-2.5 text-sm text-solar-navy focus:outline-hidden focus:border-solar-navy transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-sm py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-solar-muted mt-2">
                    Direct reply from Tariq Mahmood & engineering team within a few minutes.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-subtle border-t border-solar-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
              <span className="w-5 h-0.5 bg-solar-amber" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl font-display font-black text-solar-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-solar-muted text-sm sm:text-base mt-2">
              Quick answers about our solar installations, warranties, and MEPCO net metering.
            </p>
          </div>

          <div className="space-y-3 font-sans">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-solar-border rounded-2xl overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-solar-navy">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-solar-amber shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-solar-muted leading-relaxed border-t border-solar-border/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
