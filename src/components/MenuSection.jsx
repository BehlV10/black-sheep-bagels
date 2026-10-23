import React, { useState } from 'react';
import { sandwiches, bagels, spreads, additions, drinks } from '../data/menuData';
import { Search, AlertCircle, Coffee, Check, Plus, Tag } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('sandwiches');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSandwiches = sandwiches.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#faf7f2] border-b border-[#e7ddcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-sheep-gold">
            Made to Order
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sheep-dark mt-2 mb-4">
            Our Cafe Menu
          </h2>
          <p className="text-sm sm:text-base text-[#615244]">
            Served at our Harvard Square location. Every sandwich is crafted on your choice of freshly hand-rolled bagel.
          </p>
        </div>

        {/* Small Kitchen Capacity Advisory Notice */}
        <div className="mb-10 max-w-4xl mx-auto rounded-xl bg-amber-50/80 border border-amber-200/80 p-4 sm:p-5 text-amber-900 shadow-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="font-semibold text-amber-950">
              Bulk Bagel Policy (Preserving Artisan Quality)
            </p>
            <p className="text-amber-800 leading-relaxed">
              We bake in a cozy Harvard Square micro-kitchen with limited daily capacity. 
              Bulk orders of plain/as-is bagels (more than 4 per party on weekdays, or more than 1 per person on weekends) cannot be accommodated so we have enough bagels for every guest.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'sandwiches', label: 'Sandwiches & Toasts' },
            { id: 'bagels', label: 'Hand-Rolled Bagels' },
            { id: 'spreads', label: 'Cream Cheeses & Spreads' },
            { id: 'additions', label: 'Additions & Add-ons' },
            { id: 'drinks', label: 'Coffee & Espresso' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-sheep-dark text-sheep-cream shadow'
                  : 'bg-white/80 hover:bg-white text-[#524436] border border-[#d8c8b2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. Sandwiches Tab */}
        {activeTab === 'sandwiches' && (
          <div className="space-y-6">
            {/* Search Input */}
            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search sandwiches (e.g., lox, avocado, bacon)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#d8c8b2] rounded-full focus:outline-none focus:ring-2 focus:ring-sheep-gold/50 shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSandwiches.map(sandwich => (
                <div 
                  key={sandwich.id}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-[#e5d8c3] hover:border-[#c5b094] shadow-sm hover:shadow transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-sheep-dark">
                          {sandwich.name}
                        </h3>
                        {sandwich.badge && (
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#f4ece0] text-[#7a4f1a]">
                            {sandwich.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-serif text-lg font-bold text-[#8d561d] whitespace-nowrap">
                        {sandwich.price}
                      </span>
                    </div>

                    <p className="text-sm text-[#5f5144] leading-relaxed mb-3">
                      {sandwich.description}
                    </p>

                    {sandwich.suggestedAdditions && (
                      <div className="mt-2 text-xs bg-[#fdf9f4] p-2.5 rounded-lg border border-[#f0e3d0] text-[#725e4c]">
                        <span className="font-semibold text-[#5a483a]">Suggested Additions: </span>
                        {sandwich.suggestedAdditions}
                      </div>
                    )}
                  </div>

                  {sandwich.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-stone-100">
                      {sandwich.tags.map(t => (
                        <span key={t} className="text-[11px] text-[#786655] bg-stone-100 px-2 py-0.5 rounded-full">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Bagels Tab */}
        {activeTab === 'bagels' && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#e5d8c3] shadow-sm">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-sheep-dark mb-2">
                Hand-Rolled Bagel Varieties
              </h3>
              <p className="text-sm text-[#6c5b4b]">
                Kettled and hearth-baked for the quintessential chewy interior and blistered golden crust.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {bagels.map((bagel) => (
                <div 
                  key={bagel.name}
                  className="p-4 rounded-xl bg-[#faf6ef] border border-[#e8dac7] text-left hover:bg-[#f5ecdd] hover:border-[#cfbc9f] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-sheep-gold/80 group-hover:bg-sheep-gold" />
                      {bagel.note.includes('only') ? (
                        <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/80 px-1.5 py-0.5 rounded">
                          Special
                        </span>
                      ) : (
                        <span className="text-[10px] text-stone-400 font-medium">
                          Bake
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif text-base font-bold text-sheep-dark group-hover:text-[#88541e] transition-colors">
                      {bagel.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#7e6955] mt-2 pt-2 border-t border-[#ede2d2]">
                    {bagel.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#ebdfce] text-center text-xs text-[#7c6957]">
              All bagels are vegan except Asiago Cheese. Gluten-free bagel option available (+$1.50).
            </div>
          </div>
        )}

        {/* 3. Spreads Tab */}
        {activeTab === 'spreads' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-sheep-dark text-sheep-cream text-xs font-semibold">
                {spreads.priceNote}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cream Cheeses */}
              <div className="bg-white rounded-2xl p-6 border border-[#e5d8c3] shadow-sm">
                <h3 className="font-serif text-xl font-bold text-sheep-dark mb-4 pb-2 border-b border-stone-100 flex items-center justify-between">
                  <span>Cream Cheeses</span>
                  <span className="text-xs font-sans text-stone-500 font-normal">Scratch whipped</span>
                </h3>
                <ul className="space-y-3">
                  {spreads.creamCheeses.map(item => (
                    <li key={item.name} className="flex items-center justify-between text-sm py-1 border-b border-stone-50">
                      <span className="font-medium text-[#44382d]">{item.name}</span>
                      {item.extra && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                          {item.extra}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Non-Cream Cheeses */}
              <div className="bg-white rounded-2xl p-6 border border-[#e5d8c3] shadow-sm">
                <h3 className="font-serif text-xl font-bold text-sheep-dark mb-4 pb-2 border-b border-stone-100 flex items-center justify-between">
                  <span>Non-Cream Cheeses & Jams</span>
                  <span className="text-xs font-sans text-stone-500 font-normal">Vegan options</span>
                </h3>
                <ul className="space-y-3">
                  {spreads.nonCreamCheeses.map(item => (
                    <li key={item.name} className="flex items-center justify-between text-sm py-1 border-b border-stone-50">
                      <span className="font-medium text-[#44382d]">{item.name}</span>
                      {item.vegan && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Plant-based
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 4. Additions Tab */}
        {activeTab === 'additions' && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#e5d8c3] shadow-sm">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-bold text-sheep-dark mb-1">
                Sandwich Additions & Build-Your-Own
              </h3>
              <p className="text-sm text-[#746251]">
                Customize any sandwich or craft your custom breakfast bagel from scratch.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {additions.map(item => (
                <div key={item.name} className="p-3 rounded-lg bg-[#fbf8f3] border border-[#ebe0cf] flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-[#4a3c2f]">{item.name}</span>
                  <span className="text-xs font-bold text-sheep-gold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Drinks Tab */}
        {activeTab === 'drinks' && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#e5d8c3] shadow-sm">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-sheep-dark mb-1">
                Coffee, Espresso & MEM Tea
              </h3>
              <p className="text-sm text-[#746251]">
                Locally sourced beans roasted to order and MEM specialty loose leaf teas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {drinks.map(drink => (
                <div key={drink.name} className="p-4 rounded-xl bg-[#fbf8f3] border border-[#ece0d0] hover:border-[#cfbd9f] transition-all">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-serif text-base font-bold text-sheep-dark">{drink.name}</h4>
                    <span className="text-sm font-bold text-[#8f5a23] whitespace-nowrap">{drink.price}</span>
                  </div>
                  <p className="text-xs text-[#736354] mb-2">{drink.desc}</p>
                  <span className="text-[11px] text-[#8c7866] bg-white px-2 py-0.5 rounded border border-[#e5d7c3]">
                    {drink.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
