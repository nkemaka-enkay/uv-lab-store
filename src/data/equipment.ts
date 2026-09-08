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
  // --- MICROCONTROLLERS & BOARDS ---
  {
    id: "arduino-mega",
    name: "Arduino Mega 2560 Board",
    category: "Microcontrollers",
    price: 9500,
    image: "/images/arduino-mega.jpg",
    shortDescription: "ATmega2560 microcontroller board for complex automation projects.",
    fullDescription: "High-capacity microcontroller featuring 54 digital I/O pins, 16 analog inputs, 4 UARTs, and 256 KB flash memory.",
    specs: ["Microcontroller: ATmega2560", "Digital I/O: 54 pins", "Flash Memory: 256 KB"]
  },
  {
    id: "arduino-nano",
    name: "Arduino Nano Board",
    category: "Microcontrollers",
    price: 3500,
    image: "/images/arduino-nano.jpg",
    shortDescription: "Compact breadboard-friendly microcontroller board.",
    fullDescription: "ATmega328P-based miniature board designed for breadboard prototyping and compact electronic systems.",
    specs: ["Microcontroller: ATmega328P", "Digital I/O: 14 pins", "Form Factor: Mini Breadboard"]
  },
  {
    id: "esp32",
    name: "ESP32 Wi-Fi + Bluetooth Board",
    category: "Wireless & IoT",
    price: 4500,
    image: "/images/esp32.jpg",
    shortDescription: "Dual-core Wi-Fi & Bluetooth MCU module for IoT solutions.",
    fullDescription: "High-performance ESP32 development board featuring integrated Wi-Fi, Bluetooth LE, and dual-core processing.",
    specs: ["Connectivity: Wi-Fi & BLE", "CPU: Xtensa Dual-Core 32-bit", "Operating Voltage: 3.3V"]
  },
  {
    id: "esp32-cam",
    name: "ESP32-CAM Board with OV2640",
    category: "Wireless & IoT",
    price: 5500,
    image: "/images/esp32-cam.jpg",
    shortDescription: "Compact camera development module with Wi-Fi and Bluetooth.",
    fullDescription: "ESP32-CAM module supporting image transmission, facial recognition, and micro SD card slot.",
    specs: ["Camera: OV2640 2MP", "Wireless: Wi-Fi + Bluetooth", "Storage: MicroSD Slot"]
  },
  {
    id: "esp8266-nodemcu",
    name: "ESP8266 NodeMCU Board",
    category: "Wireless & IoT",
    price: 3500,
    image: "/images/nodemcu.jpg",
    shortDescription: "Open-source Wi-Fi development board for IoT projects.",
    fullDescription: "Integrated ESP8266 module with USB interface, ideal for quick smart home and Wi-Fi embedded projects.",
    specs: ["Wi-Fi Standard: 802.11 b/g/n", "Flash Memory: 4MB", "Interface: Micro-USB"]
  },
  {
    id: "esp-01e",
    name: "ESP-01E Wi-Fi Transceiver",
    category: "Wireless & IoT",
    price: 2000,
    image: "/images/esp-01e.jpg",
    shortDescription: "Ultracompact serial-to-Wi-Fi transceiver module.",
    fullDescription: "Miniature Wi-Fi module enabling serial communication over local wireless networks.",
    specs: ["Standard: 802.11 b/g/n", "Operating Voltage: 3.3V", "Interface: UART"]
  },

  // --- COMMUNICATION & WIRELESS ---
  {
    id: "gsm-900a-big",
    name: "GSM 900A / SIM900 Module",
    category: "Wireless & IoT",
    price: 8500,
    image: "/images/gsm-900a.jpg",
    shortDescription: "Dual-band GSM/GPRS module for cellular communication.",
    fullDescription: "Allows microcontrollers to send SMS messages, handle voice calls, and connect to GPRS networks.",
    specs: ["Band: Dual-Band 900/1800 MHz", "Interface: UART", "Functions: SMS, Voice, GPRS"]
  },
  {
    id: "gsm-sim800c-800l",
    name: "GSM SIM800 / SIM800L Module",
    category: "Wireless & IoT",
    price: 4500,
    image: "/images/sim800l.jpg",
    shortDescription: "Compact cellular GSM/GPRS transceiver module.",
    fullDescription: "Ultra-small cellular module providing text messaging and data transmission capability.",
    specs: ["Quad-Band: 850/900/1800/1900MHz", "SIM Size: Micro SIM", "Operating Voltage: 3.7V - 4.2V"]
  },
  {
    id: "gsm-gps-sim800",
    name: "GSM/GPS GPRS SIM800 Combo Board",
    category: "Wireless & IoT",
    price: 11000,
    image: "/images/sim800-gps.jpg",
    shortDescription: "Combined cellular communication and GPS positioning module.",
    fullDescription: "All-in-one board providing real-time location tracking alongside GSM cellular transmission.",
    specs: ["Features: GSM + GPS + GPRS", "Interface: Serial UART", "Antenna: Dual GSM/GPS Included"]
  },
  {
    id: "gps-neo-7",
    name: "GPS NEO-7M Module",
    category: "Sensors & Positioning",
    price: 6000,
    image: "/images/gps-neo-7.jpg",
    shortDescription: "High-accuracy satellite positioning module with antenna.",
    fullDescription: "NEO-7M positioning engine delivering high precision location tracking for navigation systems.",
    specs: ["Channels: 56 Channels", "Update Rate: Up to 10 Hz", "Interface: UART"]
  },
  {
    id: "nrfl2401-combo",
    name: "nRF24L01 Wireless Transceiver (Standard / Long Range)",
    category: "Wireless & IoT",
    price: 2500,
    image: "/images/nrf24l01.jpg",
    shortDescription: "2.4GHz RF wireless communication module with power amplifier support.",
    fullDescription: "High-speed 2.4GHz RF transceiver module for multi-device wireless communication and telemetry.",
    specs: ["Frequency: 2.4 GHz ISM Band", "Data Rate: Up to 2 Mbps", "Interface: SPI"]
  },
  {
    id: "rfid-sensor",
    name: "RC522 RFID Reader Module with Card & Tag",
    category: "Wireless & IoT",
    price: 2500,
    image: "/images/rfid-rc522.jpg",
    shortDescription: "13.56MHz contactless RFID reader module.",
    fullDescription: "Compact RFID access control reader including key fob and card for security identification systems.",
    specs: ["Frequency: 13.56 MHz", "Protocol: SPI", "Operating Voltage: 3.3V"]
  },

  // --- DISPLAYS ---
  {
    id: "lcd-1602-i2c",
    name: "LCD1602 Display with I2C Module",
    category: "Displays",
    price: 3000,
    image: "/images/lcd1602.jpg",
    shortDescription: "16x2 character alphanumeric display with 2-wire I2C interface.",
    fullDescription: "Blue/Green backlit LCD showing 16 characters across 2 lines with easy 2-pin I2C setup.",
    specs: ["Characters: 16x2", "Interface: I2C", "Operating Voltage: 5V"]
  },
  {
    id: "lcd-2004-i2c",
    name: "LCD2004 Display with I2C Module",
    category: "Displays",
    price: 4500,
    image: "/images/lcd2004.jpg",
    shortDescription: "20x4 character alphanumeric display with I2C interface.",
    fullDescription: "Large 20-character by 4-line LCD screen for displaying extensive system data.",
    specs: ["Characters: 20x4", "Interface: I2C", "Backlight: Blue with White Text"]
  },
  {
    id: "oled-display",
    name: "0.96 inch OLED Display Module",
    category: "Displays",
    price: 3000,
    image: "/images/oled.jpg",
    shortDescription: "128x64 high-contrast monochrome OLED display.",
    fullDescription: "Self-illuminating OLED display featuring sharp resolution and ultra-low power consumption.",
    specs: ["Resolution: 128x64 pixels", "Interface: I2C / SPI", "Diagonal Size: 0.96 inch"]
  },
  {
    id: "tft-screen",
    name: "TFT Graphic Screen Display",
    category: "Displays",
    price: 6500,
    image: "/images/tft-screen.jpg",
    shortDescription: "Full-color TFT LCD graphic display module.",
    fullDescription: "Vibrant color display module for user interfaces, graphics, and custom instrument panels.",
    specs: ["Color Depth: 65K Colors", "Interface: SPI / Parallel", "Backlight: LED"]
  },
  {
    id: "voltage-display",
    name: "Digital Panel LED Voltage Display",
    category: "Displays",
    price: 1500,
    image: "/images/voltage-display.jpg",
    shortDescription: "Compact 3-digit DC voltmeter panel.",
    fullDescription: "Directly measures and displays DC voltage on a bright 7-segment digital display.",
    specs: ["Range: 0V - 30V DC", "Display: 3-Digit 0.28\" LED", "Accuracy: ±1%"]
  },

  // --- MOTORS, DRIVERS & ACTUATORS ---
  {
    id: "bldc-1000kv",
    name: "A2212 1000KV Brushless Motor",
    category: "Actuators & Motors",
    price: 6000,
    image: "/images/bldc-1000kv.jpg",
    shortDescription: "High-efficiency 1000KV brushless motor for RC quadcopters and drones.",
    fullDescription: "Powerful 3-phase brushless DC motor for high-thrust propeller setups and drone propulsion.",
    specs: ["KV Rating: 1000KV", "Max Efficiency Current: 4-10A", "Shaft Diameter: 3.17mm"]
  },
  {
    id: "esc-30a",
    name: "30A Electronic Speed Controller (ESC)",
    category: "Actuators & Motors",
    price: 4500,
    image: "/images/esc-30a.jpg",
    shortDescription: "Speed controller module for brushless motors.",
    fullDescription: "Heavy-duty 30A ESC with built-in BEC for driving brushless motors in RC planes and multirotors.",
    specs: ["Continuous Current: 30A", "Burst Current: 40A", "BEC Output: 5V / 2A"]
  },
  {
    id: "1245-propeller",
    name: "1245 Propeller Pair",
    category: "Actuators & Motors",
    price: 1500,
    image: "/images/1245-propeller.jpg",
    shortDescription: "12x4.5 inch counter-rotating drone propeller pair.",
    fullDescription: "High-rigidity CW/CCW propeller set optimized for 1000KV brushless motors.",
    specs: ["Dimensions: 12x4.5 inches", "Rotation: CW & CCW pair", "Material: ABS Plastic"]
  },
  {
    id: "servo-blue",
    name: "SG90 Micro Servo Motor 9g",
    category: "Actuators & Motors",
    price: 1500,
    image: "/images/servo-blue.jpg",
    shortDescription: "Compact 9g micro servo motor with 180-degree rotation.",
    fullDescription: "Standard 9-gram blue micro servo motor for steering, robotic arms, and mechanical control.",
    specs: ["Weight: 9 grams", "Torque: 1.8 kg/cm", "Operating Voltage: 4.8V"]
  },
  {
    id: "brushless-water-pump",
    name: "12V Brushless DC Water Pump",
    category: "Actuators & Motors",
    price: 5500,
    image: "/images/water-pump.jpg",
    shortDescription: "Submersible brushless water circulation pump.",
    fullDescription: "Low-noise DC water pump designed for fluid transfer, cooling systems, and automated irrigation.",
    specs: ["Operating Voltage: 12V DC", "Flow Rate: 240L/H", "Waterproof Rating: IP68"]
  },
  {
    id: "solenoid-valve",
    name: "12V Electric Solenoid Valve",
    category: "Actuators & Motors",
    price: 4000,
    image: "/images/solenoid-valve.jpg",
    shortDescription: "Electromagnetic fluid flow control valve.",
    fullDescription: "Normally closed 12V DC solenoid valve for automated water, air, or liquid flow control.",
    specs: ["Voltage: 12V DC", "Port Size: 1/2 inch", "State: Normally Closed (NC)"]
  },
  {
    id: "motor-driver-red-blue",
    name: "Dual H-Bridge Motor Driver Module",
    category: "Actuators & Motors",
    price: 2500,
    image: "/images/l298n.jpg",
    shortDescription: "Dual channel motor driver for DC motors and steppers.",
    fullDescription: "H-Bridge module capable of controlling direction and speed for two DC motors independently.",
    specs: ["Driver Chip: L298N / Dual H-Bridge", "Max Current: 2A per channel", "Drive Voltage: 5V - 35V"]
  },
  {
    id: "a4955-motor-driver",
    name: "A4955 PWM Motor Driver Board",
    category: "Actuators & Motors",
    price: 3000,
    image: "/images/a4955.jpg",
    shortDescription: "Full-bridge DMOS PWM motor driver IC breakout board.",
    fullDescription: "Designed for pulse-width modulated (PWM) control of DC motors with current limiting features.",
    specs: ["Peak Output Current: ±3A", "Operating Voltage: up to 50V", "Protection: Overcurrent & Thermal"]
  },
  {
    id: "small-fan",
    name: "5V/12V DC Cooling Fan",
    category: "Actuators & Motors",
    price: 1000,
    image: "/images/small-fan.jpg",
    shortDescription: "Compact cooling fan for electronics enclosures.",
    fullDescription: "Brushless DC fan for heat dissipation in microcontrollers, power supplies, and project boxes.",
    specs: ["Dimensions: 40x40x10mm", "Voltage: 5V / 12V DC", "Bearing Type: Sleeve"]
  },
  {
    id: "solenoid-locks",
    name: "Electronic Solenoid Door Lock (Small / Big)",
    category: "Actuators & Motors",
    price: 4500,
    image: "/images/solenoid-lock.jpg",
    shortDescription: "12V electromagnetic cabinet and door lock latch.",
    fullDescription: "Electromagnetic latch mechanism for keyless door entry, smart lockers, and security projects.",
    specs: ["Voltage: 12V DC", "Current: 0.8A", "Stroke Length: 10mm"]
  },

  // --- RELAYS & SHIELDS ---
  {
    id: "4-relay-module",
    name: "4-Channel Relay Module 5V",
    category: "Relays & Shields",
    price: 3000,
    image: "/images/4-relay.jpg",
    shortDescription: "4-channel isolated relay board for AC/DC switching.",
    fullDescription: "Optocoupler isolated 4-channel relay capable of switching high voltage mains electronics.",
    specs: ["Channels: 4", "Control Voltage: 5V DC", "Max Load: 10A 250VAC / 30VDC"]
  },
  {
    id: "8-relay-module",
    name: "8-Channel Relay Module 5V",
    category: "Relays & Shields",
    price: 5500,
    image: "/images/8-relay.jpg",
    shortDescription: "8-channel opto-isolated relay interface board.",
    fullDescription: "Heavy-duty 8-channel relay array for industrial automation and smart home power routing.",
    specs: ["Channels: 8", "Control Voltage: 5V DC", "Isolation: Optocoupler Protected"]
  },
  {
    id: "cnc-shield",
    name: "Arduino CNC Shield V3",
    category: "Relays & Shields",
    price: 3500,
    image: "/images/cnc-shield.jpg",
    shortDescription: "Expansion shield for 3D printers and CNC engraving machines.",
    fullDescription: "Arduino Uno expansion board supporting up to 4 stepper motor drivers (A4988 / DRV8825).",
    specs: ["Compatibility: Arduino UNO", "Driver Slots: 4 Axes (X, Y, Z, A)", "Power: 12V-36V DC"]
  },
  {
    id: "sensor-shield",
    name: "Arduino Sensor Shield V5.0",
    category: "Relays & Shields",
    price: 2500,
    image: "/images/sensor-shield.jpg",
    shortDescription: "Breakout expansion board for simplified sensor connectivity.",
    fullDescription: "Expands Arduino pins into dedicated 3-pin SVG headers for direct servo and sensor plug-and-play.",
    specs: ["Compatibility: Arduino UNO / Mega", "Headers: Digital, Analog, I2C, UART", "Buck Power Input: Included"]
  },
  {
    id: "i2c-module",
    name: "PCF8574 I2C Backpack Adapter Module",
    category: "Relays & Shields",
    price: 1000,
    image: "/images/i2c-module.jpg",
    shortDescription: "Serial interface adapter for character LCD screens.",
    fullDescription: "Converts standard 16-pin parallel LCDs into 2-pin I2C communication interface.",
    specs: ["Chip: PCF8574", "Protocol: I2C", "Potentiometer: Contrast Adjust Built-in"]
  },
  {
    id: "esp-extension-board",
    name: "ESP32 / ESP8266 Expansion Breakout Board",
    category: "Relays & Shields",
    price: 3000,
    image: "/images/esp-expansion.jpg",
    shortDescription: "Terminal breakout board for ESP development modules.",
    fullDescription: "Provides terminal screw blocks and expanded power supply rails for ESP32 and ESP8266 boards.",
    specs: ["Compatibility: ESP32 30-Pin / NodeMCU", "Power Rails: 5V, 3.3V, GND", "Terminals: Screw Lock"]
  },

  // --- SENSORS ---
  {
    id: "ultrasound-hc-sr04",
    name: "HC-SR04 Ultrasonic Distance Sensor",
    category: "Sensors",
    price: 1500,
    image: "/images/hc-sr04.jpg",
    shortDescription: "Ultrasonic rangefinder module for distance detection.",
    fullDescription: "Measures distances non-contact from 2cm to 400cm using ultrasonic sonar waves.",
    specs: ["Range: 2cm - 400cm", "Accuracy: 3mm", "Measuring Angle: 15°"]
  },
  {
    id: "ov7670-camera",
    name: "OV7670 VGA Camera Module",
    category: "Sensors",
    price: 3500,
    image: "/images/ov7670.jpg",
    shortDescription: "CMOS image sensor module for digital image capture.",
    fullDescription: "640x480 VGA image capture camera module for microcontrollers and DSP processors.",
    specs: ["Resolution: 640x480 (VGA)", "Format: Raw RGB / YUV", "Operating Voltage: 3.3V"]
  },
  {
    id: "heart-rate-sensor",
    name: "Pulse Heart Rate Sensor Module",
    category: "Sensors",
    price: 2500,
    image: "/images/heart-rate.jpg",
    shortDescription: "Optical biometric pulse and heart rate monitoring sensor.",
    fullDescription: "Plug-and-play heart rate sensor for biometric data tracking in wearable electronics.",
    specs: ["Type: Optical PPG", "Operating Voltage: 3V - 5V", "Output: Analog Signal"]
  },
  {
    id: "max30010-max4495",
    name: "MAX Health Biometric & Thermocouple Sensor Modules",
    category: "Sensors",
    price: 3500,
    image: "/images/max-sensor.jpg",
    shortDescription: "Precision biometric pulse-oximetry and temperature amplification module.",
    fullDescription: "High-precision integrated IC breakout module for medical and industrial temperature telemetry.",
    specs: ["Interface: I2C / Analog", "Precision: High Sensitivity", "Voltage: 3.3V"]
  },
  {
    id: "soil-moisture-sensors",
    name: "Soil Moisture Sensor (Resistive & Capacitive)",
    category: "Sensors",
    price: 1500,
    image: "/images/soil-moisture.jpg",
    shortDescription: "Corrosion-resistant soil water level detection sensor.",
    fullDescription: "Measures soil volumetric water content for automated agricultural irrigation systems.",
    specs: ["Types Available: Capacitive / Resistive", "Output: Analog + Digital", "Voltage: 3.3V - 5V"]
  },
  {
    id: "ph-sensor",
    name: "Analog pH Liquid Sensor Probe Kit",
    category: "Sensors",
    price: 14000,
    image: "/images/ph-sensor.jpg",
    shortDescription: "Water quality pH detection sensor with electrode probe.",
    fullDescription: "Complete liquid pH monitoring kit designed for aquariums, hydroponics, and water testing.",
    specs: ["Measuring Range: pH 0 - 14", "Response Time: ≤ 1 min", "Signal Output: Analog"]
  },
  {
    id: "turbidity-sensor",
    name: "Liquid Turbidity Sensor Module",
    category: "Sensors",
    price: 6500,
    image: "/images/turbidity.jpg",
    shortDescription: "Optical water clarity and suspended particle sensor.",
    fullDescription: "Detects water quality by measuring light transmittance and scattering rate.",
    specs: ["Output: Analog / Digital", "Response Time: < 500ms", "Voltage: 5V DC"]
  },
  {
    id: "weight-sensors-loadcell",
    name: "Load Cell Weight Sensor & HX711 Amplifier",
    category: "Sensors",
    price: 3500,
    image: "/images/weight-sensor.jpg",
    shortDescription: "Strain gauge load cell with 24-bit ADC amplifier module.",
    fullDescription: "Precision force strain gauge load cell for electronic scales and weight measurement systems.",
    specs: ["Capacities: Small (1-5kg) / Big (20-50kg)", "ADC Chip: HX711 24-bit", "Precision: High"]
  },
  {
    id: "voltage-current-sensors",
    name: "DC / AC Voltage & Current Sensor Modules",
    category: "Sensors",
    price: 2000,
    image: "/images/current-sensor.jpg",
    shortDescription: "Hall-effect based AC/DC voltage and current measurement modules.",
    fullDescription: "Precision current transformer and voltage divider boards for power monitoring equipment.",
    specs: ["Current Detection: up to 20A/30A", "Voltage Range: 0-25V DC / 0-250V AC", "Interface: Analog"]
  },
  {
    id: "light-intensity-ldr",
    name: "LDR Photoresistor & Light Intensity Sensor",
    category: "Sensors",
    price: 1000,
    image: "/images/ldr-sensor.jpg",
    shortDescription: "Ambient light detection sensor module.",
    fullDescription: "Light-dependent resistor module for automatic night lighting and brightness detection.",
    specs: ["Output: Analog + Digital Switch", "Sensitivity: Adjustable Potentiometer", "Voltage: 3.3V - 5V"]
  },
  {
    id: "infrared-flame-sensor",
    name: "Infrared Flame & Obstacle Sensor Module",
    category: "Sensors",
    price: 1200,
    image: "/images/flame-sensor.jpg",
    shortDescription: "IR optical flame and obstacle detection board.",
    fullDescription: "Detects fire light sources (760nm - 1100nm) and proximity obstacles using infrared receivers.",
    specs: ["Detection Angle: 60 degrees", "Response: Fast IR Transceiver", "Output: Digital/Analog"]
  },
  {
    id: "bmp-sensor",
    name: "BMP280 Barometric Pressure & Altitude Sensor",
    category: "Sensors",
    price: 2000,
    image: "/images/bmp280.jpg",
    shortDescription: "Digital environmental barometric pressure and temperature sensor.",
    fullDescription: "Precision atmospheric pressure sensor for altitude calculation and weather tracking.",
    specs: ["Pressure Range: 300 - 1100 hPa", "Interface: I2C / SPI", "Absolute Accuracy: ±1 hPa"]
  },
  {
    id: "fingerprint-sensor",
    name: "Optical Fingerprint Reader Module",
    category: "Sensors",
    price: 12500,
    image: "/images/fingerprint.jpg",
    shortDescription: "Biometric optical fingerprint scanner module.",
    fullDescription: "All-in-one fingerprint processing module with onboard flash memory for enrollment and matching.",
    specs: ["Interface: UART Serial", "Capacity: 120-300 Fingerprints", "Light Source: Green Optical"]
  },
  {
    id: "gas-mq3-co2-sensors",
    name: "Gas, MQ-3 Alcohol & CO2 Air Quality Sensors",
    category: "Sensors",
    price: 2500,
    image: "/images/mq3.jpg",
    shortDescription: "Air quality, alcohol vapor, and carbon dioxide detection sensors.",
    fullDescription: "Gas detection module sensitive to hazardous gases, alcohol breath levels, or CO2 concentration.",
    specs: ["Heater Voltage: 5V DC", "Gas Types: MQ Series / CO2", "Outputs: Analog & TTL Digital"]
  },
  {
    id: "water-level-sensor",
    name: "Liquid Depth / Water Level Detection Sensor",
    category: "Sensors",
    price: 1000,
    image: "/images/water-sensor.jpg",
    shortDescription: "Exposed parallel trace liquid level reader.",
    fullDescription: "Analog printed wire depth sensor for rainfall measurement and water tank monitoring.",
    specs: ["Detection Area: 40mm x 16mm", "Operating Current: < 20mA", "Voltage: 3V - 5V"]
  },
  {
    id: "hall-effect-sensor",
    name: "Hall Effect Magnetic Field Sensor",
    category: "Sensors",
    price: 1200,
    image: "/images/hall-effect.jpg",
    shortDescription: "Magnetic field proximity and speed sensor.",
    fullDescription: "Detects presence of magnetic fields for motor RPM counting and non-contact limit switches.",
    specs: ["Chip: Allegro 3144 / A3144", "Output: Open-Collector Digital", "Operating Voltage: 4.5V - 24V"]
  },
  {
    id: "piezo-electric-sensor",
    name: "Piezoelectric Vibration & Touch Sensor",
    category: "Sensors",
    price: 1000,
    image: "/images/piezo.jpg",
    shortDescription: "Vibration and knock transducer element.",
    fullDescription: "Converts mechanical strain and impacts into measurable electrical voltage signals.",
    specs: ["Sensor Type: Piezo Ceramic", "Output: Analog Voltage", "Mounting: Panel / Surface"]
  },

  // --- POWER SUPPLIES & CONVERTERS ---
  {
    id: "buck-boost-converters",
    name: "DC-DC Step Down (Buck) & Step Up (Boost) Converter Modules",
    category: "Power Supplies",
    price: 2000,
    image: "/images/buck-converter.jpg",
    shortDescription: "High-efficiency adjustable voltage regulator board.",
    fullDescription: "Step-up or step-down DC voltage conversion boards with onboard multi-turn potentiometers.",
    specs: ["Conversion Efficiency: Up to 92%", "Adjustment: Onboard Potentiometer", "Max Current: 3A"]
  },
  {
    id: "breadboard-power-supply",
    name: "MB102 Breadboard Power Supply Module 3.3V/5V",
    category: "Power Supplies",
    price: 1500,
    image: "/images/breadboard-power.jpg",
    shortDescription: "Dual 3.3V and 5V rail breadboard power supply board.",
    fullDescription: "Plugs directly into standard breadboards to deliver dual 3.3V and 5V regulated DC supply rails.",
    specs: ["Input Voltage: 6.5V - 12V DC / USB", "Output Voltage: 3.3V / 5V DC", "Max Current: 700mA"]
  },
  {
    id: "xhw-1001",
    name: "XHW-1001 Temperature Controller Switch Module",
    category: "Power Supplies",
    price: 4500,
    image: "/images/xhw-1001.jpg",
    shortDescription: "Digital thermostat temperature control switch board.",
    fullDescription: "Programmable temperature controller relay module featuring LED display and NTC waterproof probe.",
    specs: ["Control Range: -50°C to 110°C", "Relay Rating: 10A 250VAC", "Input Voltage: 12V DC / 220V AC"]
  },
  {
    id: "power-supplies-5v-9v-12v",
    name: "Regulated AC-DC Power Supply Adapter (5V / 9V / 12V)",
    category: "Power Supplies",
    price: 3000,
    image: "/images/power-adapter.jpg",
    shortDescription: "Wall power adapter for electronics and development boards.",
    fullDescription: "Stable regulated DC power source equipped with standard 5.5mm x 2.1mm DC barrel connector.",
    specs: ["Output Voltages: 5V / 9V / 12V", "Connector: 5.5mm Barrel Jack", "Protection: Overvoltage & Short Circuit"]
  },
  {
    id: "18650-charger",
    name: "18650 Lithium Battery Charger & Protection Module",
    category: "Power Supplies",
    price: 1000,
    image: "/images/18650-charger.jpg",
    shortDescription: "TP4056 Micro/Type-C USB Li-Ion charging module.",
    fullDescription: "Single-cell lithium battery charger board with integrated battery protection circuitry.",
    specs: ["Charge Voltage: 4.2V", "Max Charge Current: 1000mA", "Input Interface: USB"]
  },

  // --- KITS, ROBOTICS & HARDWARE ---
  {
    id: "4wd-robot-chassis",
    name: "4WD Smart Robot Car Chassis Kit",
    category: "Robotics & Kits",
    price: 12000,
    image: "/images/4wd-kit.jpg",
    shortDescription: "4-Wheel drive acrylic chassis platform with gearmotors.",
    fullDescription: "Complete robotic car base including motors, wheels, speed encoders, and acrylic mounting plates.",
    specs: ["Motors: 4 DC Gearmotors", "Drive Type: 4 Wheel Drive", "Wheel Diameter: 66mm"]
  },
  {
    id: "5-kit-robot",
    name: "5-in-1 Educational Robotics Kit",
    category: "Robotics & Kits",
    price: 25000,
    image: "/images/5-kit-robot.jpg",
    shortDescription: "Multi-functional robotics prototyping assembly kit.",
    fullDescription: "Comprehensive STEM robotics learning set for building obstacle avoidance, line-following, and remote control robots.",
    specs: ["Projects Included: 5 Multi-robot configs", "Sensors Included: Line, Ultrasonic, IR", "Control: Microcontroller Included"]
  },
  {
    id: "arduino-starter-kit",
    name: "Complete Electronics & Arduino Starter Kit",
    category: "Robotics & Kits",
    price: 18000,
    image: "/images/arduino-kit.jpg",
    shortDescription: "Comprehensive component bundle for learning microcontroller programming.",
    fullDescription: "Includes breadboard, jumper wires, resistors, LEDs, pushbuttons, sensors, and microcontroller board.",
    specs: ["Components: 30+ Types", "Includes: Sensors, Actuators, Breadboard", "Storage Box: Included"]
  },

  // --- TOOLS, CABLING & ACCESSORIES ---
  {
    id: "usb-to-ttl-esp-programmer",
    name: "USB to TTL Serial / ESP Programmer (FT232 / CP2102)",
    category: "Tools & Adapters",
    price: 2500,
    image: "/images/usb-ttl.jpg",
    shortDescription: "Serial converter adapter for flashing microcontrollers.",
    fullDescription: "USB-to-UART bridge adapter for programming ESP-01, Arduino Pro Mini, and microcontrollers.",
    specs: ["Chipset: FT232RL / CP2102", "Voltage Output: 3.3V and 5V Toggle", "Interface: USB Standard"]
  },
  {
    id: "65mm-jumper-wires",
    name: "Breadboard Jumper Wires Pack (Solderless)",
    category: "Tools & Adapters",
    price: 1500,
    image: "/images/jumper-wires.jpg",
    shortDescription: "Multi-length flexible breadboard connecting cables.",
    fullDescription: "Assorted male-to-male wire bundle for rapid breadboard circuit prototyping.",
    specs: ["Quantity: 65 Wires Pack", "Types: Male-to-Male / Dupont", "Colors: Assorted"]
  },
  {
    id: "joystick-keypad",
    name: "Analog Joystick Module & Matrix Keypad",
    category: "Tools & Adapters",
    price: 1500,
    image: "/images/joystick.jpg",
    shortDescription: "User input controllers for menu navigation and robotics.",
    fullDescription: "Dual-axis XY thumb joystick controller and membrane matrix keypad buttons.",
    specs: ["Joystick Axes: X, Y Analog + Push Switch", "Keypad: 4x4 / 3x4 Matrix", "Operating Voltage: 5V"]
  },
  {
    id: "traffic-light-module",
    name: "LED Traffic Light Signal Module",
    category: "Tools & Adapters",
    price: 1200,
    image: "/images/traffic-light.jpg",
    shortDescription: "3-Color LED signal indicator module (Red/Yellow/Green).",
    fullDescription: "Integrated traffic signal simulation display with 5mm LEDs for smart city and automation demonstrations.",
    specs: ["LED Colors: Red, Yellow, Green", "Interface: Common Cathode", "Operating Voltage: 5V"]
  },
  {
    id: "soldering-lead-kit",
    name: "Soldering Iron Kit & Solder Wire",
    category: "Tools & Adapters",
    price: 8500,
    image: "/images/soldering-kit.jpg",
    shortDescription: "Temperature-controlled soldering iron kit with solder wire.",
    fullDescription: "Essential workbench soldering kit with stand, desoldering pump, high-quality solder wire, and soldering iron.",
    specs: ["Power: 60W Adjustable Temp", "Wire Alloy: Rosin Core 60/40", "Voltage: 220V AC"]
  },
  {
    id: "multimeter",
    name: "Digital Multimeter Tester",
    category: "Tools & Adapters",
    price: 5000,
    image: "/images/multimeter.jpg",
    shortDescription: "Handheld digital multimeter for measuring voltage, current, and resistance.",
    fullDescription: "Versatile circuit testing device with LCD display, continuity buzzer, and transistor test functions.",
    specs: ["Functions: AC/DC Voltage, DC Current, Resistance", "Features: Continuity Buzzer & Diode Test", "Battery: 9V Included"]
  },
  {
    id: "hardware-tools",
    name: "Lab Workshop Hardware Tools (Crimping, Glue Gun, Screwdriver)",
    category: "Tools & Adapters",
    price: 4500,
    image: "/images/workshop-tools.jpg",
    shortDescription: "Professional laboratory assembly tools.",
    fullDescription: "Essential workbench hand tools including wire terminal crimpers, hot melt glue gun, precision screwdrivers, and safety equipment.",
    specs: ["Includes: Wire Strippers/Crimpers, Hot Glue Gun, Screwdriver Set", "Application: Electronics Fabrication"]
  },
  {
    id: "white-lab-jacket",
    name: "UV-LAB Technical Workshop Lab Coat",
    category: "Tools & Adapters",
    price: 10000,
    image: "/images/lab-coat.jpg",
    shortDescription: "Protective white laboratory lab jacket.",
    fullDescription: "Heavy-duty protective white cotton lab coat for electronic workshop safety, chemical protection, and testing environments.",
    specs: ["Material: Breathable Cotton Blend", "Color: White", "Pockets: 3 Front Pockets"]
  }
];