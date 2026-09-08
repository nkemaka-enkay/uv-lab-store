'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Check, Info, Search } from 'lucide-react';
import { Equipment, EQUIPMENT_LIST } from '@/data/equipment';

export default function EquipmentCatalog() {
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null);
  const [cart, setCart] = useState<Equipment[]>([]);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Fixed categories matching your target layout design
  const navCategories = [
    'All Products',
    'Microcontrollers',
    'Sensors & Modules',
    'Display Modules',
    'Power & Motors',
    'Wiring & Connectors',
  ];

  // Helper mapping function to group equipment data into navigation tabs
  const filterByNavCategory = (item: Equipment, category: string) => {
    if (category === 'All Products') return true;

    const cat = item.category.toLowerCase();
    const name = item.name.toLowerCase();

    if (category === 'Microcontrollers') {
      return cat.includes('microcontroller') || name.includes('arduino') || name.includes('esp');
    }
    if (category === 'Sensors & Modules') {
      return cat.includes('sensor') || cat.includes('wireless') || name.includes('module') || name.includes('gps');
    }
    if (category === 'Display Modules') {
      return cat.includes('display') || name.includes('lcd') || name.includes('oled') || name.includes('tft');
    }
    if (category === 'Power & Motors') {
      return cat.includes('power') || cat.includes('actuator') || name.includes('motor') || name.includes('converter') || name.includes('supply');
    }
    if (category === 'Wiring & Connectors') {
      return cat.includes('tool') || cat.includes('relay') || name.includes('wire') || name.includes('jumper') || name.includes('adapter');
    }

    return item.category === category;
  };

  // Filter list by both selected navigation category and search term
  const filteredEquipment = EQUIPMENT_LIST.filter((item) => {
    const matchesCategory = filterByNavCategory(item, selectedCategory);
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: Equipment, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => [...prev, item]);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="w-full bg-white min-h-screen select-none font-sans">
      {/* Top Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedCategory('All Products')}>
            <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-black shadow-sm">
              UV
            </div>
            <div className="text-xl font-bold tracking-tight">
              <span className="text-blue-900">UV-LAB</span>{' '}
              <span className="text-blue-400 font-normal">Store</span>
            </div>
          </div>

          {/* Centered Search Bar */}
          <div className="relative flex-1 max-w-xl hidden sm:block">
            <input
              type="text"
              placeholder="Search components, sensors, microcontrollers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-blue-100 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700 shadow-sm"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300 pointer-events-none" />
          </div>

          {/* Cart Pill Button */}
          <div className="bg-[#00529b] text-white px-5 py-2 rounded-full flex items-center gap-2 shadow hover:bg-[#003d75] cursor-pointer transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span className="font-semibold text-sm">Cart</span>
            {cart.length > 0 && (
              <span className="ml-1 bg-white text-[#00529b] font-bold text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="p-2 sm:hidden border-t border-gray-100">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search components, sensors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-blue-100 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
          </div>
        </div>
      </header>

      {/* Dark Blue Navigation Bar */}
      <nav className="bg-[#004a87] text-white w-full">
        <div className="max-w-7xl mx-auto px-4 flex items-center overflow-x-auto scrollbar-none py-2 gap-2">
          {navCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-2 border-white bg-[#003766] text-white font-bold'
                    : 'hover:bg-white/10 text-blue-100'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header with Item Count */}
        <div className="mb-8 flex items-baseline gap-3">
          <h1 className="text-3xl font-extrabold text-[#003366]">
            {selectedCategory}
          </h1>
          <span className="text-gray-400 font-medium text-base">
            ({filteredEquipment.length} items)
          </span>
        </div>

        {/* Equipment Grid */}
        {filteredEquipment.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500 text-lg">No equipment found matching your selection.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#004a87] text-white text-sm font-semibold rounded-lg shadow hover:bg-[#003366] transition-colors"
            >
              Show All Equipment
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEquipment.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                {/* Clickable Area */}
                <div onClick={() => setSelectedItem(item)} className="cursor-pointer">
                  <div className="relative w-full h-48 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://via.placeholder.com/300x200?text=UV-LAB+Equipment';
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full opacity-80 group-hover:opacity-100">
                      <Info className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <span className="text-base font-bold text-gray-900">
                    {item.price.toLocaleString()} FCFA
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(item, e)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                      addedId === item.id
                        ? 'bg-green-600 text-white'
                        : 'bg-[#004a87] hover:bg-[#003366] text-white'
                    }`}
                  >
                    {addedId === item.id ? (
                      <>
                        <Check className="w-4 h-4" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" /> + Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden p-6"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 h-56 md:h-auto relative rounded-xl overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://via.placeholder.com/300x200?text=UV-LAB+Equipment';
                    }}
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {selectedItem.name}
                    </h3>
                    <p className="text-2xl font-extrabold text-gray-900 mt-2">
                      {selectedItem.price.toLocaleString()} FCFA
                    </p>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      {selectedItem.fullDescription}
                    </p>

                    <div className="mt-4">
                      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Key Specifications
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {selectedItem.specs.map((spec, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(selectedItem, e)}
                      className="flex-1 py-3 bg-[#004a87] hover:bg-[#003366] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}