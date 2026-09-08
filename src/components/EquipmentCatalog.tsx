'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Check, Info } from 'lucide-react';

export interface Equipment {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  specs: string[];
}

const EQUIPMENT_LIST: Equipment[] = [
  {
    id: "arduino-uno-r3",
    name: "Arduino Uno R3 Microcontroller Board",
    category: "Microcontrollers",
    price: 6500,
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=500&q=80",
    shortDescription: "ATmega328P-based microcontroller board for prototyping electronic components.",
    fullDescription: "The Arduino Uno R3 features 14 digital input/output pins, 6 analog inputs, a 16 MHz ceramic resonator, USB connection, power jack, and ICSP header. Ideal for automation, robotics, and embedded systems development.",
    specs: ["Microcontroller: ATmega328P", "Operating Voltage: 5V", "Digital I/O Pins: 14"],
  },
  {
    id: "esp32-wroom-32",
    name: "ESP32 Wi-Fi + Bluetooth Board",
    category: "Wireless & IoT",
    price: 4500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
    shortDescription: "Dual-core Wi-Fi & Bluetooth MCU module for IoT hardware projects.",
    fullDescription: "High-performance ESP32 development board with integrated antenna switches, RF balun, power amplifier, low-noise receive amplifier, and power management modules.",
    specs: ["Wi-Fi: 802.11 b/g/n", "Bluetooth: v4.2 BR/EDR and BLE", "CPU: Xtensa dual-core 32-bit LX6"],
  },
  {
    id: "hc05-bluetooth-module",
    name: "HC-05 Serial Bluetooth Module",
    category: "Wireless & IoT",
    price: 3500,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500&q=80",
    shortDescription: "Transparent wireless serial connection setup for microcontrollers.",
    fullDescription: "Designed for transparent wireless serial connection setup. Features Bluetooth v2.0+EDR 3Mbps Modulation with full 2.4GHz radio transceiver and baseband.",
    specs: ["Protocol: Bluetooth v2.0+EDR", "Frequency: 2.4GHz ISM band", "Operating Voltage: 3.6V - 6V"],
  },
];

export default function EquipmentCatalog() {
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null);
  const [cart, setCart] = useState<Equipment[]>([]);
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (item: Equipment, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => [...prev, item]);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 select-none">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">UV-LAB Equipment Catalog</h2>
          <p className="text-gray-600">Click any product image to view details.</p>
        </div>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow">
          <ShoppingCart className="w-5 h-5" />
          <span className="font-semibold">Cart ({cart.length})</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {EQUIPMENT_LIST.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            {/* Clickable Card Body */}
            <div 
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer"
            >
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
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

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
              <span className="text-lg font-bold text-gray-900">
                {item.price.toLocaleString()} FCFA
              </span>
              <button
                type="button"
                onClick={(e) => handleAddToCart(item, e)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors z-10 ${
                  addedId === item.id
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {addedId === item.id ? (
                  <>
                    <Check className="w-4 h-4" /> Added
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
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
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden p-6"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 h-48 md:h-auto relative rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {selectedItem.name}
                    </h3>
                    <p className="text-xl font-extrabold text-gray-900 mt-2">
                      {selectedItem.price.toLocaleString()} FCFA
                    </p>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      {selectedItem.fullDescription}
                    </p>

                    <div className="mt-4">
                      <h4 className="text-xs font-bold text-gray-700 uppercase">Key Specs</h4>
                      <ul className="mt-1 space-y-1">
                        {selectedItem.specs.map((spec, idx) => (
                          <li key={idx} className="text-xs text-gray-500">
                            • {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(selectedItem, e)}
                      className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold"
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
    </section>
  );
}