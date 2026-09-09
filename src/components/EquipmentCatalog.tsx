'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Check, Info, Search, Trash2, Plus, Minus } from 'lucide-react';
import { Equipment, EQUIPMENT_LIST } from '@/data/equipment';

export interface CartItem extends Equipment {
  quantity: number;
}

export default function EquipmentCatalog() {
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active Cameroon WhatsApp Phone Number
  const WHATSAPP_NUMBER = '237674319822';

  const navCategories = [
    'All Products',
    'Microcontrollers',
    'Sensors & Modules',
    'Display Modules',
    'Power & Motors',
    'Wiring & Connectors',
  ];

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

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((i) => i.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const title = "*NEW EQUIPMENT ORDER - UV-LAB STORE*\n-----------------------------------\n";
    const items = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}*\n   Qty: ${item.quantity} | Unit: ${item.price.toLocaleString()} FCFA\n   Subtotal: ${(
            item.price * item.quantity
          ).toLocaleString()} FCFA`
      )
      .join('\n\n');
    const total = `\n-----------------------------------\n*TOTAL AMOUNT:* ${totalPrice.toLocaleString()} FCFA`;

    const fullText = encodeURIComponent(title + items + total);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${fullText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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

          {/* Cart Pill Button - Toggles Cart Drawer */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="bg-[#00529b] text-white px-5 py-2 rounded-full flex items-center gap-2 shadow hover:bg-[#003d75] cursor-pointer transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-semibold text-sm">Cart</span>
            {totalCartItems > 0 && (
              <span className="ml-1 bg-white text-[#00529b] font-bold text-xs px-2 py-0.5 rounded-full">
                {totalCartItems}
              </span>
            )}
          </button>
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
                type="button"
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
        <div className="mb-8 flex items-baseline gap-3">
          <h1 className="text-3xl font-extrabold text-[#003366]">
            {selectedCategory}
          </h1>
          <span className="text-gray-400 font-medium text-base">
            ({filteredEquipment.length} items)
          </span>
        </div>

        {filteredEquipment.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500 text-lg">No equipment found matching your selection.</p>
            <button
              type="button"
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

      {/* Slide-over Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-md bg-white h-full p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-[#004a87]" />
                    <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-700 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-4 space-y-4 max-h-[65vh] overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 text-gray-500">
                      <ShoppingCart className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                      <p className="text-base font-semibold text-gray-700">Your cart is empty</p>
                      <p className="text-sm mt-1">Add items from the catalog to place an order.</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between border-b pb-3 gap-3"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-500">
                            {item.price.toLocaleString()} FCFA each
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-7 h-7 bg-gray-100 text-gray-800 rounded flex items-center justify-center hover:bg-gray-200"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-bold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 bg-gray-100 text-gray-800 rounded flex items-center justify-center hover:bg-gray-200"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-sm text-gray-900">
                            {(item.price * item.quantity).toLocaleString()} FCFA
                          </p>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-500 hover:text-red-700 mt-2 flex items-center gap-1 justify-end ml-auto"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {cart.length > 0 && (
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg mb-4 text-gray-900">
                    <span>Total Amount:</span>
                    <span className="text-[#004a87]">{totalPrice.toLocaleString()} FCFA</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleWhatsAppCheckout}
                    className="w-full block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition shadow-md cursor-pointer"
                  >
                    Place Order on WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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