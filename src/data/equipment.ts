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

export const EQUIPMENT_LIST: Equipment[] = [
  {
    id: "arduino-uno-cable",
    name: "Arduino UNO (With Cable)",
    category: "Microcontrollers",
    price: 5500,
    image: "/images/arduino-uno.jpg",
    shortDescription: "ATmega328P microcontroller board with USB programming cable.",
    fullDescription: "Standard Arduino UNO development board featuring 14 digital input/output pins, 6 analog inputs, 16 MHz clock, and USB interface cable included for immediate programming.",
    specs: ["Microcontroller: ATmega328P", "Operating Voltage: 5V", "USB Cable Included"],
  },
  {
    id: "arduino-nano-no-cable",
    name: "Arduino Nano (Without Cable)",
    category: "Microcontrollers",
    price: 3500,
    image: "/images/arduino-nano.jpg",
    shortDescription: "Compact breadboard-friendly microcontroller board.",
    fullDescription: "Miniature microcontroller board based on ATmega328P, designed specifically for breadboard prototyping and space-constrained DIY electronic projects.",
    specs: ["Microcontroller: ATmega328P", "Pin Count: 30 DIP", "Form Factor: Mini Breadboard"],
  },
  {
    id: "arduino-nano-cable",
    name: "Arduino Nano (With Cable)",
    category: "Microcontrollers",
    price: 4000,
    image: "/images/arduino-nano-cable.jpg",
    shortDescription: "Compact Arduino Nano supplied with USB connection cable.",
    fullDescription: "Complete Arduino Nano package including the board and Mini-USB programming cable for immediate breadboard circuit development.",
    specs: ["Microcontroller: ATmega328P", "USB Interface: Mini-USB", "Cable Included"],
  },
  {
    id: "esp32-wroom-32",
    name: "ESP32 Wi-Fi + Bluetooth Board",
    category: "Wireless & IoT",
    price: 4500,
    image: "/images/esp32.jpg",
    shortDescription: "Dual-core Wi-Fi & Bluetooth MCU module.",
    fullDescription: "High-performance ESP32 development board with integrated antenna switches, RF balun, power amplifier, low-noise receive amplifier, and power management modules.",
    specs: ["Wi-Fi: 802.11 b/g/n", "Bluetooth: v4.2 BR/EDR and BLE", "CPU: Xtensa dual-core 32-bit LX6"],
  },
  {
    id: "hc05-bluetooth",
    name: "HC-05 Serial Bluetooth Module",
    category: "Wireless & IoT",
    price: 3500,
    image: "/images/hc05.jpg",
    shortDescription: "Transparent wireless serial connection module.",
    fullDescription: "Designed for transparent wireless serial connection setup. Features Bluetooth v2.0+EDR 3Mbps Modulation with full 2.4GHz radio transceiver and baseband.",
    specs: ["Protocol: Bluetooth v2.0+EDR", "Frequency: 2.4GHz ISM band", "Operating Voltage: 3.6V - 6V"],
  },
  {
    id: "nodemcu-esp8266",
    name: "NodeMCU ESP8266 Wi-Fi Module",
    category: "Wireless & IoT",
    price: 3500,
    image: "/images/nodemcu.jpg",
    shortDescription: "Open-source firmware and development kit for IoT applications.",
    fullDescription: "ESP8266 Wi-Fi enabled development board using Lua scripting or Arduino IDE integration. Features integrated Wi-Fi stack and GPIO pins.",
    specs: ["Wi-Fi Standard: 802.11 b/g/n", "Processor: L106 32-bit RISC", "Operating Voltage: 3.3V"],
  },
  {
    id: "l298n-motor-driver",
    name: "L298N Dual H-Bridge Motor Driver",
    category: "Actuators & Motors",
    price: 2500,
    image: "/images/l298n.jpg",
    shortDescription: "Dual H-bridge driver module for DC motors and stepper motors.",
    fullDescription: "L298N motor driver module capable of driving two DC motors or one 4-wire two-phase stepper motor with speed and direction control.",
    specs: ["Driver Chip: L298N", "Logic Voltage: 5V", "Drive Voltage: 5V-35V"],
  },
  {
    id: "sg90-servo-motor",
    name: "SG90 Micro Servo Motor 9g",
    category: "Actuators & Motors",
    price: 1500,
    image: "/images/sg90.jpg",
    shortDescription: "Lightweight 9g servo motor for RC models and robotics.",
    fullDescription: "Compact SG90 micro servo featuring 180-degree rotation capabilities, ideal for robotic arms, steering mechanisms, and small mechanical projects.",
    specs: ["Weight: 9 grams", "Stall Torque: 1.8 kg/cm", "Operating Speed: 0.1 sec/60 deg"],
  },
  {
    id: "ultrasonic-sensor-hc-sr04",
    name: "HC-SR04 Ultrasonic Distance Sensor",
    category: "Sensors",
    price: 1500,
    image: "/images/hc-sr04.jpg",
    shortDescription: "Non-contact ultrasonic distance measuring module.",
    fullDescription: "Provides 2cm - 400cm non-contact measurement function with range accuracy reaching up to 3mm. Consists of ultrasonic transmitter, receiver, and control circuit.",
    specs: ["Measuring Range: 2cm - 400cm", "Measuring Angle: 15 degree", "Operating Voltage: 5V"],
  },
  {
    id: "dht11-sensor",
    name: "DHT11 Temperature & Humidity Sensor",
    category: "Sensors",
    price: 1500,
    image: "/images/dht11.jpg",
    shortDescription: "Digital composite temperature and humidity sensor.",
    fullDescription: "Calibrated digital signal output temperature and humidity sensor module with reliable long-term stability and fast response speed.",
    specs: ["Humidity Range: 20-90% RH", "Temperature Range: 0-50 °C", "Signal Output: Single-bus digital"],
  }
];