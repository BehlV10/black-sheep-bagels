import React from 'react';
import { locations } from '../data/menuData';
import { MapPin, Phone, Clock, ExternalLink, Coffee, ShoppingBag, Sparkles } from 'lucide-react';

export default function LocationsSection() {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-[#f3ece0]/60 border-b border-[#e5d9c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-sheep-gold">
            Visit Us in Cambridge
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sheep-dark mt-2 mb-4">
            Our Two Locations
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
                  {/* Top Header Card */}
                  <div className={`p-6 sm:p-8 ${isFlagship ? 'bg-[#2b2520] text-sheep-cream' : 'bg-[#3b342e] text-sheep-cream'}`}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white">
                        {loc.subtitle}
                      </span>
                      {isFlagship ? (
                        <span className="flex items-center gap-1 text-xs text-amber-300 font-medium">
                          <Coffee className="w-3.5 h-3.5" /> Full Cafe
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs text-amber-300 font-medium">
                          <ShoppingBag className="w-3.5 h-3.5" /> Outpost & Market
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-stone-300 flex items-center gap-1.5 mt-2">
                      <MapPin className="w-4 h-4 text-sheep-gold flex-shrink-0" />
                      <span>{loc.address}, {loc.cityStateZip}</span>
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Hours */}
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
                        <span>What's at this location</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#504134]">
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
                <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-4 border-t border-stone-100 mt-4">
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
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#665444] hover:text-sheep-dark transition-colors ml-auto"
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
