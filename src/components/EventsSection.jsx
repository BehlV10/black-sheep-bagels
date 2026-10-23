import React from 'react';
import { events } from '../data/menuData';
import { Calendar, Instagram, ArrowUpRight, Wine, Sparkles } from 'lucide-react';

export default function EventsSection() {
  return (
    <section id="events" className="py-16 sm:py-20 bg-[#f7f2ea]/70 border-b border-[#e5d9c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-sheep-gold">
              Community & Tastings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sheep-dark mt-2">
              Our events don’t always involve bagels.
            </h2>
            <p className="text-sm text-[#665444] mt-2 max-w-xl">
              From natural wine pop-ups to local culinary collaborations with Cambridge artisans at our Market outpost.
            </p>
          </div>

          <a
            href="https://www.instagram.com/blacksheepbagelcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sheep-dark hover:text-sheep-gold transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Follow @blacksheepbagelcafe for current dates</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#e1d2bc] shadow-sm hover:shadow transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-[#f6ece0] text-sheep-gold flex items-center justify-center mb-4">
                  <Wine className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sheep-gold block mb-1">
                  {evt.date}
                </span>
                <h3 className="font-serif text-lg font-bold text-sheep-dark mb-2">
                  {evt.title}
                </h3>
                <p className="text-xs text-[#6e5d4e] leading-relaxed mb-4">
                  {evt.note}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                📍 {evt.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
