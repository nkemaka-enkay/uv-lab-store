'use client';

import { useState } from 'react';
import Image from 'next/image';
import { generateWhatsAppMessage, triggerWhatsAppRedirect } from '@/lib/whatsapp';

interface Product {
  id: string;
  name: string;
  price_fcfa: number;
  category: string;
  image_url: string;
  stock: number;
}

const CATEGORIES = [
  'All Products',
  'Microcontrollers',
  'Sensors & Modules',
  'Display Modules',
  'Robotics, Drones & Starter Kits',
  '3D Printing & Supplies',
];

const PRODUCTS: Product[] = [
  // Microcontrollers & Boards
  { id: '1', name: 'Arduino UNO', price_fcfa: 5000, category: 'Microcontrollers', image_url: '/images/arduino_uno.jpg', stock: 15 },
  { id: '2', name: 'Arduino UNO (With Cable)', price_fcfa: 5500, category: 'Microcontrollers', image_url: '/images/arduino_uno_with.jpg', stock: 15 },
  { id: '3', name: 'Arduino Nano (Without Cable)', price_fcfa: 3500, category: 'Microcontrollers', image_url: '/images/Arduino_nano_without.jpg', stock: 20 },
  { id: '4', name: 'Arduino Nano (With Cable)', price_fcfa: 4000, category: 'Microcontrollers', image_url: '/images/Arduino_nano_with.jpg', stock: 20 },
  { id: '5', name: 'Arduino Mega', price_fcfa: 12000, category: 'Microcontrollers', image_url: '/images/arduino_mega.jpg', stock: 10 },
  { id: '6', name: 'ESP32 Wi-Fi + Bluetooth Module', price_fcfa: 6000, category: 'Microcontrollers', image_url: '/images/esp32.jpg', stock: 25 },
  { id: '7', name: 'ESP8266 NodeMCU', price_fcfa: 5000, category: 'Microcontrollers', image_url: '/images/esp8266.jpg', stock: 20 },
  { id: '8', name: 'ESP32-CAM Development Board', price_fcfa: 9000, category: 'Microcontrollers', image_url: '/images/esp32_cam.jpg', stock: 12 },
  { id: '9', name: 'Raspberry Pi Pico', price_fcfa: 11000, category: 'Microcontrollers', image_url: '/images/raspberry_pi_pico.jpg', stock: 15 },
  { id: '10', name: 'Raspberry Pi 3 Model B+', price_fcfa: 50000, category: 'Microcontrollers', image_url: '/images/raspberry_pi_Model_B+.jpg', stock: 5 },
  { id: '11', name: 'Raspberry Pi 4 Model B Starter Kit', price_fcfa: 70000, category: 'Microcontrollers', image_url: '/images/raspberry_pi_Model_4 kit.jpg', stock: 5 },

  // Sensors & Modules
  { id: '12', name: 'HC-SR04 Ultrasonic Sensor', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/hc_sr04.jpg', stock: 30 },
  { id: '13', name: 'Infrared Sensor Module', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/Infrared_Sensor.jpg', stock: 30 },
  { id: '14', name: 'Sound Sensor Module', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/Sound.jpg', stock: 25 },
  { id: '15', name: 'Flame Sensor Module', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/Flame.jpg', stock: 25 },
  { id: '16', name: 'Soil Moisture Sensor', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/Soil_Moisture.jpg', stock: 20 },
  { id: '17', name: 'DHT-11 Temperature & Humidity Sensor', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/DHT-11.jpg', stock: 30 },
  { id: '18', name: 'DHT-22 High Accuracy Temperature Sensor', price_fcfa: 4000, category: 'Sensors & Modules', image_url: '/images/DHT-22.jpg', stock: 15 },
  { id: '19', name: 'MPU6050 Accelerometer & Gyroscope', price_fcfa: 3000, category: 'Sensors & Modules', image_url: '/images/MPU6050.jpg', stock: 20 },
  { id: '20', name: 'PIR Motion Sensor', price_fcfa: 1500, category: 'Sensors & Modules', image_url: '/images/PIR_Motion.jpg', stock: 25 },
  { id: '21', name: 'Optical Fingerprint Sensor', price_fcfa: 10000, category: 'Sensors & Modules', image_url: '/images/Fingerprint.jpg', stock: 8 },
  { id: '22', name: 'Analog pH Sensor Kit', price_fcfa: 15000, category: 'Sensors & Modules', image_url: '/images/pH_Sensor.jpg', stock: 6 },
  { id: '23', name: 'MQ Gas Sensor Module', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/MQ_Gas.jpg', stock: 20 },
  { id: '24', name: 'SG90 Micro Servo Motor 9g', price_fcfa: 2000, category: 'Sensors & Modules', image_url: '/images/servo_motor.jpg', stock: 30 },

  // Display Modules
  { id: '25', name: '0.96 inch OLED Display', price_fcfa: 3000, category: 'Display Modules', image_url: '/images/oled_display.jpg', stock: 15 },
  { id: '26', name: 'LCD 1602 Display (With I2C)', price_fcfa: 3500, category: 'Display Modules', image_url: '/images/LCD_1602.jpg', stock: 20 },
  { id: '27', name: 'LCD 2004 Display (With I2C)', price_fcfa: 5000, category: 'Display Modules', image_url: '/images/LCD2004.jpg', stock: 12 },
  { id: '28', name: '2.4 inch TFT Touch Display with Stylus', price_fcfa: 6500, category: 'Display Modules', image_url: '/images/TFT_Touch_Display.jpg', stock: 10 },
  { id: '29', name: 'TM1637 4-Digit 7-Segment Display', price_fcfa: 2500, category: 'Display Modules', image_url: '/images/TM1637.jpg', stock: 15 },

  // Robotics, Drones & Starter Kits
  { id: '30', name: '3-Wheel Smart Robot Car Kit', price_fcfa: 7000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/3_Wheel_Car_Kit.jpg', stock: 10 },
  { id: '31', name: '4-Wheel Smart Robot Car Kit', price_fcfa: 10000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/4_Wheel_Car_Kit.jpg', stock: 10 },
  { id: '32', name: '4DOF Acrylic Robot Arm Kit', price_fcfa: 25000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/4DOF.jpg', stock: 5 },
  { id: '33', name: 'Complete Drone Assembly Kit', price_fcfa: 300000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/Complete_Drone_Kit.jpg', stock: 2 },
  { id: '34', name: 'Pixhawk Flight Controller Kit', price_fcfa: 180000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/Pixhawk_Flight_Controller_Kit.jpg', stock: 3 },
  { id: '35', name: 'FlySky Remote Control Transmitter', price_fcfa: 40000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/FlySky_Remote_Control.jpg', stock: 5 },
  { id: '36', name: 'UV-STD Basic Starter Kit', price_fcfa: 24000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/UVSTDStarterKit.jpg', stock: 8 },
  { id: '37', name: 'Breadboard 830 Point + Wire Kit', price_fcfa: 5000, category: 'Robotics, Drones & Starter Kits', image_url: '/images/breadboard_kit.jpg', stock: 25 },

  // 3D Printing & Supplies
  { id: '38', name: 'PLA Filament (1.75mm, 1kg)', price_fcfa: 16000, category: '3D Printing & Supplies', image_url: '/images/PLA_Filament.jpg', stock: 10 },
  { id: '39', name: 'ABS Filament (1.75mm, 1kg)', price_fcfa: 15000, category: '3D Printing & Supplies', image_url: '/images/ABS_Filament.jpg', stock: 10 },
];

export default function StoreFront() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Form input state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [loading, setLoading] = useState(false);

  // Cart helper functions
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const totalFCFA = cart.reduce(
    (sum, item) => sum + item.product.price_fcfa * item.quantity,
    0
  );

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Filtered product selection
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Direct WhatsApp Checkout trigger
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return alert('Your cart is empty.');
    if (!customerName || !customerPhone) return alert('Please enter your contact details.');

    setLoading(true);

    const formattedItems = cart.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price_fcfa: item.product.price_fcfa,
    }));

    const payload = {
      items: formattedItems,
      totalFCFA,
    };

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        const message = generateWhatsAppMessage(
          payload.items,
          customerName,
          customerPhone,
          payload.totalFCFA
        );

        const shopWhatsAppNumber = '237674319822';
        triggerWhatsAppRedirect(shopWhatsAppNumber, message);

        setCart([]);
        setCustomerName('');
        setCustomerPhone('');
        setIsCartOpen(false);
      } else {
        alert('Order submission failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('An error occurred contacting the checkout API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5FAFF] text-slate-800 font-sans relative">
      {/* Announcement Bar */}
      <div className="bg-[#EBF5FF] text-blue-900 text-xs py-2 px-6 flex justify-between items-center font-medium border-b border-[#D7E9F9]">
        <span>⚡ Direct WhatsApp ordering & Express delivery across Cameroon</span>
        <div className="hidden md:flex gap-6 items-center">
          <span>EDUCATE • INSPIRE • INNOVATE</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-[#EBF5FF] shadow-sm backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image src="/images/uva_logo.jpeg" alt="UVA Logo" fill className="object-contain" priority />
            </div>
            <div>
              <span className="text-4xl font-bold tracking-tight text-[#014A84]">
                UV-LAB <span className="font-light text-[#81B1D7]">Store</span>
              </span>
            </div>
          </div>

          {/* Search Box */}
          <div className="flex-1 max-w-xl flex border border-[#D7E9F9] rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-300">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components, sensors, microcontrollers..."
              className="w-full px-5 py-2.5 text-sm outline-none text-slate-600 bg-white"
            />
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-[#01579B] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#014A84] transition shadow-md flex items-center gap-2"
          >
            <span>🛒 Cart</span>
            {totalItemsCount > 0 && (
              <span className="bg-amber-400 text-slate-900 text-xs px-2 py-0.5 rounded-full font-black">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Category Tabs */}
        <nav className="bg-[#014A84] text-white text-sm font-medium border-t border-[#01579B]">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-3 overflow-x-auto py-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-lg whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-[#01579B] text-white font-bold shadow-inner'
                    : 'hover:bg-[#01579B]/50 text-blue-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Product Catalog Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-[#014A84]">
            {selectedCategory}
            <span className="text-sm font-normal text-slate-500 ml-3">
              ({filteredProducts.length} items)
            </span>
          </h2>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-[#EBF5FF] rounded-2xl p-12 text-center text-slate-500">
            No equipment matches your search query.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#EBF5FF] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#D7E9F9] transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#01579B] bg-[#EBF5FF] px-2.5 py-1 rounded-md border border-[#D7E9F9]">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-slate-800 text-base mt-2 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Price</span>
                    <span className="text-lg font-black text-[#014A84]">
                      {product.price_fcfa.toLocaleString()} <span className="text-xs">FCFA</span>
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#01579B] text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-[#014A84] transition shadow-sm"
                  >
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-[#F5FAFF]">
              <div>
                <h3 className="font-black text-lg text-[#014A84]">Your Cart</h3>
                <p className="text-xs text-slate-500">{totalItemsCount} equipment selected</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 divide-y">
              {cart.length === 0 ? (
                <p className="text-center text-slate-400 py-12">Your cart is empty.</p>
              ) : (
                cart.map(({ product, quantity }) => (
                  <div key={product.id} className="py-4 flex gap-4 items-center">
                    <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={product.image_url} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{product.name}</h4>
                      <p className="text-xs font-semibold text-[#01579B]">
                        {(product.price_fcfa * quantity).toLocaleString()} FCFA
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-6 h-6 bg-slate-100 rounded text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-6 h-6 bg-slate-100 rounded text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-[#F5FAFF]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-slate-600">Total Amount:</span>
                  <span className="text-xl font-black text-[#014A84]">{totalFCFA.toLocaleString()} FCFA</span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number (e.g. 670000000)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>💬 Send Order via WhatsApp</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}