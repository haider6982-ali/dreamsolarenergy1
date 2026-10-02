"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import { siteContent } from "@/content/site";

interface QuoteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultProduct?: string;
}

export default function QuoteModal(props: QuoteModalProps) {
  const context = useQuoteModal();
  const isOpen = props.isOpen !== undefined ? props.isOpen : context.isOpen;
  const handleClose = props.onClose || context.closeModal;
  const initialProduct = props.defaultProduct || context.selectedProduct || "Complete Solar System";

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "Vehari City",
    propertyType: "Home (Residential)",
    systemSize: "10 kW",
    monthlyBill: "",
    product: initialProduct,
    message: "",
  });

  const [prevSelectedProduct, setPrevSelectedProduct] = useState(context.selectedProduct);
  if (context.selectedProduct !== prevSelectedProduct) {
    setPrevSelectedProduct(context.selectedProduct);
    if (context.selectedProduct) {
      setFormData((prev) => ({ ...prev, product: context.selectedProduct || "Complete Solar System" }));
    }
  }

  if (!isOpen) return null;

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Dream Solar Energy – Free Quote Request*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📱 Phone: ${formData.phone}\n` +
      `📍 City / Area: ${formData.area}\n` +
      `🏢 Property: ${formData.propertyType}\n` +
      `⚡ System Capacity: ${formData.systemSize}\n` +
      `💡 Approx Monthly Bill: Rs. ${formData.monthlyBill || "N/A"}\n` +
      `🛒 Solution/Product: ${formData.product}\n` +
      (formData.message ? `💬 Note: ${formData.message}` : "")
    );
    window.open(`https://wa.me/${siteContent.meta.whatsappNumber}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        phone: "",
        area: "Vehari City",
        propertyType: "Home (Residential)",
        systemSize: "10 kW",
        monthlyBill: "",
        product: "Complete Solar System",
        message: "",
      });
      handleClose();
    }, 3000);
  };

  const inputClass =
    "w-full bg-solar-alabaster border border-solar-border rounded-[10px] px-4 py-2.5 font-sans text-sm text-solar-navy placeholder-[#5A677D] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 focus:border-[#F59E0B] transition-colors";
  const labelClass = "font-sans text-xs uppercase tracking-wider font-bold text-solar-navy block mb-1.5";

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-solar-navy/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-[22px] border border-solar-border shadow-2xl overflow-hidden z-10 animate-fade-in">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-solar-border bg-solar-alabaster">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-wider text-solar-amber font-bold block mb-0.5">
                DREAM SOLAR ENERGY
              </span>
              <h3 className="font-display font-black text-solar-navy text-2xl leading-tight">
                Get Free Solar Quotation
              </h3>
              <p className="font-sans text-xs text-solar-muted mt-0.5">
                Vehari • Burewala • Mailsi • South Punjab
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full text-solar-muted hover:text-solar-navy hover:bg-solar-border transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step indicator */}
          <div className="flex gap-2 mt-4">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full flex-1 transition-all ${
                  step >= s ? "bg-solar-navy" : "bg-solar-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-solar-emerald/15 text-solar-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-black text-xl text-solar-navy">
                Quotation Sent to WhatsApp!
              </h4>
              <p className="font-sans text-sm text-solar-muted max-w-sm mx-auto">
                Our team at Allama Iqbal Road, Vehari will get back to you shortly with a complete quotation.
              </p>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <p className="font-sans text-xs font-bold text-solar-muted">
                Step 1 of 2 — Contact &amp; Property Details
              </p>
              <div>
                <label className={labelClass}>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Tariq"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="0320-2200884"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>City / Area</label>
                  <input
                    type="text"
                    placeholder="Vehari, Burewala, Mailsi"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className={inputClass}
                  >
                    <option>Home (Residential)</option>
                    <option>Shop / Commercial Plaza</option>
                    <option>Factory / Industrial Shed</option>
                    <option>Agricultural Tube Well</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.name || !formData.phone) {
                      alert("Please provide your name and contact phone number.");
                      return;
                    }
                    setStep(2);
                  }}
                  className="w-full bg-solar-navy hover:bg-solar-amber hover:text-solar-navy text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Continue to System Details →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsApp} className="space-y-4">
              <p className="font-sans text-xs font-bold text-solar-muted">
                Step 2 of 2 — System Requirements
              </p>

              <div>
                <label className={labelClass}>Solar System or Hardware Needed</label>
                <input
                  type="text"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder="e.g. 10 kW Hybrid System, N-Type TOPCon Panels..."
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Desired System Size</label>
                  <select
                    value={formData.systemSize}
                    onChange={(e) => setFormData({ ...formData, systemSize: e.target.value })}
                    className={inputClass}
                  >
                    <option>4 kW Turnkey System</option>
                    <option>6 kW Hybrid System</option>
                    <option>10 kW Hybrid Package</option>
                    <option>15 kW Commercial Package</option>
                    <option>25 kW+ Agricultural / Industrial</option>
                    <option>20 HP Solar Tube Well VFD</option>
                    <option>Tier-1 Hardware Supply Only</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Current Monthly Bill (PKR)</label>
                  <input
                    type="text"
                    placeholder="e.g. Rs. 40,000"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Additional Notes / Questions</label>
                <textarea
                  rows={2}
                  placeholder="e.g. How many ACs you want to run, roof area, net-metering..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-solar-subtle hover:bg-solar-border text-solar-navy font-sans text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 inline-flex items-center justify-center gap-2 bg-solar-emerald hover:bg-[#059669] text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}

          {/* Quick Direct Help */}
          <div className="mt-5 pt-4 border-t border-solar-border flex items-center justify-between font-sans text-xs text-solar-muted">
            <span>Call Directly: <strong className="text-solar-navy">0320-2200884</strong></span>
            <span className="font-semibold text-solar-navy">Tariq Mahmood</span>
          </div>
        </div>
      </div>
    </div>
  );
}
