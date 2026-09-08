export interface Equipment {
  id: string;
  name: string;
  category: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  specs: string[];
  image: string;
}

export const EQUIPMENT_LIST: Equipment[] = [
  // --- MICROCONTROLLERS & DEVELOPMENT BOARDS ---
  {
    id: 'gsm-900a',
    name: 'GSM 900a Module',
    category: 'Microcontrollers',
    price: 8500,
    shortDescription: 'Dual-band GSM/GPRS wireless communication module.',
    fullDescription: 'Allows microcontrollers to send SMS messages, make phone calls, and transmit GPRS data.',
    specs: ['Dual-band 900/1800 MHz', 'UART Interface', 'SIM card slot'],
    image: '/gsm-900a.jpg'
  },
  {
    id: 'gps-neo-7',
    name: 'GPS NEO-7M Module',
    category: 'Microcontrollers',
    price: 7500,
    shortDescription: 'High-precision satellite positioning GPS module.',
    fullDescription: 'Provides exact geographical coordinates, altitude, and speed via serial interface.',
    specs: ['UART Communication', 'Built-in active antenna', 'Eeprom for configuration storage'],
    image: '/default.jpg'
  },
  {
    id: 'gsm-900-big',
    name: 'GSM 900 BIG Module',
    category: 'Microcontrollers',
    price: 9500,
    shortDescription: 'Industrial grade GSM 900 board with onboard power circuit.',
    fullDescription: 'Heavy-duty GSM modem module designed for stable long-term field deployment.',
    specs: ['High power efficiency', 'External antenna port', 'RS232/TTL compatible'],
    image: '/default.jpg'
  },
  {
    id: 'gsm-sim-800c',
    name: 'GSM SIM 800C Module',
    category: 'Microcontrollers',
    price: 7000,
    shortDescription: 'Compact quad-band GSM/GPRS engine.',
    fullDescription: 'Low power consumption cell module for IoT and tracking applications.',
    specs: ['Quad-band 850/900/1800/1900MHz', 'Bluetooth 3.0 supported'],
    image: '/sim800l.jpg'
  },
  {
    id: 'gsm-gps-gprs-sim-800',
    name: 'GSM GPS GPRS SIM 800 Combo',
    category: 'Microcontrollers',
    price: 12500,
    shortDescription: 'All-in-one cellular tracking and satellite board.',
    fullDescription: 'Combines GSM communication and GPS positioning into a single breakout board.',
    specs: ['Integrated GPS & GSM antenna ports', 'Micro SIM slot'],
    image: '/sim800l.jpg'
  },
  {
    id: 'gsm-sim-800l',
    name: 'GSM SIM 800L Micro Module',
    category: 'Microcontrollers',
    price: 5500,
    shortDescription: 'Ultra-small cellular board for embedded IoT.',
    fullDescription: 'Micro-sized SIM module ideal for space-constrained electronics projects.',
    specs: ['Quad-band support', 'Operating Voltage: 3.7V - 4.2V'],
    image: '/sim800l.jpg'
  },
  {
    id: 'esp-32',
    name: 'ESP32 Wi-Fi + Bluetooth MCU',
    category: 'Microcontrollers',
    price: 5500,
    shortDescription: '32-bit dual-core microcontroller with wireless connectivity.',
    fullDescription: 'High performance microcontroller with built-in Wi-Fi and Bluetooth BLE.',
    specs: ['Dual-core Xtensa LX6', 'Integrated Wi-Fi & BLE', '30 GPIO pins'],
    image: '/esp32.jpg'
  },
  {
    id: 'esp-8266-nodemcu',
    name: 'ESP8266 NodeMCU Module',
    category: 'Microcontrollers',
    price: 4500,
    shortDescription: 'Popular open-source Wi-Fi development board.',
    fullDescription: 'Features built-in Wi-Fi and integrated micro-USB programmer.',
    specs: ['ESP-12E Chip', 'Wi-Fi 802.11 b/g/n', 'Micro-USB interface'],
    image: '/esp8266.jpg'
  },
  {
    id: 'arduino-mega',
    name: 'Arduino Mega 2560',
    category: 'Microcontrollers',
    price: 12000,
    shortDescription: 'High pin-count microcontroller board for large projects.',
    fullDescription: 'Designed for complex projects requiring extra I/O lines, 54 digital pins, and 16 analog inputs.',
    specs: ['ATmega2560', '54 Digital Pins', '16 Analog Inputs'],
    image: '/arduino_mega.jpg'
  },
  {
    id: 'esp-01-e',
    name: 'ESP-01 / ESP-01S Wi-Fi Module',
    category: 'Microcontrollers',
    price: 2500,
    shortDescription: 'Ultra-compact serial Wi-Fi transceiver.',
    fullDescription: 'Tiny Wi-Fi board designed to add wireless functionality to Arduino via serial commands.',
    specs: ['802.11 b/g/n Wi-Fi', 'Operating Voltage: 3.3V', '2 GPIO pins'],
    image: '/default.jpg'
  },
  {
    id: 'esp-32-cam',
    name: 'ESP32-CAM Board with OV2640',
    category: 'Microcontrollers',
    price: 6500,
    shortDescription: 'Wi-Fi video camera development module.',
    fullDescription: 'Compact camera board combining ESP32 with an OV2640 camera and SD slot.',
    specs: ['OV2640 Camera', 'MicroSD Slot', 'Video streaming capabilities'],
    image: '/esp32_cam.jpg'
  },
  {
    id: 'nrfl24-l',
    name: 'nRF24L01 Wireless Transceiver',
    category: 'Microcontrollers',
    price: 2000,
    shortDescription: '2.4GHz RF wireless communication module.',
    fullDescription: 'Cost-effective RF transceiver for point-to-point or multi-point wireless communication.',
    specs: ['2.4GHz ISM Band', '100m range', 'SPI Interface'],
    image: '/default.jpg'
  },
  {
    id: 'esp-01-programmer',
    name: 'ESP-01 USB Adapter Programmer',
    category: 'Microcontrollers',
    price: 2000,
    shortDescription: 'CH340G USB to serial programmer adapter for ESP-01.',
    fullDescription: 'Plugs ESP-01 directly into USB ports for effortless code flashing.',
    specs: ['CH340 USB Chip', 'Onboard 3.3V voltage regulator'],
    image: '/default.jpg'
  },
  {
    id: 'arduino-nano',
    name: 'Arduino Nano V3.0',
    category: 'Microcontrollers',
    price: 4500,
    shortDescription: 'Breadboard-friendly mini ATmega328 board.',
    fullDescription: 'Compact development board with identical features to Arduino Uno.',
    specs: ['ATmega328P', 'Mini-USB port', 'Breadboard layout'],
    image: '/Arduino_nano_with.jpg'
  },
  {
    id: 'nrfl24-long',
    name: 'nRF24L01+ PA + LNA Long Antenna',
    category: 'Microcontrollers',
    price: 4500,
    shortDescription: 'Long-range 2.4G RF module with external SMA antenna.',
    fullDescription: 'Features power amplifier and low noise amplifier for up to 1000 meters range.',
    specs: ['1000m range', 'SMA antenna included', '2.4GHz Frequency'],
    image: '/default.jpg'
  },
  {
    id: 'esp-extension-green',
    name: 'ESP32 Expansion Board (Green)',
    category: 'Microcontrollers',
    price: 3000,
    shortDescription: 'Terminal breakout board for 30-pin ESP32.',
    fullDescription: 'Expands ESP32 GPIO pins into convenient screw terminals and pin headers.',
    specs: ['30-Pin Compatible', 'Screw terminal connections'],
    image: '/default.jpg'
  },
  {
    id: 'usb-to-ttl-red',
    name: 'USB to TTL Serial Adapter (Red)',
    category: 'Microcontrollers',
    price: 2500,
    shortDescription: 'FT232 / CP2102 USB to UART converter module.',
    fullDescription: 'Used to program bare microcontrollers and communicate via serial terminal.',
    specs: ['3.3V and 5V selectable power', 'Tx/Rx Status LEDs'],
    image: '/default.jpg'
  },
  {
    id: 'esp32-extension',
    name: 'ESP32 Terminal Expansion Shield',
    category: 'Microcontrollers',
    price: 3500,
    shortDescription: 'Full breakout board with power jack for ESP32.',
    fullDescription: 'Simplifies wiring for industrial IoT automation projects.',
    specs: ['Dual-row headers', 'DC power jack input'],
    image: '/default.jpg'
  },

  // --- SENSORS & MODULES ---
  {
    id: 'ov7670',
    name: 'OV7670 VGA Camera Module',
    category: 'Sensors & Modules',
    price: 4500,
    shortDescription: '640x480 resolution CMOS camera sensor.',
    fullDescription: 'Low cost image sensor for microcontrollers capable of capturing VGA video/stills.',
    specs: ['VGA 640x480', 'Standard SCCB interface'],
    image: '/default.jpg'
  },
  {
    id: 'heart-rate',
    name: 'Pulse Heart Rate Sensor',
    category: 'Sensors & Modules',
    price: 3000,
    shortDescription: 'Optical heart rate biometrics sensor.',
    fullDescription: 'Plug-and-play PPG pulse sensor for biometrics and medical devices.',
    specs: ['Analog signal output', '3.3V/5V compatible'],
    image: '/Fingerprint.jpg'
  },
  {
    id: 'capacitive-sensor-soil',
    name: 'Capacitive Soil Moisture Sensor',
    category: 'Sensors & Modules',
    price: 2500,
    shortDescription: 'Corrosion-resistant soil moisture detection module.',
    fullDescription: 'Uses capacitive sensing rather than resistive to prevent sensor degradation.',
    specs: ['Analog output', 'Corrosion resistant PCB'],
    image: '/Soil_Moisture.jpg'
  },
  {
    id: 'ph-sensor',
    name: 'Analog pH Sensor Kit',
    category: 'Sensors & Modules',
    price: 18000,
    shortDescription: 'Liquid pH measurement probe with conditioning board.',
    fullDescription: 'Designed for monitoring water purity, aquaponics, and chemical analysis.',
    specs: ['BNC Connector Probe', 'pH 0-14 detection'],
    image: '/pH_Sensor.jpg'
  },
  {
    id: 'max4495-thermo',
    name: 'MAX6675 / MAX4495 Thermocouple Sensor',
    category: 'Sensors & Modules',
    price: 4500,
    shortDescription: 'K-type thermocouple high-temperature sensor board.',
    fullDescription: 'Capable of measuring extreme temperatures up to 1024°C.',
    specs: ['0°C to 1024°C range', 'SPI digital interface'],
    image: '/default.jpg'
  },
  {
    id: 'turbidity-sensor',
    name: 'Water Turbidity Sensor Module',
    category: 'Sensors & Modules',
    price: 8500,
    shortDescription: 'Liquid suspended particle concentration sensor.',
    fullDescription: 'Optical sensor measuring water clarity for filtration and environmental tracking.',
    specs: ['Analog & Digital outputs', 'Waterproof optical probe'],
    image: '/pH_Sensor.jpg'
  },
  {
    id: 'big-weight-sensor',
    name: '50kg Load Cell Strain Gauge',
    category: 'Sensors & Modules',
    price: 4000,
    shortDescription: 'Heavy-duty weight measuring sensor half-bridge.',
    fullDescription: 'Used in electronic scales to measure physical weight up to 50kg per sensor.',
    specs: ['50kg capacity', 'Half-bridge strain gauge'],
    image: '/default.jpg'
  },
  {
    id: 'dc-voltage-sensor',
    name: 'DC Voltage Detection Module (0-25V)',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Resistive divider voltage measurement module.',
    fullDescription: 'Allows 5V microcontrollers to read higher DC voltages safely.',
    specs: ['0-25V Range', '5:1 Voltage divider'],
    image: '/default.jpg'
  },
  {
    id: 'light-intensity-sensor',
    name: 'BH1750 Digital Light Intensity Sensor',
    category: 'Sensors & Modules',
    price: 2500,
    shortDescription: 'High-precision Lux light meter module.',
    fullDescription: 'Measures ambient brightness directly in Lux units over I2C.',
    specs: ['1-65535 Lux range', 'I2C Interface'],
    image: '/default.jpg'
  },
  {
    id: 'max3001',
    name: 'MAX30102 / MAX3001 Pulse Oximeter & HR Module',
    category: 'Sensors & Modules',
    price: 4500,
    shortDescription: 'Biometric SpO2 blood oxygen and heart rate sensor.',
    fullDescription: 'Integrated pulse oximetry and heart-rate monitor module.',
    specs: ['I2C Interface', 'Low power optical solution'],
    image: '/Fingerprint.jpg'
  },
  {
    id: 'infrared',
    name: 'IR Obstacle Avoidance Sensor',
    category: 'Sensors & Modules',
    price: 1200,
    shortDescription: 'Infrared proximity and line-following sensor.',
    fullDescription: 'Emits and detects IR light to register obstacles ahead.',
    specs: ['2cm-30cm range', 'Adjustable potentiometer sensitivity'],
    image: '/Infrared_Sensor.jpg'
  },
  {
    id: 'ldr-sensor',
    name: 'LDR Photoresistor Module',
    category: 'Sensors & Modules',
    price: 1000,
    shortDescription: 'Light-dependent resistor sensor board.',
    fullDescription: 'Detects darkness and ambient light transitions with digital/analog output.',
    specs: ['Digital switch output', 'Analog resistance output'],
    image: '/default.jpg'
  },
  {
    id: 'flame-sensor',
    name: 'Infrared Flame Detection Sensor',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Fire and flame wave detector.',
    fullDescription: 'Responds to light sources between 760nm to 1100nm for fire alarms.',
    specs: ['60-degree detection angle', 'Digital/Analog dual output'],
    image: '/Flame.jpg'
  },
  {
    id: 'dc-current-sensor',
    name: 'ACS712 DC Current Sensor (20A)',
    category: 'Sensors & Modules',
    price: 3000,
    shortDescription: 'Hall-effect current sensor module.',
    fullDescription: 'Measures up to 20A DC or AC current through precise Hall voltage output.',
    specs: ['100mV/A sensitivity', 'Galvanic isolation'],
    image: '/default.jpg'
  },
  {
    id: 'small-weight-sensor',
    name: '1kg Precision Load Cell Sensor',
    category: 'Sensors & Modules',
    price: 3500,
    shortDescription: 'Miniature precision weight strain gauge.',
    fullDescription: 'Compact load cell for precision desktop scale assemblies.',
    specs: ['1kg Max load', '4-wire bridge configuration'],
    image: '/default.jpg'
  },
  {
    id: 'bmp-sensor',
    name: 'BMP280 Barometric Pressure & Altitude Sensor',
    category: 'Sensors & Modules',
    price: 2500,
    shortDescription: 'Environmental pressure, temperature and elevation sensor.',
    fullDescription: 'High precision atmospheric pressure sensor for weather stations and drones.',
    specs: ['I2C / SPI Interface', '300-1100 hPa pressure range'],
    image: '/default.jpg'
  },
  {
    id: 'traffic-light',
    name: 'Traffic Light LED Module',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Red / Yellow / Green mini LED traffic signal display.',
    fullDescription: 'Educational display board for traffic management prototypes.',
    specs: ['5V Compatible', '3 Discrete Color LEDs'],
    image: '/default.jpg'
  },
  {
    id: 'ac-current-sensor',
    name: 'Non-Invasive AC Current Transformer (SCT-013)',
    category: 'Sensors & Modules',
    price: 6500,
    shortDescription: 'Clamp-on AC current transformer sensor.',
    fullDescription: 'Measures AC mains current safely without stripping wire insulation.',
    specs: ['0-100A AC range', '3.5mm jack output'],
    image: '/default.jpg'
  },
  {
    id: 'piezo-electric',
    name: 'Piezoelectric Vibration Sensor Module',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Vibration and physical shock detection board.',
    fullDescription: 'Converts mechanical stress or impacts into readable electrical voltage.',
    specs: ['Analog output proportional to shock', 'High sensitivity'],
    image: '/default.jpg'
  },
  {
    id: 'amplifier-weight',
    name: 'HX711 Load Cell Amplifier Module',
    category: 'Sensors & Modules',
    price: 2000,
    shortDescription: '24-Bit ADC module for weight strain gauges.',
    fullDescription: 'Amplifies weak load cell signals into high-resolution digital data.',
    specs: ['24-bit Analog-to-Digital converter', 'Two selectable differential channels'],
    image: '/default.jpg'
  },
  {
    id: 'velocity-sensor',
    name: 'Optocoupler Speed / Velocity Sensor',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Optical slot encoder for motor speed measurement.',
    fullDescription: 'Uses encoder disks to calculate RPM and motor speed.',
    specs: ['Slot width: 5mm', 'Digital output trigger'],
    image: '/default.jpg'
  },
  {
    id: 'distance-sensor',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Non-contact distance measurement module (2cm-400cm).',
    fullDescription: 'Provides precise distance measurement from 2cm to 400cm.',
    specs: ['2cm-400cm range', '5V DC operation'],
    image: '/hc_sr04.jpg'
  },
  {
    id: 'rfid-sensor',
    name: 'RC522 RFID Reader Module + Card',
    category: 'Sensors & Modules',
    price: 3500,
    shortDescription: '13.56MHz contactless RFID reader and tag kit.',
    fullDescription: 'Access control card reader using SPI interface.',
    specs: ['13.56MHz Frequency', 'SPI protocol', 'Keyfob + Card included'],
    image: '/default.jpg'
  },
  {
    id: 'fingerprint',
    name: 'Optical Fingerprint Biometric Sensor',
    category: 'Sensors & Modules',
    price: 14000,
    shortDescription: 'Biometric fingerprint scanner module.',
    fullDescription: 'Stores and matches fingerprints internally over UART serial connection.',
    specs: ['UART interface', 'Built-in memory flash'],
    image: '/Fingerprint.jpg'
  },
  {
    id: 'gas-sensor',
    name: 'MQ-2 Gas / Smoke Sensor',
    category: 'Sensors & Modules',
    price: 2500,
    shortDescription: 'LPG, Propane, and Smoke detection module.',
    fullDescription: 'Triggers safety alarms on gas leak detection.',
    specs: ['Analog & Digital Outputs'],
    image: '/MQ_Gas.jpg'
  },
  {
    id: 'mq3-sensor',
    name: 'MQ-3 Alcohol Sensor Module',
    category: 'Sensors & Modules',
    price: 2800,
    shortDescription: 'Ethanol and breathalyzer sensor module.',
    fullDescription: 'Measures alcohol concentration in the air.',
    specs: ['High sensitivity to alcohol', 'Fast response time'],
    image: '/MQ_Gas.jpg'
  },
  {
    id: 'water-sensor',
    name: 'Water Level Detection Depth Sensor',
    category: 'Sensors & Modules',
    price: 1200,
    shortDescription: 'Raindrop and water level liquid depth sensor.',
    fullDescription: 'Measures water immersion depth via parallel conductive traces.',
    specs: ['Analog depth reading', 'Low power consumption'],
    image: '/default.jpg'
  },
  {
    id: 'resistive-soil-moisture',
    name: 'Resistive Soil Moisture Sensor',
    category: 'Sensors & Modules',
    price: 1200,
    shortDescription: 'Two-prong soil humidity probe with amplifier.',
    fullDescription: 'Basic soil moisture sensor for indoor potted plant watering.',
    specs: ['Adjustable sensitivity', 'Dual digital/analog output'],
    image: '/Soil_Moisture.jpg'
  },
  {
    id: 'co2-sensor',
    name: 'MQ-135 Air Quality & CO2 Sensor',
    category: 'Sensors & Modules',
    price: 3000,
    shortDescription: 'Air quality, hazardous gas and CO2 sensor.',
    fullDescription: 'Monitors indoor air pollution, benzene, smoke, and CO2.',
    specs: ['Wide detection scope', 'Analog output'],
    image: '/MQ_Gas.jpg'
  },
  {
    id: 'hall-effect',
    name: 'Hall Effect Magnetic Sensor Module',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Magnetic field detector module.',
    fullDescription: 'Senses proximity of magnets for door contacts or rotational counters.',
    specs: ['Digital switch output', '3144 Hall element'],
    image: '/default.jpg'
  },
  {
    id: 'ultrasound',
    name: 'Waterproof Ultrasonic Distance Sensor',
    category: 'Sensors & Modules',
    price: 6500,
    shortDescription: 'JSN-SR04T Sealed waterproof distance sensor.',
    fullDescription: 'Industrial outdoor distance measuring sensor for liquid tanks and vehicles.',
    specs: ['Sealed waterproof probe', '20cm-600cm range'],
    image: '/hc_sr04.jpg'
  },

  // --- DISPLAY MODULES ---
  {
    id: 'lcd1602-i2c',
    name: 'LCD1602 Display with I2C Module',
    category: 'Display Modules',
    price: 3000,
    shortDescription: '16x2 character display with 2-wire I2C interface.',
    fullDescription: 'Saves microcontroller pins by driving the 16x2 screen using only SCL/SDA pins.',
    specs: ['16x2 Characters', 'Pre-soldered I2C backpack', 'Address 0x27 / 0x3F'],
    image: '/LCD_1602.jpg'
  },
  {
    id: 'lcd2004-i2c',
    name: 'LCD2004 Display with I2C Module',
    category: 'Display Modules',
    price: 5500,
    shortDescription: '20x4 character LCD screen with I2C module.',
    fullDescription: '4-line character display for expanded telemetry monitoring.',
    specs: ['20x4 Characters', 'I2C Backpack integrated'],
    image: '/LCD2004.jpg'
  },
  {
    id: 'oled-display',
    name: '0.96" I2C OLED Display (128x64)',
    category: 'Display Modules',
    price: 3500,
    shortDescription: 'High contrast graphic OLED screen.',
    fullDescription: 'Crisp, self-illuminating display module requiring no backlight.',
    specs: ['Resolution: 128x64', 'I2C protocol', 'Blue / Yellow dual color'],
    image: '/oled_display.jpg'
  },
  {
    id: 'voltage-display',
    name: 'Digital Mini Voltmeter Panel Display',
    category: 'Display Modules',
    price: 1800,
    shortDescription: '0.28" 3-Digit 0-100V LED Voltmeter.',
    fullDescription: 'Direct voltage reading display for custom bench supplies and battery packs.',
    specs: ['0-100V DC range', 'Red LED 7-segment'],
    image: '/default.jpg'
  },
  {
    id: 'tft-screen',
    name: '2.8" SPI TFT Color Display Screen',
    category: 'Display Modules',
    price: 9500,
    shortDescription: 'Full color 240x320 graphic display.',
    fullDescription: 'Supports custom GUI layouts and graphics rendering.',
    specs: ['240x320 resolution', 'ILI9341 controller chip', 'Integrated touch panel'],
    image: '/TFT_Touch_Display.jpg'
  },

  // --- POWER, MOTORS & ACTUATORS ---
  {
    id: '9v-power-supply',
    name: '9V 1A DC Power Adapter Supply',
    category: 'Power & Motors',
    price: 3000,
    shortDescription: 'AC to DC wall adapter power supply.',
    fullDescription: 'Standard wall plug adapter for Arduino boards and development hardware.',
    specs: ['Output: 9V DC 1A', '5.5mm x 2.1mm barrel plug'],
    image: '/default.jpg'
  },
  {
    id: 'bldc-1000-kv',
    name: 'A2212 1000KV Brushless Motor',
    category: 'Power & Motors',
    price: 7500,
    shortDescription: 'High-torque brushless DC motor for drones.',
    fullDescription: 'Standard motor choice for RC quadcopters and fixed-wing aircraft.',
    specs: ['1000KV rating', 'Max Efficiency Current: 4-10A'],
    image: '/default.jpg'
  },
  {
    id: 'brushless-pump',
    name: '12V Submersible Brushless Water Pump',
    category: 'Power & Motors',
    price: 6500,
    shortDescription: 'Mini 12V ultra-quiet water pump.',
    fullDescription: 'Designed for hydroponics, automatic plant watering, and liquid cooling systems.',
    specs: ['Flow rate: 240L/H', '12V DC input'],
    image: '/default.jpg'
  },
  {
    id: 'servo-blue',
    name: 'SG90 9g Micro Servo Motor (Blue)',
    category: 'Power & Motors',
    price: 2000,
    shortDescription: 'Standard 180-degree rotation micro servo.',
    fullDescription: 'Versatile mini servo motor for robotic arm joints and steerable mounts.',
    specs: ['Torque: 1.8 kg-cm', 'Weight: 9 grams'],
    image: '/servo_motor.jpg'
  },
  {
    id: 'esc-30a',
    name: '30A Brushless ESC Motor Controller',
    category: 'Power & Motors',
    price: 6000,
    shortDescription: 'Electronic speed controller for BLDC motors.',
    fullDescription: 'Regulates speed and power delivery for brushless drone motors.',
    specs: ['Continuous Current: 30A', 'BEC Output: 5V 2A'],
    image: '/default.jpg'
  },
  {
    id: '1245-propreller',
    name: '1245 Drone Propellers Pair (CW + CCW)',
    category: 'Power & Motors',
    price: 2500,
    shortDescription: '12x4.5 inch high efficiency quadcopter blades.',
    fullDescription: 'Matched counter-rotating propeller pair for multirotor airframes.',
    specs: ['Size: 12x4.5 inches', 'Reinforced nylon plastic'],
    image: '/default.jpg'
  },
  {
    id: 'big-lock',
    name: 'Heavy Duty 12V Solenoid Door Lock',
    category: 'Power & Motors',
    price: 8500,
    shortDescription: 'Industrial electronic latch lock assembly.',
    fullDescription: 'Electromagnetic door catch for biometric and keycard security doors.',
    specs: ['Operating Voltage: 12V DC', 'Stroke length: 10mm'],
    image: '/default.jpg'
  },
  {
    id: '4-relay-module',
    name: '4-Channel 5V Relay Module',
    category: 'Power & Motors',
    price: 3500,
    shortDescription: 'Control high-voltage AC devices via logic signals.',
    fullDescription: 'Optocoupler isolated 4-channel relay board for mains automation.',
    specs: ['10A 250VAC / 30VDC rated', 'Active Low trigger'],
    image: '/default.jpg'
  },
  {
    id: 'red-motor-driver',
    name: 'L298N Dual H-Bridge Motor Driver (Red)',
    category: 'Power & Motors',
    price: 3000,
    shortDescription: 'High-power dual DC motor driver module.',
    fullDescription: 'Drives two DC motors or one 4-wire stepper motor with direction control.',
    specs: ['Peak Current: 2A per bridge', '5V-35V motor voltage range'],
    image: '/default.jpg'
  },
  {
    id: 'xhw-1001',
    name: 'XHW-1001 Digital Temperature Controller',
    category: 'Power & Motors',
    price: 6500,
    shortDescription: 'Standalone thermostat switch module with probe.',
    fullDescription: 'Automatically switches load relays on/off based on set temperature limits.',
    specs: ['Range: -50°C to 110°C', 'High precision sensor probe included'],
    image: '/default.jpg'
  },
  {
    id: 'small-fan',
    name: '12V DC Brushless Cooling Fan',
    category: 'Power & Motors',
    price: 1500,
    shortDescription: '40mm x 40mm enclosure ventilation fan.',
    fullDescription: 'Prevents overheating in project boxes and 3D printers.',
    specs: ['4010 Size', '12V DC operational input'],
    image: '/default.jpg'
  },
  {
    id: 'small-lock',
    name: 'Mini 12V Solenoid Cabinet Lock',
    category: 'Power & Motors',
    price: 4500,
    shortDescription: 'Compact electronic latch catch.',
    fullDescription: 'Designed for small electronic lockers and safe box projects.',
    specs: ['12V DC pulse triggered', 'Compact footprint'],
    image: '/default.jpg'
  },
  {
    id: 'solenoid-valve',
    name: '12V Electric Solenoid Water Valve',
    category: 'Power & Motors',
    price: 5500,
    shortDescription: '1/2" Normally Closed electric fluid control valve.',
    fullDescription: 'Opens liquid passage electronically when 12V power is applied.',
    specs: ['1/2" Thread size', 'Normally Closed (NC) type'],
    image: '/default.jpg'
  },
  {
    id: 'water-pump',
    name: '5V Micro Submersible DC Water Pump',
    category: 'Power & Motors',
    price: 2500,
    shortDescription: 'Logic-level mini water pump.',
    fullDescription: 'Can be powered directly from USB or 5V power supply.',
    specs: ['5V DC operation', 'Flow rate: 80-120L/H'],
    image: '/default.jpg'
  },
  {
    id: '8-relay-module',
    name: '8-Channel 5V Relay Board',
    category: 'Power & Motors',
    price: 6500,
    shortDescription: '8-channel isolated relay module.',
    fullDescription: 'Controls up to 8 independent AC power loads simultaneously.',
    specs: ['Optocoupler isolation', '10A maximum switching load'],
    image: '/default.jpg'
  },
  {
    id: 'blue-motor-driver',
    name: 'Mini Dual DC Motor Driver Board (Blue)',
    category: 'Power & Motors',
    price: 2000,
    shortDescription: 'Compact MX1508 / L9110S motor driver.',
    fullDescription: 'Low power dual-channel motor driver ideal for mini mobile robots.',
    specs: ['2-Channel H-bridge', '2V-10V operating voltage'],
    image: '/default.jpg'
  },
  {
    id: 'red-buck-converter',
    name: 'LM2596 Step-Down Buck Converter (Red)',
    category: 'Power & Motors',
    price: 1800,
    shortDescription: 'Adjustable DC-DC voltage reducer.',
    fullDescription: 'Reduces higher DC input voltage down to stable circuit logic level.',
    specs: ['Input: 4.5V-40V', 'Output: 1.25V-35V Adjustable'],
    image: '/UVSTDStarterKit.jpg'
  },
  {
    id: 'boost-buck-blue-green',
    name: 'Automatic Step-Up / Step-Down Module',
    category: 'Power & Motors',
    price: 3500,
    shortDescription: 'Universal DC boost-buck regulator.',
    fullDescription: 'Maintains fixed output voltage even when battery input fluctuates above or below set point.',
    specs: ['Constant output voltage stability', 'High efficiency'],
    image: '/UVSTDStarterKit.jpg'
  },
  {
    id: 'a4955',
    name: 'A4955 PWM Full-Bridge Motor Driver',
    category: 'Power & Motors',
    price: 3500,
    shortDescription: 'Industrial PWM current-controlled DC motor IC module.',
    fullDescription: 'Provides precise motor braking and directional torque control.',
    specs: ['Peak 50V / 3A capability', 'Integrated overcurrent protection'],
    image: '/default.jpg'
  },
  {
    id: 'buck-boost-small',
    name: 'Mini Adjustable Step-Down Module',
    category: 'Power & Motors',
    price: 1200,
    shortDescription: 'Ultra-small MP1584 EN buck converter.',
    fullDescription: 'Tiny step-down power regulator for space-critical custom builds.',
    specs: ['3A Output Max', 'Up to 92% efficiency'],
    image: '/UVSTDStarterKit.jpg'
  },
  {
    id: '4wd',
    name: '4WD Smart Robot Car Chassis Kit',
    category: 'Power & Motors',
    price: 16000,
    shortDescription: '4-Wheel Drive robotic chassis platform.',
    fullDescription: 'Includes acrylic chassis, 4 DC gear motors, wheels, and speed encoders.',
    specs: ['4x Gearbox DC Motors', 'Dual acrylic deck plates'],
    image: '/4_Wheel_Car_Kit.jpg'
  },
  {
    id: '5-kit-robot',
    name: '5-in-1 Educational Robotics Assembly Kit',
    category: 'Power & Motors',
    price: 32000,
    shortDescription: 'Multi-functional mechanical robot platform package.',
    fullDescription: 'Complete builder kit for obstacle avoidance, line tracking, and remote steering.',
    specs: ['Includes chassis, motors, and sensors'],
    image: '/4DOF.jpg'
  },
  {
    id: '5v-power',
    name: '5V 2A Regulated DC Power Adapter',
    category: 'Power & Motors',
    price: 2500,
    shortDescription: 'Standard 5V USB / DC jack power brick.',
    fullDescription: 'Clean 5V power source for single board computers and development kits.',
    specs: ['Output: 5V DC 2000mA'],
    image: '/default.jpg'
  },
  {
    id: '12v',
    name: '12V 3A High Capacity Power Supply',
    category: 'Power & Motors',
    price: 5000,
    shortDescription: '12V heavy-duty DC adapter block.',
    fullDescription: 'Powers motor drivers, high power LED arrays, and water pumps.',
    specs: ['12V DC 3A output', 'Short circuit protected'],
    image: '/default.jpg'
  },

  // --- WIRING, CONNECTORS, TOOLS & ACCESSORIES ---
  {
    id: '65-mm-jumper',
    name: '65-Piece Solderless Breadboard Jumpers',
    category: 'Wiring & Connectors',
    price: 2000,
    shortDescription: 'Flexible male-to-male wire bundle.',
    fullDescription: 'Multi-length wire leads with durable molded pin ends for quick breadboarding.',
    specs: ['65 wires assortment', 'Male-to-Male connectors'],
    image: '/breadboard_kit.jpg'
  },
  {
    id: 'cnc-shield',
    name: 'Arduino CNC Shield V3.0',
    category: 'Wiring & Connectors',
    price: 3500,
    shortDescription: 'Expansion board for 3D printers and CNC routers.',
    fullDescription: 'Holds up to 4 stepper motor drivers (A4988 / DRV8825) for 3-axis CNC machines.',
    specs: ['GRBL Compatible', '4-Axis support (X, Y, Z, A)'],
    image: '/default.jpg'
  },
  {
    id: 'breadboard-power-supply',
    name: 'MB102 Breadboard Power Module (3.3V / 5V)',
    category: 'Wiring & Connectors',
    price: 2000,
    shortDescription: 'Pluggable dual-rail breadboard regulator.',
    fullDescription: 'Plugs directly into standard breadboards to output regulated 3.3V or 5V rail power.',
    specs: ['Input: DC Jack / USB', 'Dual output switchable rails'],
    image: '/breadboard_kit.jpg'
  },
  {
    id: 'sensor-shield',
    name: 'Arduino Sensor Shield V5.0',
    category: 'Wiring & Connectors',
    price: 3000,
    shortDescription: 'Full pin breakout expansion shield for Arduino.',
    fullDescription: 'Provides dedicated 3-pin VCC/GND/Signal headers for every single pin.',
    specs: ['Buckled Bluetooth & SD interface ports', 'Servo power terminal'],
    image: '/default.jpg'
  },
  {
    id: 'i2c-module',
    name: 'PCF8574 LCD I2C Backpack Adapter',
    category: 'Wiring & Connectors',
    price: 1200,
    shortDescription: 'Serial interface board for character displays.',
    fullDescription: 'Converts parallel 1602/2004 LCD screens to simple 2-wire I2C protocol.',
    specs: ['PCF8574 Chip', 'Potentiometer contrast adjustment'],
    image: '/default.jpg'
  },
  {
    id: 'joystick',
    name: 'Dual-Axis PS2 Joystick Module',
    category: 'Wiring & Connectors',
    price: 1500,
    shortDescription: 'Thumbstick controller with pushbutton switch.',
    fullDescription: 'Provides 2-axis analog directional readings plus a tactile click button.',
    specs: ['Dual X-Y analog outputs', 'Integrated push button switch'],
    image: '/default.jpg'
  },
  {
    id: 'sd-card-module',
    name: 'MicroSD Card Read/Write SPI Module',
    category: 'Wiring & Connectors',
    price: 1800,
    shortDescription: 'Storage expansion board for logging system data.',
    fullDescription: 'Allows microcontrollers to read and write files on standard MicroSD cards.',
    specs: ['SPI Interface', 'Onboard 3.3V level conversion chip'],
    image: '/default.jpg'
  },
  {
    id: 'keypad',
    name: '4x4 Matrix Membrane Keypad',
    category: 'Wiring & Connectors',
    price: 1800,
    shortDescription: '16-button entry keyboard panel.',
    fullDescription: 'Tactile input matrix panel for PIN code entry and security locks.',
    specs: ['16 Keys Matrix', 'Adhesive backing'],
    image: '/default.jpg'
  },
  {
    id: 'soldering-lead',
    name: 'High Quality Rosin Core Solder Wire',
    category: 'Wiring & Connectors',
    price: 2500,
    shortDescription: 'Fast-melting electronic soldering wire spool.',
    fullDescription: 'Contains rosin flux core for clean, reliable electrical connections.',
    specs: ['60/40 alloy mix', '0.8mm diameter spool'],
    image: '/default.jpg'
  },
  {
    id: 'arduino-kit',
    name: 'Ultimate Arduino Component Starter Kit',
    category: 'Wiring & Connectors',
    price: 25000,
    shortDescription: 'Comprehensive educational component box set.',
    fullDescription: 'Contains Arduino Uno, breadboard, LEDs, resistors, sensors, and jumper leads.',
    specs: ['Includes organizer case', 'Over 30 component types'],
    image: '/UVSTDStarterKit.jpg'
  },
  {
    id: '18650-charger',
    name: 'TP4056 18650 Lithium Battery Charger Board',
    category: 'Wiring & Connectors',
    price: 1000,
    shortDescription: '1A Li-ion micro-USB battery charging board.',
    fullDescription: 'Features dual protection ICs against overcharging and short circuits.',
    specs: ['1A charging rate', 'Micro-USB port', 'Battery protection built-in'],
    image: '/UVSTDStarterKit.jpg'
  },
  {
    id: 'multimeter',
    name: 'Digital Precision Multimeter Tester',
    category: 'Wiring & Connectors',
    price: 8500,
    shortDescription: 'Voltage, Current, Resistance, and Continuity tester.',
    fullDescription: 'Essential bench tool for troubleshooting electronic circuits.',
    specs: ['Backlit LCD', 'Includes test probe leads'],
    image: '/breadboard_kit.jpg'
  },
  {
    id: 'soldering-kit',
    name: '60W Adjustable Temperature Soldering Iron Kit',
    category: 'Wiring & Connectors',
    price: 12000,
    shortDescription: 'Complete soldering station set with accessories.',
    fullDescription: 'Includes temperature controlled iron, stand, tips, wire, and desoldering pump.',
    specs: ['60W Power', 'Adjustable 200°C - 450°C'],
    image: '/breadboard_kit.jpg'
  },
  {
    id: 'crimping-tool',
    name: 'Ratchet Wire Terminal Crimping Tool',
    category: 'Wiring & Connectors',
    price: 10500,
    shortDescription: 'Heavy duty wire crimper for Dupont and JST pins.',
    fullDescription: 'Ensures solid mechanical crimps on custom connector cables.',
    specs: ['AWG 28-18 capacity', 'Ratchet mechanism'],
    image: '/default.jpg'
  },
  {
    id: 'glue-gun',
    name: '40W Electric Hot Melt Glue Gun',
    category: 'Wiring & Connectors',
    price: 4500,
    shortDescription: 'Fast heating adhesive applicator.',
    fullDescription: 'Ideal for mounting sensors and insulating exposed connections in prototypes.',
    specs: ['40W Power', 'Includes glue sticks'],
    image: '/default.jpg'
  },
  {
    id: 'screw-driver',
    name: 'Precision Screwdriver Set (31-in-1)',
    category: 'Wiring & Connectors',
    price: 5000,
    shortDescription: 'Magnetic mini bit set for electronics.',
    fullDescription: 'Covers Torx, Phillips, and Flat bits for taking apart small electronics.',
    specs: ['31 magnetic bits', 'Ergonomic handle'],
    image: '/default.jpg'
  },
  {
    id: 'white-lab-jacket',
    name: 'UV-LAB Branded Technical White Lab Coat',
    category: 'Wiring & Connectors',
    price: 15000,
    shortDescription: 'Professional cotton workshop protective coat.',
    fullDescription: 'Heavy-duty cotton laboratory coat with embroidered UV-LAB logo.',
    specs: ['High grade cotton material', 'Multiple utility pockets'],
    image: '/default.jpg'
  }
];