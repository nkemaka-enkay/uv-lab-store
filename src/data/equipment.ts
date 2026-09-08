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
    id: 'arduino-uno',
    name: 'Arduino Uno R3',
    category: 'Microcontrollers',
    price: 6500,
    shortDescription: 'ATmega328P based microcontroller board for prototyping.',
    fullDescription: 'The Arduino Uno R3 is the staple development board for electronics and robotics projects, featuring 14 digital I/O pins and 6 analog inputs.',
    specs: ['Microcontroller: ATmega328P', 'Operating Voltage: 5V', 'Digital I/O Pins: 14', 'Analog Inputs: 6'],
    image: '/arduino_uno.jpg'
  },
  {
    id: 'arduino-uno-headers',
    name: 'Arduino Uno with Soldered Headers',
    category: 'Microcontrollers',
    price: 7000,
    shortDescription: 'Arduino Uno R3 pre-soldered with pin headers.',
    fullDescription: 'Ready-to-use Arduino Uno board with pre-soldered pin headers for immediate breadboard or jumper wire connection.',
    specs: ['ATmega328P', 'Pre-soldered headers', '5V operating voltage'],
    image: '/arduino_uno_with.jpg'
  },
  {
    id: 'arduino-mega',
    name: 'Arduino Mega 2560',
    category: 'Microcontrollers',
    price: 12000,
    shortDescription: 'High pin-count microcontroller board for large projects.',
    fullDescription: 'Designed for complex projects requiring extra I/O lines, 54 digital pins, and 16 analog inputs.',
    specs: ['Microcontroller: ATmega2560', 'Digital Pins: 54', 'Analog Inputs: 16', 'Flash Memory: 256 KB'],
    image: '/arduino_mega.jpg'
  },
  {
    id: 'arduino-nano-with',
    name: 'Arduino Nano (With Headers)',
    category: 'Microcontrollers',
    price: 4500,
    shortDescription: 'Compact ATmega328 board pre-soldered for breadboards.',
    fullDescription: 'Breadboard-friendly microcontroller with pre-soldered pin headers, ideal for compact DIY robotics.',
    specs: ['ATmega328P', 'Mini-USB connection', 'Pre-soldered headers'],
    image: '/Arduino_nano_with.jpg'
  },
  {
    id: 'arduino-nano-without',
    name: 'Arduino Nano (Unsoldered)',
    category: 'Microcontrollers',
    price: 4000,
    shortDescription: 'Compact ATmega328 board without headers.',
    fullDescription: 'Compact Arduino board supplied without soldered headers for low-profile soldering or custom mounting.',
    specs: ['ATmega328P', 'Unsoldered pin headers', 'Compact footprint'],
    image: '/Arduino_nano_without.jpg'
  },
  {
    id: 'esp32-devkit',
    name: 'ESP32 Wi-Fi + Bluetooth Board',
    category: 'Microcontrollers',
    price: 5500,
    shortDescription: 'Dual-core MCU with built-in Wi-Fi & Bluetooth.',
    fullDescription: 'Powerful 32-bit dual-core microcontroller featuring built-in Wi-Fi and Bluetooth BLE for IoT applications.',
    specs: ['Dual-core Xtensa LX6', 'Wi-Fi 802.11 b/g/n', 'Bluetooth v4.2 BR/EDR & BLE', '30 GPIO pins'],
    image: '/esp32.jpg'
  },
  {
    id: 'esp32-cam',
    name: 'ESP32-CAM Board with OV2640',
    category: 'Microcontrollers',
    price: 6500,
    shortDescription: 'ESP32 camera development board with SD card slot.',
    fullDescription: 'Compact camera board combining the ESP32 chip with an OV2640 camera module and MicroSD storage support.',
    specs: ['OV2640 Camera included', 'MicroSD Slot', 'Wi-Fi Video Streaming support'],
    image: '/esp32_cam.jpg'
  },
  {
    id: 'esp8266-nodemcu',
    name: 'NodeMCU ESP8266 Wi-Fi Module',
    category: 'Microcontrollers',
    price: 4500,
    shortDescription: 'Open-source Wi-Fi development board for IoT.',
    fullDescription: 'Popular LUA-based firmware board powered by the ESP8266 Wi-Fi chip for smart home and wireless projects.',
    specs: ['ESP-12E Module', 'Integrated Wi-Fi', 'Micro-USB power & programming'],
    image: '/esp8266.jpg'
  },
  {
    id: 'raspberry-pi-pico',
    name: 'Raspberry Pi Pico',
    category: 'Microcontrollers',
    price: 5000,
    shortDescription: 'RP2040 dual-core ARM Cortex-M0+ microcontroller board.',
    fullDescription: 'High-performance microcontroller board built on Raspberry Pi designed RP2040 chip.',
    specs: ['RP2040 Dual-core', '264KB SRAM', '2MB Flash Memory'],
    image: '/raspberry_pi_pico.jpg'
  },
  {
    id: 'raspberry-pi-4-kit',
    name: 'Raspberry Pi 4 Model B Kit',
    category: 'Microcontrollers',
    price: 55000,
    shortDescription: 'Complete single-board computer kit.',
    fullDescription: 'Full computing power for IoT gateways, computer vision, and robotics processing.',
    specs: ['Quad-core 1.5GHz CPU', '4GB RAM', 'Dual Micro-HDMI output'],
    image: '/raspberry_pi_Model_4 kit.jpg'
  },
  {
    id: 'raspberry-pi-b-plus',
    name: 'Raspberry Pi Model B+',
    category: 'Microcontrollers',
    price: 28000,
    shortDescription: 'Classic Linux single-board computer.',
    fullDescription: 'Single-board computer featuring 40 GPIO pins, 4 USB ports, and full HDMI connectivity.',
    specs: ['40-pin GPIO header', '4 USB 2.0 ports', 'Full-size HDMI'],
    image: '/raspberry_pi_Model_B+.jpg'
  },

  // --- SENSORS & BIOMETRICS ---
  {
    id: 'hc-sr04',
    name: 'HC-SR04 Ultrasonic Distance Sensor',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Non-contact distance measurement module (2cm - 400cm).',
    fullDescription: 'Provides precise distance measurement from 2cm to 400cm with high precision and stable readings.',
    specs: ['Working Voltage: 5V DC', 'Ranging Distance: 2cm – 400cm', 'Measuring Angle: 15 degrees'],
    image: '/hc_sr04.jpg'
  },
  {
    id: 'dht11-sensor',
    name: 'DHT11 Temperature & Humidity Sensor',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Digital temperature and humidity measurement module.',
    fullDescription: 'Composite sensor offering calibrated digital signal output for ambient temperature and humidity tracking.',
    specs: ['Humidity Range: 20-90% RH', 'Temperature Range: 0-50°C', 'Signal: Digital output'],
    image: '/DHT-11.jpg'
  },
  {
    id: 'dht22-sensor',
    name: 'DHT22 High-Precision Temp & Humidity Sensor',
    category: 'Sensors & Modules',
    price: 3500,
    shortDescription: 'Precision digital temperature and humidity sensor.',
    fullDescription: 'Higher precision version of the DHT sensor with wider measurement range and better accuracy.',
    specs: ['Humidity Range: 0-100% RH', 'Temperature Range: -40 to 80°C', 'High Precision'],
    image: '/DHT-22.jpg'
  },
  {
    id: 'pir-motion-sensor',
    name: 'PIR Motion Sensor Module',
    category: 'Sensors & Modules',
    price: 2000,
    shortDescription: 'Pyroelectric infrared motion detection module.',
    fullDescription: 'Detects human motion by sensing infrared radiation emitted from human bodies.',
    specs: ['Detection Range: up to 7m', 'Adjustable Delay Time', 'Operating Voltage: 4.5V - 20V'],
    image: '/PIR_Motion.jpg'
  },
  {
    id: 'fingerprint-sensor',
    name: 'Optical Fingerprint Scanner Sensor',
    category: 'Sensors & Modules',
    price: 14000,
    shortDescription: 'Biometric optical fingerprint scanner with UART interface.',
    fullDescription: 'High-performance optical biometric sensor for access control systems and security locking devices.',
    specs: ['Interface: UART/Serial', 'Optical Sensor', 'On-board flash storage'],
    image: '/Fingerprint.jpg'
  },
  {
    id: 'mq-gas-sensor',
    name: 'MQ Gas & Air Quality Sensor',
    category: 'Sensors & Modules',
    price: 2500,
    shortDescription: 'Analog gas sensor for air quality and leak detection.',
    fullDescription: 'Detects combustible gases and smoke in the surrounding atmosphere with dual digital/analog outputs.',
    specs: ['Analog & Digital Outputs', 'High sensitivity', 'Adjustable threshold potentiometer'],
    image: '/MQ_Gas.jpg'
  },
  {
    id: 'flame-sensor',
    name: 'Infrared Flame Sensor Module',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Detects fire and light sources between 760nm - 1100nm.',
    fullDescription: 'Sensitive to fire wavelengths for automatic fire alarm and detection systems.',
    specs: ['Detection Wavelength: 760nm - 1100nm', 'Detection Angle: 60 degrees'],
    image: '/Flame.jpg'
  },
  {
    id: 'infrared-sensor',
    name: 'IR Obstacle Avoidance Sensor',
    category: 'Sensors & Modules',
    price: 1200,
    shortDescription: 'Infrared line tracking and obstacle detection sensor.',
    fullDescription: 'Infrared transmitter/receiver pair for smart car obstacle avoidance and line following.',
    specs: ['Detection Distance: 2cm - 30cm', 'Operating Voltage: 3.3V - 5V'],
    image: '/Infrared_Sensor.jpg'
  },
  {
    id: 'ph-sensor-kit',
    name: 'Analog pH Sensor Probe Kit',
    category: 'Sensors & Modules',
    price: 18000,
    shortDescription: 'Liquid pH value testing sensor kit for water quality monitoring.',
    fullDescription: 'Complete liquid pH testing probe and signal conditioning board for water quality analysis.',
    specs: ['Measurement Range: pH 0-14', 'BNC Connector Probe', 'Analog Signal Output Board'],
    image: '/pH_Sensor.jpg'
  },
  {
    id: 'soil-moisture-sensor',
    name: 'Soil Moisture Sensor Module',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Soil humidity sensor for automated plant watering systems.',
    fullDescription: 'Measures volumetric water content in soil for smart agricultural projects.',
    specs: ['Analog & Digital Output', 'Corrosion-resistant probe'],
    image: '/Soil_Moisture.jpg'
  },
  {
    id: 'mpu6050-gyro',
    name: 'MPU6050 6-DOF Accelerometer & Gyro',
    category: 'Sensors & Modules',
    price: 2500,
    shortDescription: '6-axis motion tracking sensor with I2C bus.',
    fullDescription: '3-axis gyroscope and 3-axis accelerometer combined on a single chip with digital motion processing.',
    specs: ['Interface: I2C', '3-Axis Gyroscope', '3-Axis Accelerometer'],
    image: '/MPU6050.jpg'
  },
  {
    id: 'sound-sensor',
    name: 'Acoustic Sound Detection Sensor',
    category: 'Sensors & Modules',
    price: 1500,
    shortDescription: 'Microphone sound intensity detection sensor module.',
    fullDescription: 'Detects ambient sound levels for clap switches or audio monitoring.',
    specs: ['Electret microphone', 'Adjustable gain threshold'],
    image: '/Sound.jpg'
  },

  // --- DISPLAYS ---
  {
    id: 'lcd-1602',
    name: 'LCD1602 Display Character Module',
    category: 'Display Modules',
    price: 2500,
    shortDescription: '16x2 character alphanumeric display with blue backlight.',
    fullDescription: 'Standard 16 column by 2 row alphanumeric liquid crystal display.',
    specs: ['16x2 Character Grid', 'Blue Backlight', '5V Parallel/I2C Interface'],
    image: '/LCD_1602.jpg'
  },
  {
    id: 'lcd-2004',
    name: 'LCD2004 Character Display',
    category: 'Display Modules',
    price: 4500,
    shortDescription: '20x4 character alphanumeric LCD display.',
    fullDescription: 'Large 20 column by 4 row character LCD module for extended display data.',
    specs: ['20x4 Character Grid', '5V Power Supply'],
    image: '/LCD2004.jpg'
  },
  {
    id: 'oled-096-display',
    name: '0.96" I2C OLED Display Module',
    category: 'Display Modules',
    price: 3500,
    shortDescription: '128x64 resolution blue/yellow graphic OLED screen.',
    fullDescription: 'High contrast graphic OLED screen requiring no backlight with I2C communication.',
    specs: ['Resolution: 128x64', 'Communication: I2C', 'Low power consumption'],
    image: '/oled_display.jpg'
  },
  {
    id: 'tft-touch-display',
    name: 'TFT Touch Screen Display',
    category: 'Display Modules',
    price: 9500,
    shortDescription: 'Color graphic TFT display with touchscreen panel.',
    fullDescription: 'Full color TFT touchscreen display for interactive user interfaces and graphical dashboards.',
    specs: ['SPI/Parallel Interface', 'Resistive Touch Screen', 'Full Color Display'],
    image: '/TFT_Touch_Display.jpg'
  },
  {
    id: 'tm1637-display',
    name: 'TM1637 4-Digit 7-Segment Display',
    category: 'Display Modules',
    price: 2000,
    shortDescription: 'Red 4-digit 7-segment digital clock display.',
    fullDescription: 'Compact 4-digit numeric LED display driven via 2-wire serial protocol.',
    specs: ['4-Digit Display', 'TM1637 Driver Chip', '2-Wire Serial Interface'],
    image: '/TM1637.jpg'
  },

  // --- MOTORS, DRIVERS & ROBOTICS KITS ---
  {
    id: 'sg90-servo-motor',
    name: 'SG90 9g Micro Servo Motor',
    category: 'Power & Motors',
    price: 2000,
    shortDescription: 'Compact 180-degree rotation micro servo.',
    fullDescription: 'Lightweight micro servo motor suited for robotic arms and steerable sensor mounts.',
    specs: ['Stall Torque: 1.8 kg/cm', 'Operating Speed: 0.1 sec/60 degrees', 'Weight: 9 grams'],
    image: '/servo_motor.jpg'
  },
  {
    id: '3-wheel-car-kit',
    name: '3-Wheel Smart Robot Car Chassis Kit',
    category: 'Power & Motors',
    price: 12000,
    shortDescription: 'Tri-wheel robotic platform with DC gear motors.',
    fullDescription: 'Complete robotic chassis platform featuring two driven wheels and an omnidirectional caster wheel.',
    specs: ['Dual DC Gear Motors', 'Acrylic Base Plate', 'Battery Holder Included'],
    image: '/3_Wheel_Car_Kit.jpg'
  },
  {
    id: '4-wheel-car-kit',
    name: '4WD Smart Robot Car Chassis Kit',
    category: 'Power & Motors',
    price: 16000,
    shortDescription: '4-wheel drive mobile robot chassis platform.',
    fullDescription: 'Sturdy 4WD robot chassis equipped with 4 DC motors and speed encoder wheels.',
    specs: ['4x DC Gear Motors', 'Encoders Included', 'Dual-layer acrylic frame'],
    image: '/4_Wheel_Car_Kit.jpg'
  },
  {
    id: '4dof-robotic-arm',
    name: '4DOF Acrylic Robotic Arm Kit',
    category: 'Power & Motors',
    price: 18000,
    shortDescription: '4 degrees-of-freedom desktop robot arm.',
    fullDescription: 'Laser-cut acrylic mechanical arm kit for learning servo-based kinematics.',
    specs: ['4 Degrees of Freedom', 'Laser-cut acrylic components', 'Servo mounting slots'],
    image: '/4DOF.jpg'
  },
  {
    id: 'drone-kit-complete',
    name: 'Complete DIY Quadcopter Drone Kit',
    category: 'Power & Motors',
    price: 75000,
    shortDescription: 'Full frame, motors, ESCs, and propellers kit.',
    fullDescription: 'Comprehensive quadcopter assembly kit designed for learning drone hardware integration.',
    specs: ['Quadcopter Frame', 'Brushless Motors & ESCs', 'Propeller Set Included'],
    image: '/Complete_Drone_Kit.jpg'
  },
  {
    id: 'pixhawk-flight-controller',
    name: 'Pixhawk Flight Controller Kit',
    category: 'Power & Motors',
    price: 45000,
    shortDescription: 'Advanced autopilot system for drones and autonomous vehicles.',
    fullDescription: 'Open-hardware autopilot platform featuring 32-bit processing and multi-sensor stabilization.',
    specs: ['32-bit STM32F427 Cortex M4', 'Integrated Gyro/Accel/Mag', 'ArduPilot & PX4 Compatible'],
    image: '/Pixhawk_Flight_Controller_Kit.jpg'
  },
  {
    id: 'flysky-remote',
    name: 'FlySky Transmitter & Receiver Set',
    category: 'Power & Motors',
    price: 38000,
    shortDescription: '2.4G 6-channel RC remote control set.',
    fullDescription: 'Multi-channel radio control transmitter system for drones, cars, and boats.',
    specs: ['2.4GHz AFHDS 2A system', '6 Channels', 'Receiver included'],
    image: '/FlySky_Remote_Control.jpg'
  },

  // --- WIRING, KITS & CONSUMABLES ---
  {
    id: 'breadboard-kit',
    name: 'Solderless Breadboard & Wire Starter Kit',
    category: 'Wiring & Connectors',
    price: 5000,
    shortDescription: '830-point breadboard with jumper wire assortment.',
    fullDescription: 'Essential rapid-prototyping kit containing an MB102 830-tie point breadboard and jumper wires.',
    specs: ['830 Tie-Point Breadboard', 'Male-to-Male Jumpers Included'],
    image: '/breadboard_kit.jpg'
  },
  {
    id: 'uv-starter-kit',
    name: 'UV-LAB Standard Robotics & Microcontroller Starter Kit',
    category: 'Wiring & Connectors',
    price: 25000,
    shortDescription: 'Complete educational electronic component starter box.',
    fullDescription: 'Curated component box packed with sensors, LEDs, microcontrollers, wires, and modules.',
    specs: ['Includes MCU Board', 'Assorted Sensors & LEDs', 'Storage Organizer Box'],
    image: '/UVSTDStarterKit.jpg'
  },
  {
    id: 'pla-filament',
    name: 'PLA 3D Printer Filament 1kg (1.75mm)',
    category: 'Wiring & Connectors',
    price: 18000,
    shortDescription: '1.75mm premium PLA printing filament spool.',
    fullDescription: 'High quality 1.75mm PLA filament spool for clean 3D printing of structural parts.',
    specs: ['Diameter: 1.75mm', 'Weight: 1.0 kg Spool', 'Material: PLA'],
    image: '/PLA_Filament.jpg'
  },
  {
    id: 'abs-filament',
    name: 'ABS 3D Printer Filament 1kg (1.75mm)',
    category: 'Wiring & Connectors',
    price: 20000,
    shortDescription: 'Durable 1.75mm ABS filament spool.',
    fullDescription: 'High-strength ABS plastic filament spool designed for heavy-duty mechanical enclosures.',
    specs: ['Diameter: 1.75mm', 'Weight: 1.0 kg Spool', 'High heat resistance'],
    image: '/ABS_Filament.jpg'
  }
];