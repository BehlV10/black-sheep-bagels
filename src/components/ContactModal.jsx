import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, can hook into Formspree or mailto
    const mailto = `mailto:shoshanah@blacksheepbagels.com?subject=${encodeURIComponent(
      `[Website Inquiry] ${formData.subject} from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#ded0bb] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase font-bold tracking-widest text-sheep-gold">
            Get In Touch
          </span>
          <h3 className="font-serif text-2xl font-bold text-sheep-dark mt-1">
            Contact Black Sheep Bagels
          </h3>
          <p className="text-xs sm:text-sm text-[#665444] mt-1">
            Questions, press, wholesale or catering inquiries? Drop us a note or call our cafes directly.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-serif text-xl font-bold text-sheep-dark">Opening your email app...</h4>
            <p className="text-xs text-stone-600">
              Your inquiry has been prepared for <strong className="text-sheep-dark">shoshanah@blacksheepbagels.com</strong>.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-5 py-2 text-xs font-semibold rounded-full bg-sheep-dark text-sheep-cream"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#4e4033] mb-1">Your Name</label>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3.5 py-2 text-sm border border-[#d8c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-sheep-gold/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4e4033] mb-1">Email Address</label>
              <input
                required
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3.5 py-2 text-sm border border-[#d8c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-sheep-gold/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4e4033] mb-1">Inquiry Type</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-3.5 py-2 text-sm border border-[#d8c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-sheep-gold/50 bg-white"
              >
                <option>General Question</option>
                <option>Event & Pop-Up Collab</option>
                <option>Feedback</option>
                <option>Wholesale & Bakery</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4e4033] mb-1">Message</label>
              <textarea
                required
                rows={3}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3.5 py-2 text-sm border border-[#d8c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-sheep-gold/50"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-sheep-dark text-sheep-cream font-medium text-sm hover:bg-[#3d3630] transition-colors shadow"
            >
              <Send className="w-4 h-4" />
              <span>Send Email to Shoshanah</span>
            </button>
          </form>
        )}

        {/* Direct quick details */}
        <div className="mt-6 pt-5 border-t border-stone-200 text-xs text-[#705e4d] space-y-1.5">
          <p className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-sheep-gold" />
            <a href="mailto:shoshanah@blacksheepbagels.com" className="hover:underline">
              shoshanah@blacksheepbagels.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-sheep-gold" />
            <span>Harvard Sq Cafe: 617-945-2189 • Market: 617-945-1156</span>
          </p>
        </div>
      </div>
    </div>
  );
}
