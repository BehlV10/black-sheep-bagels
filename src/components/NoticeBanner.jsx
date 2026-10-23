import React from 'react';
import { Info, Coffee, AlertCircle, Sparkles } from 'lucide-react';

export default function NoticeBanner() {
  return (
    <div className="bg-[#f0e6d6] border-b border-[#e2d4bd] text-[#4a3a2d]">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-sheep-gold/20 text-[#7a4e13]">
              ✨ Cambridge Maaa & Paaa
            </span>
            <span className="font-medium">
              Open for takeout & indoor dining in Harvard Square!
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#6c5847]">
            <span>Order walk-in at the counter</span>
            <span>•</span>
            <a href="#locations" className="underline font-semibold hover:text-sheep-gold">
              View hours & sellout note
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
