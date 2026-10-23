import React from 'react';
import { locations } from '../data/menuData';
import { MapPin, Phone, Clock, ExternalLink, Coffee, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LocationsSection() {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-[#f3ece0]/60 border-b border-[#e5d9c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-sheep-gold">
            Visit Us in Cambridge
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sheep-dark mt-2 mb-4">
            Our Two Cambridge Locations
          </h2>
          <p className="text-sm sm:text-base text-[#615244]">
            Whether you want a warm breakfast sandwich in the heart of Harvard Square or artisan groceries and fresh bagels in Cambridgeport, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {locations.map((loc) => {
            const isFlagship = loc.type === 'flagship';

            return (
              <div
                key={loc.name}
                className="bg-white rounded-2xl border border-[#decbb2] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image banner for each location */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-stone-200">
                    <img
                      src={
                        isFlagship
                          ? "https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1586712895862-SF4H7VGEJMYHZL63Z1OX/IMG_4625.jpg"
                          : "https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1613866985192-LCV4O6D74Z2QZNYU2LVK/black%2Bsheep%2Bmarket"
                      }
                      alt={loc.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white inline-block mb-1">
                          {loc.subtitle}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                          {loc.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Address & Quick Overview */}
                    <div>
                      <p className="text-sm font-semibold text-sheep-dark flex items-center gap-1.5 mb-2">
                        <MapPin className="w-4 h-4 text-sheep-gold flex-shrink-0" />
                        <span>{loc.address}, {loc.cityStateZip}</span>
                      </p>
                      <p className="text-xs text-[#665444] leading-relaxed">
                        {isFlagship
                          ? "Our original Harvard Square cafe. Full made-to-order breakfast sandwich menu, kettle-boiled bagels, MEM specialty teas, and espresso bar with indoor seating."
                          : "Our neighborhood Cambridgeport market. Fresh bagels brought over daily with DIY spreads, guest pastries from Union Square Donuts & Iggy's, craft beers, and natural wines."}
                      </p>
                    </div>

                    {/* Exact Official Hours */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-[#86684b] mb-3 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sheep-gold" />
                        <span>Hours of Operation</span>
                      </h4>
                      <div className="space-y-2 bg-[#fbf8f3] p-4 rounded-xl border border-[#ebe0cf]">
                        {loc.hours.map((h, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                            <span className="font-semibold text-sheep-dark">{h.days}:</span>
                            <span className="text-[#6d5b4a]">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights / Features */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-[#86684b] mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-sheep-gold" />
                        <span>Location Offerings</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#504134]">
                        {loc.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sheep-gold flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 mt-2">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sheep-dark hover:text-sheep-gold transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`tel:${loc.phoneClean}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#665444] hover:text-sheep-dark transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sheep-gold" />
                    <span>{loc.phone}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
