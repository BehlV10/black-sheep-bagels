import React from 'react';
import { ShoppingBag, Wine, Coffee, Croissant, Sparkles, MapPin } from 'lucide-react';

export default function MarketOutpost() {
  return (
    <section id="market" className="py-16 sm:py-24 bg-[#faf7f2] border-b border-[#e7ddcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2a241f] text-sheep-cream rounded-3xl overflow-hidden shadow-xl border border-[#443a32]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-amber-300 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cambridgeport Neighborhood Outpost</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Black Sheep Market
              </h2>

              <p className="text-base text-stone-300 leading-relaxed">
                Welcome to our neighborhood market outpost! Every morning, we bring over freshly baked Black Sheep bagels alongside everything you need to build your own legendary bagel sandwich at home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 mb-1 font-semibold text-sm">
                    <Croissant className="w-4 h-4" />
                    <span>Guest Bakery Pastries</span>
                  </div>
                  <p className="text-xs text-stone-400">
                    Featuring Union Square Donuts (Sat & Sun only!), artisanal loaves from Iggy’s, and Nashoba Brook Bakery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 mb-1 font-semibold text-sm">
                    <Wine className="w-4 h-4" />
                    <span>Natural Wines & Beers</span>
                  </div>
                  <p className="text-xs text-stone-400">
                    Carefully curated natural, organic, and biodynamic wines alongside craft local New England beers.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://maps.google.com/?q=101+Magazine+Street+Cambridge+MA+02139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sheep-cream text-sheep-dark font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow"
                >
                  <MapPin className="w-4 h-4 text-sheep-gold" />
                  <span>Visit 101 Magazine St</span>
                </a>
                <span className="text-xs text-stone-400">
                  Open 7 Days a week • Mon-Fri 7am-7pm
                </span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1613866985192-LCV4O6D74Z2QZNYU2LVK/black%2Bsheep%2Bmarket"
                alt="Black Sheep Market Cambridgeport"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a241f] via-transparent to-transparent lg:hidden" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
