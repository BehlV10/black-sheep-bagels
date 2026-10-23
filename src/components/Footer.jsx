import React from 'react';
import { Instagram, MapPin, Phone, Heart, Mail } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#201b17] text-sheep-cream pt-16 pb-12 border-t border-[#3a322b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3b322a]">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐑</span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Black Sheep
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Cambridge’s independent small-batch bagel shop. Hand-rolled, boiled, and baked fresh every morning in Harvard Square & Cambridgeport.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/blacksheepbagelcafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@blacksheepbagelcafe</span>
              </a>
            </div>
          </div>

          {/* Col 2: Harvard Sq Location */}
          <div className="space-y-2 text-xs text-stone-300">
            <h4 className="font-serif text-base font-bold text-white mb-2">Harvard Square Cafe</h4>
            <p className="text-stone-400">56 John F. Kennedy Street<br />Cambridge, MA 02138</p>
            <p className="pt-1 text-stone-400">
              <strong className="text-stone-200">Mon – Fri:</strong> 7am – 3pm (or sellout)<br />
              <strong className="text-stone-200">Sat – Sun:</strong> 8am – 2pm (or sellout)
            </p>
            <p className="pt-1">
              <a href="tel:6179452189" className="text-amber-300 hover:underline">617-945-2189</a>
            </p>
          </div>

          {/* Col 3: Cambridgeport Market */}
          <div className="space-y-2 text-xs text-stone-300">
            <h4 className="font-serif text-base font-bold text-white mb-2">Black Sheep Market</h4>
            <p className="text-stone-400">101 Magazine Street<br />Cambridge, MA 02139</p>
            <p className="pt-1 text-stone-400">
              <strong className="text-stone-200">Mon – Fri:</strong> 7am – 7pm<br />
              <strong className="text-stone-200">Sat:</strong> 8am – 5pm • <strong className="text-stone-200">Sun:</strong> 8am – 3pm
            </p>
            <p className="pt-1">
              <a href="tel:6179451156" className="text-amber-300 hover:underline">617-945-1156</a>
            </p>
          </div>

          {/* Col 4: Quick Nav & Inquiries */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-base font-bold text-white mb-2">Explore</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#menu" className="hover:text-white transition-colors">Sandwiches & Bagels</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locations & Directions</a></li>
              <li><a href="#market" className="hover:text-white transition-colors">Market Outpost & Wine</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Upcoming Tastings</a></li>
              <li>
                <button onClick={onOpenContact} className="text-amber-300 hover:underline">
                  Inquiries: shoshanah@blacksheepbagels.com
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p>© {new Date().getFullYear()} Black Sheep Bagel Cafe. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Modern web redesign powered by</span>
            <span className="font-semibold text-stone-300">React + Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
