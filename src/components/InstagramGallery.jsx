import React from 'react';
import { instagramPosts } from '../data/menuData';
import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramGallery() {
  return (
    <section id="community" className="py-16 sm:py-20 bg-[#faf7f2] border-b border-[#e7ddcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/70 text-xs font-semibold text-pink-700 mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>@blacksheepbagelcafe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sheep-dark mb-2">
            Connect with us & #BAAAGELS
          </h2>
          <p className="text-sm text-[#665444]">
            Daily morning bakes, sandwich specials, and life around Harvard Square.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-stone-200 shadow-sm border border-[#e8dac7] block"
            >
              <img
                src={post.url}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-white text-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/blacksheepbagelcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5a483a] hover:text-sheep-gold transition-colors"
          >
            <span>See more on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
