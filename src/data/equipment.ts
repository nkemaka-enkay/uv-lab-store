export interface Equipment {
  id: string;
  name: string;
  category: string;
  price: number; // Price in FCFA
  image: string;
  shortDescription: string;
  fullDescription: string;
  specs: string[];
}

export const EQUIPMENT_LIST: Equipment[] = [
  // --- MICROCONTROLLERS & DEVELOPMENT BOARDS (1-20) ---
  {
    id: 'arduino-uno-r3',
    name: 'Arduino Uno R3',
    category: 'Microcontrollers',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Standard ATmega328P microcontroller development board.',
    fullDescription: 'The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It features 14 digital input/output pins, 6 analog inputs, a 16 MHz ceramic resonator, USB connection, power jack, ICSP header, and a reset button.',
    specs: ['Microcontroller: ATmega328P', 'Operating Voltage: 5V', 'Input Voltage: 7-12V', 'Digital I/O Pins: 14', 'Analog Inputs: 6']
  },
  {
    id: 'arduino-mega-2560',
    name: 'Arduino Mega 2560 R3',
    category: 'Microcontrollers',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Microcontroller board based on ATmega2560 with 54 digital I/O pins.',
    fullDescription: 'Designed for complex robotic and 3D printing applications requiring excessive I/O ports and flash memory.',
    specs: ['Microcontroller: ATmega2560', 'Digital I/O Pins: 54', 'Analog Inputs: 16', 'Flash Memory: 256 KB']
  },
  {
    id: 'arduino-nano-v3',
    name: 'Arduino Nano V3 (CH340)',
    category: 'Microcontrollers',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Compact breadboard-friendly ATmega328P board.',
    fullDescription: 'Small, complete, and breadboard-friendly board based on the ATmega328 with USB Mini-B connection.',
    specs: ['Microcontroller: ATmega328P', 'USB Chip: CH340G', 'Operating Voltage: 5V', 'Digital Pins: 14']
  },
  {
    id: 'esp32-wifi-bluetooth',
    name: 'ESP32 Wi-Fi + Bluetooth MCU',
    category: 'Microcontrollers',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop',
    shortDescription: '32-bit dual-core microcontroller with wireless connectivity.',
    fullDescription: 'Powerful 32-bit microcontroller featuring integrated Wi-Fi and dual-mode Bluetooth (Classic and BLE), ideal for IoT automation projects.',
    specs: ['CPU: Xtensa dual-core 32-bit LX6', 'Wireless: 802.11 b/g/n Wi-Fi + BLE', 'Voltage: 3.3V', 'Flash: 4 MB']
  },
  {
    id: 'esp8266-nodemcu',
    name: 'NodeMCU ESP8266 V3',
    category: 'Microcontrollers',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Open-source firmware and development kit for IoT prototyping.',
    fullDescription: 'Lua-based interactive firmware with onboard Wi-Fi chip for rapid wireless IoT device prototyping.',
    specs: ['Processor: ESP8266', 'Wi-Fi: 802.11 b/g/n', 'Digital Pins: 11', 'Analog Input: 1 (1.0V max)']
  },
  {
    id: 'esp-01-module',
    name: 'ESP-01 ESP8266 Wi-Fi Module',
    category: 'Microcontrollers',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Ultra-compact serial-to-WiFi transceiver module.',
    fullDescription: 'Small standalone Wi-Fi module allowing microcontrollers to connect to 2.4GHz wireless networks.',
    specs: ['Chipset: ESP8266 EX', 'Voltage: 3.3V', 'Flash Memory: 1MB', 'Protocol: 802.11 b/g/n']
  },
  {
    id: 'esp-01-usb-adapter',
    name: 'ESP-01 USB Adapter Programmer',
    category: 'Wiring & Connectors',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'CH340G USB to serial programmer adapter for ESP-01.',
    fullDescription: 'Direct USB adapter featuring a CH340G serial converter chip for easily flashing firmware onto ESP-01 modules.',
    specs: ['Chip: CH340G', 'Operating Voltage: 4.5V - 5.5V', 'Onboard 3.3V Regulator', 'Direct USB connection']
  },
  {
    id: 'raspberry-pi-pico',
    name: 'Raspberry Pi Pico',
    category: 'Microcontrollers',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'RP2040 dual-core ARM Cortex M0+ microcontroller.',
    fullDescription: 'High-performance board built on Raspberry Pi designed RP2040 silicon with flexible digital interfaces.',
    specs: ['Chip: RP2040', 'Core: Dual-core ARM Cortex M0+', 'RAM: 264KB', 'Flash: 2MB QSPI']
  },
  {
    id: 'raspberry-pi-pico-w',
    name: 'Raspberry Pi Pico W',
    category: 'Microcontrollers',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'RP2040 board with built-in 2.4GHz wireless interfaces.',
    fullDescription: 'RP2040 microcontroller board equipped with an onboard Infineon CYW43439 wireless chip.',
    specs: ['Processor: RP2040', 'Wi-Fi: 802.11n 2.4GHz', 'GPIO Pins: 26', 'PWM Channels: 16']
  },
  {
    id: 'stm32f103c8t6-blue-pill',
    name: 'STM32F103C8T6 Blue Pill',
    category: 'Microcontrollers',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: '32-bit ARM Cortex-M3 development board.',
    fullDescription: 'Low-cost, high-performance ARM Cortex-M3 32-bit core development board running up to 72MHz.',
    specs: ['Core: ARM 32-bit Cortex-M3', 'Clock Speed: 72 MHz', 'Flash: 64 KB', 'SRAM: 20 KB']
  },
  {
    id: 'attiny85-digispark',
    name: 'Digispark ATtiny85 USB Board',
    category: 'Microcontrollers',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Ultra-small AVR development board with direct USB header.',
    fullDescription: 'Miniature development board compatible with Arduino IDE using the 8-pin ATtiny85 chip.',
    specs: ['Microcontroller: ATtiny85', 'Flash: 8KB', 'Interfaces: I2C & SPI', 'Pins: 6 I/O']
  },
  {
    id: 'gsm-900a-module',
    name: 'GSM SIM 900a Module',
    category: 'Microcontrollers',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Dual-band GSM/GPRS wireless communication module.',
    fullDescription: 'Compact dual-band GSM/GPRS module designed for SMS, Voice, and Data applications in telemetry systems.',
    specs: ['Bands: 900 / 1800 MHz', 'Operating Voltage: 5V - 12V', 'Interface: UART Serial', 'SIM Slot: Standard']
  },
  {
    id: 'gsm-900-big-module',
    name: 'GSM 900 BIG Module',
    category: 'Microcontrollers',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Industrial grade GSM 900 board with onboard power circuit.',
    fullDescription: 'Heavy-duty GSM 900 industrial communication board equipped with robust onboard voltage regulators.',
    specs: ['Band: GSM 900 MHz', 'Power Input: 9V - 12V DC', 'Antenna Connector: SMA', 'Control: AT Commands']
  },
  {
    id: 'gsm-sim-800c-module',
    name: 'GSM SIM 800C Module',
    category: 'Microcontrollers',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1563770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Compact quad-band GSM/GPRS engine on small red board.',
    fullDescription: 'Small-footprint red board GSM SIM 800C module capable of SMS transmission, voice calls, and basic cellular data.',
    specs: ['Quad-band: 850/900/1800/1900MHz', 'PCB Color: Red', 'Voltage: 3.7V - 4.4V', 'Interface: TTL UART']
  },
  {
    id: 'gsm-sim-800l-micro',
    name: 'GSM SIM 800L Micro Module',
    category: 'Microcontrollers',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1563770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Ultra-small cellular board for embedded IoT.',
    fullDescription: 'Micro miniature GSM/GPRS board for embedding inside compact electronic projects requiring SMS alerts or cellular data.',
    specs: ['Dimensions: 2.5cm x 2.3cm', 'Operating Voltage: 3.8V - 4.2V', 'Quad-Band Support', 'Antenna Included']
  },
  {
    id: 'promini-5v-atmega328',
    name: 'Arduino Pro Mini 5V',
    category: 'Microcontrollers',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Minimalist 5V 16MHz ATmega328 development board.',
    fullDescription: 'Compact board designed for permanent installations where space is at a premium.',
    specs: ['Microcontroller: ATmega328P', 'Clock Speed: 16 MHz', 'Voltage: 5V', 'Analog Pins: 8']
  },
  {
    id: 'pro-micro-atmega32u4',
    name: 'Pro Micro ATmega32U4 5V',
    category: 'Microcontrollers',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'ATmega32U4 board with native USB HID support.',
    fullDescription: 'Features native USB transceiver allowing it to emulate USB Human Interface Devices like keyboards or mice.',
    specs: ['MCU: ATmega32U4', 'Clock: 16MHz', 'Voltage: 5V', 'Native USB Support']
  },
  {
    id: 'esp32-cam-module',
    name: 'ESP32-CAM WiFi + Bluetooth Module with OV2640',
    category: 'Microcontrollers',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Small camera development module based on ESP32.',
    fullDescription: 'Includes an OV2640 camera and onboard TF card slot for image recognition and video streaming applications.',
    specs: ['Camera: 2MP OV2640', 'Wi-Fi: 802.11b/g/n', 'Bluetooth: 4.2 BR/EDR & BLE', 'MicroSD Slot']
  },
  {
    id: 'teensy-4-0',
    name: 'Teensy 4.0 Development Board',
    category: 'Microcontrollers',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'ARM Cortex-M7 board running at 600 MHz.',
    fullDescription: 'Ultra-fast microcontroller development platform featuring NXP i.MXRT1062 ARM Cortex-M7 processor.',
    specs: ['Clock Speed: 600 MHz', 'RAM: 1024K', 'Flash: 2048K', 'Digital I/O: 40 pins']
  },
  {
    id: 'esp32-s3-dev-board',
    name: 'ESP32-S3 Dual-Core MCU',
    category: 'Microcontrollers',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&auto=format&fit=crop',
    shortDescription: '2.4 GHz Wi-Fi and Bluetooth LE SoC for AI acceleration.',
    fullDescription: 'Dual-core MCU with vector instructions for machine learning and artificial intelligence tasks.',
    specs: ['MCU: ESP32-S3', 'Wi-Fi 4 + BLE 5.0', 'Vector Instructions support', 'GPIOs: 45']
  },

  // --- SENSORS & MODULES (21-45) ---
  {
    id: 'gps-neo-7m-module',
    name: 'GPS NEO-7M Module',
    category: 'Sensors & Modules',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'High-precision satellite positioning GPS module.',
    fullDescription: 'High-performance u-blox NEO-7M GPS positioning engine with ceramic antenna and EEPROM for config storage.',
    specs: ['Receiver: 56-channel u-blox 7', 'Accuracy: 2.5m CEP', 'Update Rate: Up to 10 Hz', 'Voltage: 3.3V-5V']
  },
  {
    id: 'gsm-sim-808-combo',
    name: 'GSM GPS GPRS SIM 808 Combo',
    category: 'Sensors & Modules',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'All-in-one cellular tracking and satellite board (GSM + GPS SIM808).',
    fullDescription: 'Complete cellular module integrating quad-band GSM/GPRS engine with high-sensitivity GPS technology.',
    specs: ['Bands: Quad-Band 850/900/1800/1900 MHz', 'GPS Engine: Integrated', 'Interface: UART', 'Voltage: 5V-12V']
  },
  {
    id: 'dht11-sensor',
    name: 'DHT11 Temperature & Humidity Sensor',
    category: 'Sensors & Modules',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Digital temperature and humidity measurement sensor.',
    fullDescription: 'Basic low-cost digital temperature and humidity sensor using capacitive sensor technology.',
    specs: ['Humidity Range: 20-90% RH', 'Temp Range: 0-50°C', 'Voltage: 3.3V - 5V', 'Single-bus output']
  },
  {
    id: 'dht22-sensor',
    name: 'DHT22 AM2302 Precision Temp & Humidity Sensor',
    category: 'Sensors & Modules',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'High accuracy digital temperature and humidity sensor.',
    fullDescription: 'Upgraded temperature and humidity module with higher accuracy and wider measuring ranges.',
    specs: ['Humidity: 0-100% RH', 'Temp Range: -40 to 80°C', 'Accuracy: ±0.5°C', 'Voltage: 3.3V - 6V']
  },
  {
    id: 'hc-sr04-ultrasonic',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    category: 'Sensors & Modules',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Non-contact ultrasonic distance measuring module.',
    fullDescription: 'Provides 2cm to 400cm non-contact range measurement function with 3mm precision accuracy.',
    specs: ['Voltage: 5V DC', 'Range: 2cm - 400cm', 'Measuring Angle: 15°', 'Trigger Signal: 10us TTL']
  },
  {
    id: 'pir-motion-sensor-sr501',
    name: 'HC-SR501 PIR Motion Detector Sensor',
    category: 'Sensors & Modules',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Pyroelectric infrared motion sensor module.',
    fullDescription: 'Automatic motion sensor switch based on infrared technology with adjustable delay time and sensing distance.',
    specs: ['Voltage: 4.5V - 20V', 'Sensing Range: <120 degrees', 'Distance: up to 7 meters', 'Delay Time: 0.3s - 200s']
  },
  {
    id: 'mpu6050-gyroscope',
    name: 'MPU-6050 3-Axis Gyroscope + Accelerometer',
    category: 'Sensors & Modules',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: '6-DOF motion tracking sensor module.',
    fullDescription: 'Combines a 3-axis gyroscope and a 3-axis accelerometer on the same silicon die with an onboard Digital Motion Processor (DMP).',
    specs: ['Communication: I2C', 'Gyro Range: ±250 500 1000 2000 °/s', 'Accel Range: ±2 ±4 ±8 ±16g', 'Chip: MPU-6050']
  },
  {
    id: 'mq2-gas-sensor',
    name: 'MQ-2 Smoke & Flammable Gas Sensor',
    category: 'Sensors & Modules',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Detects LPG, smoke, alcohol, propane, hydrogen, and methane.',
    fullDescription: 'Suitable for detecting LPG, i-butane, propane, methane, alcohol, Hydrogen, and smoke in domestic or commercial setups.',
    specs: ['Detection Range: 300 to 10,000 ppm', 'Operating Voltage: 5V', 'Dual Output: Analog & Digital']
  },
  {
    id: 'mq7-carbon-monoxide-sensor',
    name: 'MQ-7 Carbon Monoxide CO Sensor',
    category: 'Sensors & Modules',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'High-sensitivity carbon monoxide detector module.',
    fullDescription: 'Sensor module for detecting CO concentrations in the air with fast response and high sensitivity.',
    specs: ['Detection: Carbon Monoxide (CO)', 'Concentration: 20-2000ppm', 'Voltage: 5V', 'Analog & Digital Outputs']
  },
  {
    id: 'rfid-rc522-kit',
    name: 'RC522 RFID Reader / Writer Kit with Card & Fob',
    category: 'Sensors & Modules',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: '13.56 MHz SPI RFID reader module with IC key fob.',
    fullDescription: 'Highly integrated contactless read and write 13.56MHz communication card chip module.',
    specs: ['Operating Frequency: 13.56MHz', 'Interface: SPI', 'Operating Current: 13-26mA', 'Supported Card Types: mifare1 S50']
  },
  {
    id: 'soil-moisture-sensor',
    name: 'Soil Moisture Sensor Module',
    category: 'Sensors & Modules',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Analog soil humidity detection probe.',
    fullDescription: 'Detects volumetric water content in soil for automated irrigation and plant monitoring systems.',
    specs: ['Dual Output mode (Analog & Digital)', 'Adjustable sensitivity LM393 comparator', 'Voltage: 3.3V - 5V']
  },
  {
    id: 'water-level-sensor',
    name: 'Water Depth Level Detection Sensor',
    category: 'Sensors & Modules',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Rainfall and liquid level depth sensor probe.',
    fullDescription: 'Easy-to-use high cost-effective liquid level / water droplet identification sensor for microcontroller projects.',
    specs: ['Operating Voltage: 3V - 5V', 'Operating Current: < 20mA', 'Detection Area: 40mm x 16mm']
  },
  {
    id: 'rain-sensor-module',
    name: 'Raindrops Detection Sensor Module',
    category: 'Sensors & Modules',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Rain detection board with control module.',
    fullDescription: 'Raindrops weather detection module featuring nickel plated surface against oxidation.',
    specs: ['Power LED indicator', 'Sensitivity adjustment potentiometer', 'Operating Voltage: 3.3V-5V']
  },
  {
    id: 'sound-detection-sensor',
    name: 'Microphone Sound Detection Sensor',
    category: 'Sensors & Modules',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'High sensitivity sound level sensor module.',
    fullDescription: 'Detects environmental sound presence using an electret microphone with threshold adjustment.',
    specs: ['Chip: LM393', 'Operating Voltage: 3.3V-5V', 'Digital Output Signal']
  },
  {
    id: 'light-dependent-resistor-module',
    name: 'LDR Photoresistor Light Sensor Module',
    category: 'Sensors & Modules',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Photosensitive light intensity detector.',
    fullDescription: 'LDR photodiode module for measure ambient light intensity to trigger automatic lighting.',
    specs: ['Comparator Chip: LM393', 'Operating Voltage: 3.3V - 5V', 'Digital Switch Output (0 and 1)']
  },
  {
    id: 'flame-sensor-module',
    name: 'IR Flame Detection Sensor Module',
    category: 'Sensors & Modules',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Fire source detection wavelength 760nm - 1100nm.',
    fullDescription: 'Detects flame or light source with infrared wavelength range from 760 nm to 1100 nm.',
    specs: ['Detection Angle: ~60 degrees', 'Operating Voltage: 3.3V-5V', 'Adjustable Sensitivity']
  },
  {
    id: 'pulse-sensor-heart-rate',
    name: 'Pulse Heart Rate Sensor',
    category: 'Sensors & Modules',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Biometric optical heart rate pulse sensor.',
    fullDescription: 'Plug-and-play heart-rate sensor for microcontrollers that measures pulse through finger or earlobe.',
    specs: ['Voltage: 3V - 5V', 'Diameter: 16mm', 'Amplification circuit onboard']
  },
  {
    id: 'bmp280-barometric-pressure',
    name: 'BMP280 Barometric Pressure & Altitude Sensor',
    category: 'Sensors & Modules',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Digital pressure, altitude, and temperature sensor.',
    fullDescription: 'High precision environmental sensor supporting both I2C and SPI digital communications.',
    specs: ['Pressure Range: 300 to 1100 hPa', 'Interfaces: I2C & SPI', 'Voltage: 1.8V - 3.6V']
  },
  {
    id: 'ir-obstacle-avoidance-sensor',
    name: 'IR Infrared Obstacle Avoidance Sensor',
    category: 'Sensors & Modules',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Infrared reflective proximity sensor module for smart cars.',
    fullDescription: 'Emits and receives IR beams to detect obstacles directly in front of robotic movement.',
    specs: ['Detection Distance: 2cm - 30cm', 'Detection Angle: 35°', 'Operating Voltage: 3.3V-5V']
  },
  {
    id: 'tcs3200-color-sensor',
    name: 'TCS3200 Color Recognition Sensor Module',
    category: 'Sensors & Modules',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Programmable color light-to-frequency converter.',
    fullDescription: 'TCS3200 color sensor chip converts light intensity into proportional digital frequency outputs.',
    specs: ['High-resolution conversion', 'Programmable color filter arrays', 'Voltage: 2.7V - 5.5V']
  },
  {
    id: 'max6675-k-type-thermocouple',
    name: 'MAX6675 K-Type Thermocouple Sensor Module',
    category: 'Sensors & Modules',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'High-temperature measurement converter module.',
    fullDescription: 'Performs cold-junction compensation and digitizes the signal from a K-type thermocouple.',
    specs: ['Temperature Range: 0°C to +1024°C', 'Resolution: 12-bit, 0.25°C', 'SPI Interface']
  },
  {
    id: 'current-sensor-acs712-20a',
    name: 'ACS712 20A Current Sensor Module',
    category: 'Sensors & Modules',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Hall-effect based linear AC/DC current sensor.',
    fullDescription: 'Measures up to 20 Amperes of AC or DC current delivering proportional analog voltage output.',
    specs: ['Current Range: -20A to +20A', 'Sensitivity: 100 mV/A', 'Voltage: 5V DC']
  },
  {
    id: 'load-cell-hx711-amplifier',
    name: '10kg Load Cell with HX711 ADC Module',
    category: 'Sensors & Modules',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Digital weight measurement transducer kit.',
    fullDescription: 'Includes a 10kg strain gauge load cell paired with a 24-bit high precision HX711 ADC converter.',
    specs: ['Capacity: 10 kg', 'ADC Resolution: 24-bit', 'On-board low noise PGA']
  },
  {
    id: 'fingerprint-sensor-r307',
    name: 'R307 Optical Fingerprint Scanner Module',
    category: 'Sensors & Modules',
    price: 14000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Biometric optical fingerprint processing module.',
    fullDescription: 'Integrated fingerprint processing engine with serial UART interface for access security systems.',
    specs: ['Interface: UART', 'Storage: 1000 fingerprints', 'Operating Voltage: 4.2V - 6.0V']
  },
  {
    id: 'nrf24l01-wireless-transceiver',
    name: 'nRF24L01+ 2.4GHz Wireless Transceiver',
    category: 'Sensors & Modules',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Ultra low-power 2.4GHz RF transceiver module.',
    fullDescription: 'Operates in the worldwide 2.4 GHz ISM band with data rates up to 2Mbps.',
    specs: ['Frequency: 2.4GHz', 'Data Rate: 250kbps to 2Mbps', 'Interface: SPI', 'Voltage: 1.9V - 3.6V']
  },

  // --- DISPLAY MODULES (46-60) ---
  {
    id: 'lcd-1602-i2c',
    name: '16x2 LCD Display with I2C Module',
    category: 'Display Modules',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: '16 character by 2 line LCD with pre-soldered I2C adapter.',
    fullDescription: '1602 LCD character display with integrated I2C backpack. Reduces required microcontroller connections to just 2 pins.',
    specs: ['Format: 16x2 Characters', 'Backlight: Blue', 'Interface: I2C (Address 0x27)', 'Voltage: 5V']
  },
  {
    id: 'lcd-2004-i2c',
    name: '20x4 LCD Display with I2C Backboard',
    category: 'Display Modules',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: '20 character by 4 line big screen LCD with I2C.',
    fullDescription: 'Large 2004 character display screen providing 4 rows of 20 characters for detailed telemetry monitors.',
    specs: ['Format: 20x4 Characters', 'Interface: I2C', 'Backlight: Yellow-Green/Blue', 'Voltage: 5V']
  },
  {
    id: 'oled-096-i2c',
    name: '0.96 inch OLED Display I2C',
    category: 'Display Modules',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: '128x64 self-luminous blue graphic OLED screen module.',
    fullDescription: 'High resolution 128x64 OLED display module with ultra low power consumption.',
    specs: ['Size: 0.96 inch', 'Resolution: 128 x 64', 'Interface: I2C', 'Driver: SSD1306']
  },
  {
    id: 'oled-13-spi-i2c',
    name: '1.3 inch OLED Display Module',
    category: 'Display Modules',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    shortDescription: '128x64 pixels SSH1106 OLED screen display.',
    fullDescription: 'Larger monochrome graphic OLED screen with high contrast ratio and wide viewing angle.',
    specs: ['Screen Size: 1.3 inch', 'Resolution: 128 x 64', 'Driver: SH1106', 'Communication: I2C/SPI']
  },
  {
    id: 'tft-lcd-24-touch',
    name: '2.4 inch TFT LCD Shield with Touch Screen',
    category: 'Display Modules',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Full color 240x320 touch display shield for Arduino Uno.',
    fullDescription: '2.4" TFT LCD screen module with built-in resistive touch panel and micro SD card socket.',
    specs: ['Resolution: 240x320', 'Color depth: 18-bit 262K', 'Controller: ILI9341', 'Touch: Resistive']
  },
  {
    id: 'tft-lcd-35-touch',
    name: '3.5 inch TFT LCD Touch Screen Panel',
    category: 'Display Modules',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: '320x480 pixel color touch screen display module.',
    fullDescription: 'Large 3.5" display directly mountable on top of Arduino Mega boards with full touch support.',
    specs: ['Resolution: 320x480', 'Driver: ILI9486 / ILI9488', 'Interface: 16-bit parallel', 'SD Slot']
  },
  {
    id: 'max7219-dot-matrix-4in1',
    name: 'MAX7219 8x32 Dot Matrix Display Module',
    category: 'Display Modules',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: '4-in-1 red LED matrix display driver module.',
    fullDescription: 'Cascaded 8x32 LED dot matrix display powered by MAX7219 driver IC for scrolling text.',
    specs: ['Display Area: 8x32 red LEDs', 'Interface: SPI', 'Voltage: 5V', 'Cascadable']
  },
  {
    id: '7-segment-4digit-display',
    name: '0.56" 4-Digit 7-Segment Display (TM1637)',
    category: 'Display Modules',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Digital clock tube display module with TM1637 driver.',
    fullDescription: '4-digit LED numerical display module with clock colon dots controlled via two signal lines.',
    specs: ['Driver: TM1637', 'Digits: 4 digits (Red)', 'Interface: 2-wire (CLK, DIO)', 'Voltage: 3.3V-5V']
  },
  {
    id: 'lcd-1602-keypad-shield',
    name: 'LCD 1602 Keypad Shield for Arduino',
    category: 'Display Modules',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Blue 16x2 LCD display shield with 5 push buttons.',
    fullDescription: 'Arduino plug-and-play shield containing 16x2 LCD display and 5 menu navigation buttons.',
    specs: ['Buttons: Select, Up, Down, Left, Right', 'Contrast Adjustment Trimmer', 'Operating Voltage: 5V']
  },
  {
    id: 'nextion-24-hmi-touch-display',
    name: 'Nextion 2.4 inch HMI Smart Touch Display',
    category: 'Display Modules',
    price: 16000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Standalone Human Machine Interface smart TFT display.',
    fullDescription: 'Programmable HMI touchscreen with GUI editor software communicating over simple TTL Serial UART.',
    specs: ['Resolution: 320x240', 'Flash: 4MB', 'RAM: 3584 Bytes', 'Communication: TTL Serial']
  },
  {
    id: 'st7735-144-tft-lcd',
    name: '1.44 inch SPI Full Color TFT LCD ST7735',
    category: 'Display Modules',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: '128x128 pixel 65K color graphic display module.',
    fullDescription: 'Compact square TFT color screen driven via SPI bus, suitable for wearable electronics.',
    specs: ['Resolution: 128x128', 'Driver: ST7735', 'Colors: 65K Full Color', 'Interface: SPI']
  },
  {
    id: 'st7789-13-tft-lcd',
    name: '1.3 inch IPS HD 240x240 Color LCD Screen',
    category: 'Display Modules',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'IPS full view high resolution TFT screen (ST7789).',
    fullDescription: 'Vivid color display with wide IPS viewing angles and high 240x240 pixel density.',
    specs: ['Resolution: 240x240', 'Technology: IPS Screen', 'Driver: ST7789', 'Voltage: 3.3V']
  },
  {
    id: 'epaper-213-eink-display',
    name: '2.13 inch E-Paper E-Ink Display Module',
    category: 'Display Modules',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Ultra-low power multi-color electronic paper display.',
    fullDescription: 'Retains text image display indefinitely without power, only consuming power during refresh.',
    specs: ['Resolution: 250x122', 'Interface: SPI', 'Zero power image retention', 'Color: Black/White']
  },
  {
    id: 'rgb-led-strip-ws2812b-1m',
    name: 'WS2812B Addressable RGB LED Strip (1m 60 LEDs)',
    category: 'Display Modules',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: '1 meter individually addressable smart RGB LED strip.',
    fullDescription: 'Each LED has an integrated driver IC allowing individual control over color and brightness.',
    specs: ['LED Count: 60 LEDs/m', 'Control Protocol: Single wire WS2812B', 'Voltage: 5V DC']
  },
  {
    id: 'neopixel-ring-16-led',
    name: 'WS2812B 16 LED RGB Ring Light Module',
    category: 'Display Modules',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Circular 16-bit addressable full color LED ring.',
    fullDescription: 'Compact circular ring containing 16 individually addressable 5050 RGB LEDs.',
    specs: ['LEDs: 16 x 5050 RGB', 'Outer Diameter: 45mm', 'Voltage: 5V', 'Single bus control']
  },

  // --- POWER & MOTORS (61-80) ---
  {
    id: 'l298n-motor-driver',
    name: 'L298N Dual H-Bridge Motor Driver',
    category: 'Power & Motors',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Dual DC motor driver controller module.',
    fullDescription: 'High power motor driver module for driving DC motors and stepper motors containing an L298N IC.',
    specs: ['Driver: L298N dual H-bridge', 'Supply Voltage: 5V - 35V DC', 'Peak Current: 2A per channel']
  },
  {
    id: 'sg90-servo-motor',
    name: 'TowerPro SG90 Micro Servo Motor 9g',
    category: 'Power & Motors',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Lightweight 9g analog servo motor for robotics.',
    fullDescription: 'Tiny and lightweight 9g servo motor with high output power. Rotates approximately 180 degrees.',
    specs: ['Weight: 9g', 'Torque: 1.8 kg/cm', 'Speed: 0.1 sec/60°', 'Operating Voltage: 4.8V-6V']
  },
  {
    id: 'mg996r-metal-gear-servo',
    name: 'MG996R High Torque Metal Gear Servo',
    category: 'Power & Motors',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Heavy-duty metal gear digital servo motor.',
    fullDescription: 'High torque servo equipped with brass metal gears for heavy robotic arms and steering systems.',
    specs: ['Stall Torque: 11 kg/cm (6V)', 'Gear Type: Metal', 'Rotation: 180 Degrees', 'Weight: 55g']
  },
  {
    id: 'nema17-stepper-motor',
    name: 'NEMA 17 Stepper Motor 42BYGH',
    category: 'Power & Motors',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'High torque bipolar stepper motor for 3D printers and CNC.',
    fullDescription: 'Standard 1.8 degree step angle NEMA 17 stepper motor widely used in CNC machines and 3D printing builds.',
    specs: ['Step Angle: 1.8°', 'Holding Torque: 40Ncm', 'Rated Current: 1.7A', 'Phases: 2 Phase']
  },
  {
    id: 'a4988-stepper-driver',
    name: 'A4988 Stepper Motor Driver with Heat Sink',
    category: 'Power & Motors',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Microstepping driver IC for bipolar stepper motors.',
    fullDescription: 'Features adjustable current limiting, overcurrent protection, and five microstep resolutions.',
    specs: ['Microstep Resolutions: Full, 1/2, 1/4, 1/8, 1/16', 'Max Voltage: 35V', 'Peak Current: 2A']
  },
  {
    id: 'drv8825-stepper-driver',
    name: 'DRV8825 High Current Stepper Motor Driver Module',
    category: 'Power & Motors',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'High power replacement upgrade for A4988 drivers.',
    fullDescription: 'Supports microstepping down to 1/32 step and driving voltage up to 45V.',
    specs: ['Microstepping: Up to 1/32 step', 'Maximum Voltage: 45V', 'Output Current: 2.5A peak']
  },
  {
    id: 'dc-gear-motor-wheel-kit',
    name: 'TT DC Gear Motor with Robot Wheel',
    category: 'Power & Motors',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Dual axis 3-6V gear motor with rubber tire wheel.',
    fullDescription: 'Standard yellow dual-shaft gear motor designed for smart robot chassis kits.',
    specs: ['Gear Ratio: 1:48', 'Voltage: 3V - 6V DC', 'Tire Diameter: 65mm', 'No-load speed: 200RPM']
  },
  {
    id: 'l293d-motor-shield',
    name: 'L293D Motor Driver Extension Shield for Arduino',
    category: 'Power & Motors',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Drives 4 DC motors or 2 stepper motors + 2 servos.',
    fullDescription: 'Full-featured motor shield capable of driving multiple inductive loads.',
    specs: ['DC Motors: Up to 4', 'Steppers: Up to 2', 'Servos: 2 connections', 'Current: 0.6A per bridge']
  },
  {
    id: 'relay-module-5v-1ch',
    name: '1-Channel 5V Relay Module with Optocoupler',
    category: 'Power & Motors',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: '5V isolated control relay board for high voltage AC switching.',
    fullDescription: 'Optocoupler isolated relay switch for safely controlling home AC light mains via microcontrollers.',
    specs: ['Max Load: AC 250V/10A, DC 30V/10A', 'Trigger Current: 5mA', 'Voltage: 5V DC']
  },
  {
    id: 'relay-module-5v-4ch',
    name: '4-Channel 5V Relay Expansion Module',
    category: 'Power & Motors',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: '4-channel switching relay array for automation.',
    fullDescription: 'Multi-channel isolated relay control board for smart home switching projects.',
    specs: ['Channels: 4 independent relays', 'Indication LEDs per channel', 'Max switching: 250VAC 10A']
  },
  {
    id: 'relay-module-5v-8ch',
    name: '8-Channel 5V Relay Board with Optocoupler',
    category: 'Power & Motors',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: '8-channel heavy load control module for industrial control.',
    fullDescription: 'Full 8 channel relay output interface module compatible with microcontrollers.',
    specs: ['Channels: 8 Channels', 'Isolation: Optocouplers', 'Relay Voltage: 5V DC']
  },
  {
    id: 'lm2596-step-down-buck-converter',
    name: 'LM2596 DC-DC Adjustable Step-Down Buck Converter',
    category: 'Power & Motors',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Voltage step down power supply module up to 3A.',
    fullDescription: 'High efficiency step-down buck voltage converter with high precision potentiometer.',
    specs: ['Input Voltage: 4V to 35V', 'Output Voltage: 1.23V to 30V adjustable', 'Max Output Current: 3A']
  },
  {
    id: 'xl6009-step-up-boost-converter',
    name: 'XL6009 DC-DC Adjustable Boost Voltage Converter',
    category: 'Power & Motors',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: '400KHz step-up power supply module.',
    fullDescription: 'High-performance 4A switching frequency step-up boost converter module.',
    specs: ['Input: 3V - 32V', 'Output: 5V - 35V Adjustable', 'Switching Frequency: 400KHz']
  },
  {
    id: 'tp4056-battery-charger-module',
    name: 'TP4056 1S 3.7V Lithium Battery Charger Board with Protection',
    category: 'Power & Motors',
    price: 800,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Micro/Type-C USB Li-Po 18650 battery charging circuit.',
    fullDescription: 'Linear charge module with over-discharge and over-current dual protection ICs.',
    specs: ['Charge Current: 1A adjustable', 'Full Charge Voltage: 4.2V ± 1%', 'Input: Type-C / Micro USB']
  },
  {
    id: '18650-battery-shield-v3',
    name: '18650 Battery Shield V3 Micro USB',
    category: 'Power & Motors',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Mobile power expansion board for ESP32 / Arduino.',
    fullDescription: 'Holds one 18650 battery to deliver regulated 5V and 3.3V power rails to development boards.',
    specs: ['Output: 5V/2A and 3.3V/1A', 'Protection: Overcharge/Overdischarge', 'Port: USB Type-A out']
  },
  {
    id: 'solar-panel-5v-1w',
    name: '5V 1W Polycrystalline Solar Panel',
    category: 'Power & Motors',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Mini outdoor power harvesting solar cell.',
    fullDescription: 'Compact polycrystalline solar photovoltaic panel for outdoor DIY battery charging.',
    specs: ['Voltage Output: 5V', 'Power: 1 Watt', 'Current Output: 200mA max']
  },
  {
    id: 'ac-dc-power-supply-12v-2a',
    name: '12V 2A AC to DC Power Adapter Supply',
    category: 'Power & Motors',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Standard 12V 2000mA power adapter with 5.5mm jack.',
    fullDescription: 'Stable regulated power supply plug for powering microcontrollers, LED strips, and motor drivers.',
    specs: ['Input: 100V-240V AC', 'Output: 12V DC 2A', 'Plug size: 5.5mm x 2.1mm']
  },
  {
    id: 'mini-water-submersible-pump-5v',
    name: 'Mini Submersible DC Water Pump 3V-5V',
    category: 'Power & Motors',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Low noise quiet DC fluid pump for automated gardening.',
    fullDescription: 'Submersible water pump designed for small automated irrigation and aquarium circulating systems.',
    specs: ['Voltage: 3V - 5V DC', 'Flow Rate: 80-120L/H', 'Outside Diameter: 7.5mm']
  },
  {
    id: 'solenoid-valve-12v',
    name: '12V Electric Solenoid Valve for Water Air',
    category: 'Power & Motors',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Normally closed 1/2" fluid control switch valve.',
    fullDescription: 'Electronically controlled 12V DC flow valve for automated pipe valve control.',
    specs: ['Port Size: 1/2 inch', 'Operation: Normally Closed (NC)', 'Voltage: 12V DC']
  },
  {
    id: 'servo-driver-pca9685',
    name: 'PCA9685 16-Channel 12-bit PWM Servo Driver',
    category: 'Power & Motors',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'I2C controlled 16 channel PWM controller board.',
    fullDescription: 'Expand microcontroller capabilities to drive up to 16 servo motors using only 2 I2C pins.',
    specs: ['Channels: 16', 'Resolution: 12-bit', 'Interface: I2C', 'Voltage: 5V - 10V']
  },

  // --- WIRING, CONNECTORS & TOOLS (81-96) ---
  {
    id: 'jumper-wires-40pc',
    name: '40pcs Breadboard Jumper Wires (M-F / M-M / F-F)',
    category: 'Wiring & Connectors',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: '40-wire ribbon cable for breadboard prototyping.',
    fullDescription: 'High quality 20cm flexible jumper cables for electronic prototyping on solderless breadboards.',
    specs: ['Length: 20 cm', 'Wire Count: 40', 'Standard Pitch: 2.54mm']
  },
  {
    id: 'solderless-breadboard-830',
    name: '830 Point Solderless Breadboard',
    category: 'Wiring & Connectors',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Large full-size solderless electronic circuit prototyping board.',
    fullDescription: 'Standard 830 tie-point breadboard featuring dual power rails and self-adhesive backing tape.',
    specs: ['Tie Points: 830', 'Wire Range: 21-26 AWG', 'Dimensions: 16.5cm x 5.5cm']
  },
  {
    id: 'mini-breadboard-170',
    name: '170 Point Mini Solderless Breadboard',
    category: 'Wiring & Connectors',
    price: 800,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Compact mini tie-point prototype board.',
    fullDescription: 'Small modular breadboard suitable for tiny shield designs and quick testing.',
    specs: ['Tie Points: 170', 'Multiple Colors available', 'Self-adhesive tape on back']
  },
  {
    id: 'ftdi-ft232rl-usb-ttl-adapter',
    name: 'FTDI FT232RL USB to Serial TTL Adapter',
    category: 'Wiring & Connectors',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'USB to TTL UART converter module.',
    fullDescription: 'Converter module used for programming boards without native USB chips like Arduino Pro Mini.',
    specs: ['Chipset: FT232RL', 'Switchable Voltage: 3.3V or 5V', 'Pinouts: TXD, RXD, RTS, CTS, VCC, GND']
  },
  {
    id: 'logic-level-converter-4ch',
    name: '4-Channel Bi-Directional Logic Level Converter',
    category: 'Wiring & Connectors',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Safe 5V to 3.3V voltage step shifter module.',
    fullDescription: 'Safely steps down 5V signals to 3.3V and steps up 3.3V to 5V at the same time bi-directionally.',
    specs: ['Channels: 4 Channels', 'High Voltage side: Up to 5V', 'Low Voltage side: Down to 1.8V']
  },
  {
    id: 'digital-multimeter-dt830b',
    name: 'DT830B Digital Multimeter Tester',
    category: 'Wiring & Connectors',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Handheld LCD electronic diagnostic measuring instrument.',
    fullDescription: 'Essential tool for measuring AC/DC Voltage, DC Current, Resistance, Diode, and Transistor testing.',
    specs: ['DC Voltage: 200mV - 1000V', 'AC Voltage: 200V - 750V', 'DC Current: 200uA - 10A']
  },
  {
    id: 'soldering-iron-kit-60w',
    name: '60W Adjustable Temperature Soldering Iron Kit',
    category: 'Wiring & Connectors',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Temperature-controlled welding iron with interchangeable tips.',
    fullDescription: 'Complete soldering set with temperature control dial (200°C - 450°C) and stand.',
    specs: ['Power: 60 Watts', 'Adjustable Range: 200°C - 450°C', 'Includes 5 replacement tips']
  },
  {
    id: 'desoldering-vacuum-pump',
    name: 'Solder Sucker Desoldering Vacuum Pump',
    category: 'Wiring & Connectors',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Manual solder remover suction tool.',
    fullDescription: 'High vacuum suction pump designed for clearing molten excess solder off circuit boards.',
    specs: ['Body Material: Aluminum alloy', 'High suction power', 'Replaceable Teflon tip']
  },
  {
    id: 'lead-free-solder-wire-100g',
    name: '60/40 Rosin Core Solder Wire 100g',
    category: 'Wiring & Connectors',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: '0.8mm electrical soldering wire spool with flux core.',
    fullDescription: 'High quality tin-lead rosin core flux soldering wire for PCB electronic assembly.',
    specs: ['Diameter: 0.8 mm', 'Weight: 100g', 'Flux core: 2.0%']
  },
  {
    id: 'wire-stripper-cutter-tool',
    name: 'Multi-Function Wire Stripper and Cutter',
    category: 'Wiring & Connectors',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Precision wire stripping pliers for AWG 10-22.',
    fullDescription: 'Hand tool tailored for cleanly cutting and stripping wire insulation without damaging copper conductors.',
    specs: ['Stripping Range: AWG 10-22', 'Built-in wire cutter', 'Spring loaded handle']
  },
  {
    id: 'heat-shrink-tubing-kit-127pcs',
    name: '127pcs Electrical Insulation Heat Shrink Tubing Kit',
    category: 'Wiring & Connectors',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Assorted polyolefin shrink sleeve insulation tubes.',
    fullDescription: 'Set of multi-size flame retardant heat shrinkable sleeves for insulating wire joints.',
    specs: ['Shrinkage Ratio: 2:1', 'Sizes: 2.0mm to 13.0mm', 'Material: Polyolefin']
  },
  {
    id: 'alligator-clip-test-leads-10pcs',
    name: '10pcs Double-ended Alligator Clip Test Leads',
    category: 'Wiring & Connectors',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: '50cm colorful electrical test jumper cables with crocodile clips.',
    fullDescription: 'Flexible insulated crocodile test leads for quick temporary circuit connections.',
    specs: ['Length: 50 cm', 'Quantity: 10 pieces (5 colors)', 'Clip Material: Nickel plated steel']
  },
  {
    id: 'dc-power-jack-adapter-pair',
    name: '5 Pairs Male/Female 2.1x5.5mm DC Power Jack Adapter',
    category: 'Wiring & Connectors',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Screw terminal block connector to DC barrel plug.',
    fullDescription: 'Solderless screw adapter connectors for quickly wiring DC power supplies into project leads.',
    specs: ['Plug Size: 5.5mm x 2.1mm', 'Type: Male & Female pair', 'No soldering required']
  },
  {
    id: 'prototyping-perfboard-kit',
    name: '10pcs Double-Sided Prototype PCB Circuit Board Set',
    category: 'Wiring & Connectors',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Universal perforated glass fiber FR4 boards.',
    fullDescription: 'Durable pre-tinned copper grid perfboards for soldering permanent electronic projects.',
    specs: ['Material: FR4 Glass Fiber', 'Hole Pitch: 2.54mm standard', 'Assorted sizes']
  },
  {
    id: 'anti-static-tweezers-set',
    name: '6pcs ESD Anti-Static Precision Tweezers Set',
    category: 'Wiring & Connectors',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Stainless steel non-magnetic tweezers for SMD components.',
    fullDescription: 'Electrostatic discharge safe precision tweezers tailored for delicate electronic component placement.',
    specs: ['Coating: Anti-static ESD coating', 'Material: Stainless Steel', 'Set: 6 specialized shapes']
  },
  {
    id: 'component-storage-box-organizer',
    name: '24 Compartment Plastic Component Storage Box',
    category: 'Wiring & Connectors',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Adjustable divider organizer case for electronic parts.',
    fullDescription: 'Clear plastic organizer container box with removable dividers for sorting IC chips, resistors, and LEDs.',
    specs: ['Compartments: Up to 24 grid sections', 'Clear transparent lid', 'Snap-tight latch closure']
  }
];