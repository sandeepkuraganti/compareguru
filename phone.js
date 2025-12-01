const allMobiles = [
    {
        "id": "iphone15",
        "name": "Apple iPhone 15",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
        "price": "₹70,500",
        "score": "96%",
        "amazonLink": "https://www.amazon.in/s?k=iphone+15",
        "highlights": { 
            "perf": "A16 Bionic", 
            "ram": "6 GB", 
            "cam": "48 MP Dual", 
            "bat": "3349 mAh" 
        },
        "specs": {
            "General": {
                "Brand": "Apple",
                "Model": "iPhone 15",
                "Color": "Pink, Yellow, Green, Blue, Black",
                "Operating System": "iOS 17",
                "SIM Type": "Dual SIM (Nano-SIM + eSIM)",
                "Warranty": "1 Year Manufacturer Warranty"
            },
            "Display": {
                "Size": "6.1 inch (15.54 cm)",
                "Resolution": "2556 x 1179 Pixels (Super Retina XDR)",
                "Touchscreen": "Yes, Haptic Touch"
            },
            "Performance": {
                "Processor": "A16 Bionic Chip",
                "Cores": "Hexa Core (2x4.0 GHz Everest + 4x2.02 GHz Sawtooth)",
                "OS": "iOS 17 (Upgradable)"
            },
            "Memory": {
                "RAM": "6 GB",
                "Internal Storage": "128 GB / 256 GB / 512 GB",
                "OTG Compatible": "No"
            },
            "Camera": {
                "Rear Config": "48 MP (Main) + 12 MP (Ultrawide)",
                "Rear Features": "Photonic Engine, Deep Fusion, Smart HDR 5, Portrait Mode, Night Mode, Panorama",
                "Rear Video": "4K@24/25/30/60fps, 1080p@25/30/60fps, Cinematic mode",
                "Front Camera": "12 MP TrueDepth",
                "Front Features": "Autofocus, Portrait Lighting, Animoji, Memoji",
                "Stabilization": "Sensor-shift OIS"
            },
            "Battery": {
                "Capacity": "3349 mAh",
                "Charging": "Wired (50% in 30 min), 15W MagSafe Wireless"
            },
            "Connectivity": {
                "Network": "5G / 4G VoLTE / LTE / GSM",
                "Wi-Fi": "Wi-Fi 6 (802.11ax) with 2x2 MIMO",
                "Bluetooth": "v5.3",
                "GPS": "Yes, with A-GPS, GLONASS, GALILEO, BDS, QZSS",
                "NFC": "Yes"
            },
            "Sensors": {
                "List": "Face ID, Barometer, High dynamic range gyro, High-g accelerometer, Proximity, Dual ambient light sensors"
            }
        }
    },
    {
        "id": "s24",
        "name": "Samsung Galaxy S24",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g-sm-s921.jpg",
        "price": "₹79,999",
        "score": "94%",
        "amazonLink": "https://www.amazon.in/s?k=samsung+galaxy+s24",
        "highlights": { 
            "perf": "Exynos 2400 / Snap 8 Gen 3", 
            "ram": "8 GB", 
            "cam": "50 MP Triple", 
            "bat": "4000 mAh" 
        },
        "specs": {
            "General": {
                "Brand": "Samsung",
                "Model": "Galaxy S24 5G",
                "Color": "Onyx Black, Marble Grey, Cobalt Violet, Amber Yellow",
                "Operating System": "Android 14 (One UI 6.1)",
                "SIM Type": "Dual SIM (2 Nano-SIMs or SIM + eSIM)",
                "Warranty": "1 Year Manufacturer Warranty"
            },
            "Display": {
                "Size": "6.2 inch (15.75 cm)",
                "Resolution": "2340 x 1080 Pixels (FHD+ Dynamic AMOLED 2X)",
                "Touchscreen": "Yes"
            },
            "Performance": {
                "Processor": "Exynos 2400 (International) / Snapdragon 8 Gen 3 (US/China)",
                "Cores": "Octa Core / Deca Core",
                "OS": "Android 14"
            },
            "Memory": {
                "RAM": "8 GB",
                "Internal Storage": "128 GB / 256 GB / 512 GB",
                "OTG Compatible": "Yes"
            },
            "Camera": {
                "Rear Config": "50 MP (Wide) + 10 MP (Tele) + 12 MP (Ultrawide)",
                "Rear Features": "AI Scene Optimizer, Super Slow-mo, Hyperlapse, Portrait Video, Space Zoom (30x)",
                "Rear Video": "8K@24/30fps, 4K@30/60fps, 1080p@30/60/240fps",
                "Front Camera": "12 MP",
                "Front Features": "Dual Video Call, Auto-HDR",
                "Stabilization": "OIS + VDIS"
            },
            "Battery": {
                "Capacity": "4000 mAh",
                "Charging": "25W Wired, 15W Wireless, 4.5W Reverse Wireless"
            },
            "Connectivity": {
                "Network": "5G / 4G VoLTE / LTE / GSM",
                "Wi-Fi": "Wi-Fi 6E (802.11 a/b/g/n/ac/6e)",
                "Bluetooth": "v5.3",
                "GPS": "Yes",
                "NFC": "Yes"
            },
            "Sensors": {
                "List": "Ultrasonic Fingerprint, Accelerometer, Barometer, Gyro, Geomagnetic, Hall, Light, Proximity"
            }
        }
    },
    {
        "id": "oneplus12",
        "name": "OnePlus 12",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
        "price": "₹64,999",
        "score": "92%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+12",
        "highlights": { 
            "perf": "Snapdragon 8 Gen 3", 
            "ram": "12 GB", 
            "cam": "50 MP Triple", 
            "bat": "5400 mAh" 
        },
        "specs": {
            "General": {
                "Brand": "OnePlus",
                "Model": "12",
                "Color": "Flowy Emerald, Silky Black",
                "Operating System": "Android 14 (OxygenOS 14)",
                "SIM Type": "Dual SIM (Nano-SIM, dual stand-by)",
                "Warranty": "1 Year Manufacturer Warranty"
            },
            "Display": {
                "Size": "6.82 inch (17.32 cm)",
                "Resolution": "3168 x 1440 Pixels (QHD+ LTPO AMOLED)",
                "Touchscreen": "Yes, Aqua Touch"
            },
            "Performance": {
                "Processor": "Snapdragon 8 Gen 3",
                "Cores": "Octa Core (3.3 GHz)",
                "OS": "Android 14"
            },
            "Memory": {
                "RAM": "12 GB / 16 GB (LPDDR5X)",
                "Internal Storage": "256 GB / 512 GB (UFS 4.0)",
                "OTG Compatible": "Yes"
            },
            "Camera": {
                "Rear Config": "50 MP (Main) + 64 MP (Periscope Tele) + 48 MP (Ultrawide)",
                "Rear Features": "Hasselblad Color Calibration, Master Mode, Nightscape, Multi-Autofocus",
                "Rear Video": "8K@24fps, 4K@30/60fps, Dolby Vision",
                "Front Camera": "32 MP",
                "Front Features": "Face Unlock, HDR, Panorama",
                "Stabilization": "OIS + EIS"
            },
            "Battery": {
                "Capacity": "5400 mAh",
                "Charging": "100W SuperVOOC Wired, 50W AirVOOC Wireless"
            },
            "Connectivity": {
                "Network": "5G / 4G VoLTE / LTE / GSM",
                "Wi-Fi": "Wi-Fi 7 Ready",
                "Bluetooth": "v5.4",
                "GPS": "Yes",
                "NFC": "Yes"
            },
            "Sensors": {
                "List": "In-display Fingerprint, Accelerometer, Gyro, Proximity, Compass, Color Spectrum"
            }
        }
    },
    {
        "id": "realme_gt8_pro",
        "name": "Realme GT 8 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt5-pro.jpg",
        "price": "₹69,999",
        "score": "98%",
        "amazonLink": "https://www.amazon.in/s?k=realme+gt+series",
        "highlights": { 
            "perf": "Snapdragon 8 Elite Gen 5", 
            "ram": "12 GB", 
            "cam": "200 MP Triple", 
            "bat": "7000 mAh" 
        },
        "specs": {
            "General": {
                "Brand": "realme",
                "Model": "GT 8 Pro (RMX5210)",
                "Color": "Diary White",
                "Operating System": "Android 16",
                "SIM Type": "Dual SIM (non-hybrid slot)",
                "Warranty": "1 year manufacturer warranty for phone, 6 months for in-box accessories"
            },
            "Display": {
                "Size": "6.79 inch (17.25 cm)",
                "Resolution": "3136×1440 Pixels (Quad HD+)",
                "Touchscreen": "Yes"
            },
            "Performance": {
                "Processor": "Snapdragon 8 Elite Gen 5",
                "Cores": "Octa Core, up to 4.6 GHz",
                "OS": "Android 16"
            },
            "Memory": {
                "RAM": "12 GB (LPDDR5X)",
                "Internal Storage": "256 GB",
                "OTG Compatible": "Yes"
            },
            "Camera": {
                "Rear Config": "50 MP + 50 MP + 200 MP",
                "Rear Features": "3× optical zoom, 120× digital zoom, Tilt-shift, Text scanner, Underwater mode, Star/Moon mode",
                "Rear Video": "8K@30fps; 4K@60fps/120fps; 1080p@120fps",
                "Front Camera": "32 MP",
                "Front Features": "Screen fill light, Gesture shutter, Dual-view video",
                "Stabilization": "EIS and OIS supported"
            },
            "Battery": {
                "Capacity": "7000 mAh",
                "Charging": "Quick Charging Supported"
            },
            "Connectivity": {
                "Network": "5G / 4G VoLTE / LTE / GSM / WCDMA",
                "Wi-Fi": "2.4 GHz & 5 GHz, 2x2 MIMO, WiFi 7 supported",
                "Bluetooth": "v6.0",
                "GPS": "Yes",
                "NFC": "Yes"
            },
            "Sensors": {
                "List": "Proximity, Ambient light, Color temperature, E-compass, Accelerometer, Gyroscope, Hall sensor"
            }
        }
    }
];
