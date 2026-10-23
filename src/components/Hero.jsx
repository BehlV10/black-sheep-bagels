import React from 'react';
import { ArrowDown, MapPin, Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#e9dfcf]">
      {/* Background soft texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#d3c4ad_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede2d1] border border-[#d8c5aa] text-xs font-semibold uppercase tracking-wider text-[#755024]">
              <Sparkles className="w-3.5 h-3.5 text-sheep-gold" />
              <span>Harvard Square & Cambridgeport</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-sheep-dark leading-[1.12]">
              Hand-rolled, boiled & baked fresh <span className="italic font-normal text-[#8c5923]">every single morning</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#5a4d40] leading-relaxed max-w-2xl">
              Welcome to Black Sheep Bagel Cafe — Cambridge’s independent bagel shop. 
              We boil and bake traditional small-batch bagels, whip bold housemade cream cheeses, 
              and craft elevated breakfast sandwiches right on JFK Street.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-sheep-dark text-sheep-cream font-medium text-sm hover:bg-[#38312b] transition-all shadow hover:shadow-md gap-2"
              >
                <span>View Full Menu</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#locations"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#42362b] border border-[#d5c3aa] font-medium text-sm transition-all shadow-sm gap-2"
              >
                <MapPin className="w-4 h-4 text-sheep-gold" />
                <span>Locations & Hours</span>
              </a>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e3d5be] max-w-xl">
              <div>
                <p className="font-serif text-2xl font-bold text-sheep-dark">12+</p>
                <p className="text-xs text-[#705f50]">Bagel Flavors Daily</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-sheep-dark">13+</p>
                <p className="text-xs text-[#705f50]">Scratch Cream Cheeses</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-sheep-dark">2</p>
                <p className="text-xs text-[#705f50]">Cambridge Locations</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Card: Actual Bagel Spread */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-stone-200">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1586712895862-SF4H7VGEJMYHZL63Z1OX/IMG_4625.jpg"
                  alt="Black Sheep Bagel Cafe table spread with Lox bagels, avocado toast, and specialty espresso"
                  className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-200">Fresh Daily Spread</span>
                    <h3 className="font-serif text-xl font-bold">Lox Classics, Avocado Toasts & Lattes</h3>
                    <p className="text-xs text-stone-200">Scratch-whipped cream cheeses & specialty brews</p>
                  </div>
                </div>
              </div>

              {/* Floating secondary photo: Friendly Counter & Espresso */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 rounded-xl overflow-hidden shadow-lg border-4 border-white aspect-square bg-stone-100">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1570990486135-08LNKJCPF5V9W13EEK3X/IMG_20190819_104153_718.jpg"
                  alt="Barista serving fresh espresso at the Harvard Square counter"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-md border border-[#dfd2be] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-semibold text-sheep-dark">Open Daily for Takeout & Seating</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
