const allMobiles = [
    // --- 2026 / UPCOMING CONCEPTS ---
    {
        "id": "realme_gt8_pro",
        "name": "Realme GT 8 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt5-pro.jpg",
        "price": "₹69,999",
        "score": "99%",
        "amazonLink": "https://www.amazon.in/s?k=realme+gt+series",
        "highlights": { "perf": "Snapdragon 8 Elite", "ram": "12 GB LPDDR5X", "cam": "200 MP Triple", "bat": "7000 mAh" },
        "specs": {
            "General": { "Brand": "realme", "Model": "GT 8 Pro", "OS": "Android 16", "Release": "Coming Soon" },
            "Display": { "Size": "6.79 inch Quad HD+", "Type": "HyperGlow OLED", "Refresh": "144Hz" },
            "Performance": { "Processor": "Snapdragon 8 Elite Gen 5", "Cores": "Octa Core 4.6 GHz" },
            "Camera": { "Rear": "50MP + 50MP + 200MP", "Front": "32 MP", "Zoom": "120x Digital" },
            "Battery": { "Capacity": "7000 mAh", "Charging": "120W Wired, 50W Wireless" },
            "Sensors": { "List": "Ultrasonic Fingerprint, Heart Rate, Color Temp, Gyro" }
        }
    },
    {
        "id": "s25_ultra",
        "name": "Samsung Galaxy S25 Ultra",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-mint.jpg",
        "price": "₹1,24,999",
        "score": "98%",
        "amazonLink": "https://www.amazon.in/s?k=samsung+s25+ultra",
        "highlights": { "perf": "Snapdragon 8 Elite", "ram": "16 GB", "cam": "200 MP Quad", "bat": "5500 mAh" },
        "specs": {
            "General": { "Brand": "Samsung", "Model": "Galaxy S25 Ultra", "OS": "Android 15", "Release": "Early 2025" },
            "Display": { "Size": "6.9 inch Dynamic AMOLED 2X", "Type": "LTPO 144Hz", "Brightness": "3000 nits" },
            "Performance": { "Processor": "Snapdragon 8 Elite for Galaxy", "RAM": "16 GB" },
            "Camera": { "Rear": "200MP Main + 50MP Ultra + 50MP Tele + 50MP Periscope", "Front": "12 MP" },
            "Battery": { "Capacity": "5500 mAh", "Charging": "65W Wired" },
            "Sensors": { "List": "Ultrasonic Fingerprint, S-Pen Support, UWB" }
        }
    },

    // --- 2024 / 2025 FLAGSHIPS ---
    {
        "id": "iphone16_promax",
        "name": "Apple iPhone 16 Pro Max",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
        "price": "₹1,44,900",
        "score": "97%",
        "amazonLink": "https://www.amazon.in/s?k=iphone+16+pro+max",
        "highlights": { "perf": "A18 Pro", "ram": "8 GB", "cam": "48 MP Triple", "bat": "4685 mAh" },
        "specs": {
            "General": { "Brand": "Apple", "Model": "iPhone 16 Pro Max", "OS": "iOS 18", "Release": "Sep 2024" },
            "Display": { "Size": "6.9 inch OLED", "Resolution": "1320 x 2868", "Refresh": "120Hz ProMotion" },
            "Performance": { "Processor": "Apple A18 Pro (3nm)", "Storage": "256GB / 512GB / 1TB" },
            "Camera": { "Rear": "48MP Main + 48MP Ultra + 12MP 5x Tele", "Front": "12 MP" },
            "Battery": { "Capacity": "4685 mAh", "Charging": "30W MagSafe" },
            "Connectivity": { "WiFi": "Wi-Fi 7", "Bluetooth": "v5.4", "USB": "Type-C 3.2" }
        }
    },
    {
        "id": "s24_ultra",
        "name": "Samsung Galaxy S24 Ultra",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-grey.jpg",
        "price": "₹1,09,999",
        "score": "96%",
        "amazonLink": "https://www.amazon.in/s?k=samsung+s24+ultra",
        "highlights": { "perf": "Snapdragon 8 Gen 3", "ram": "12 GB", "cam": "200 MP Quad", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Samsung", "Model": "S24 Ultra", "OS": "Android 14 (OneUI 6.1)" },
            "Display": { "Size": "6.8 inch QHD+", "Type": "Dynamic AMOLED 2X", "Protection": "Gorilla Armor" },
            "Performance": { "Processor": "Snapdragon 8 Gen 3 for Galaxy", "RAM": "12 GB" },
            "Camera": { "Rear": "200MP + 50MP (5x) + 12MP + 10MP", "Front": "12 MP", "Video": "8K@30fps" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "45W Wired, 15W Wireless" },
            "Sensors": { "List": "Ultrasonic Fingerprint, Barometer, Gyro, Compass" }
        }
    },
    {
        "id": "pixel9_pro",
        "name": "Google Pixel 9 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-.jpg",
        "price": "₹1,04,999",
        "score": "94%",
        "amazonLink": "https://www.amazon.in/s?k=pixel+9+pro",
        "highlights": { "perf": "Tensor G4", "ram": "16 GB", "cam": "50 MP Triple", "bat": "4700 mAh" },
        "specs": {
            "General": { "Brand": "Google", "Model": "Pixel 9 Pro", "OS": "Android 14", "Release": "Aug 2024" },
            "Display": { "Size": "6.3 inch LTPO OLED", "Brightness": "3000 nits peak", "Refresh": "120Hz" },
            "Performance": { "Processor": "Google Tensor G4", "RAM": "16 GB" },
            "Camera": { "Rear": "50MP Main + 48MP Ultra + 48MP Tele (5x)", "Front": "42 MP Ultrawide" },
            "Battery": { "Capacity": "4700 mAh", "Charging": "27W Wired" },
            "AI Features": { "List": "Gemini Nano, Magic Editor, Best Take, Zoom Enhance" }
        }
    },
    {
        "id": "oneplus13",
        "name": "OnePlus 13",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg",
        "price": "₹69,999",
        "score": "95%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+13",
        "highlights": { "perf": "Snapdragon 8 Elite", "ram": "16 GB", "cam": "50 MP Triple", "bat": "6000 mAh" },
        "specs": {
            "General": { "Brand": "OnePlus", "Model": "13", "OS": "Android 15" },
            "Display": { "Size": "6.82 inch 2K+", "Type": "BOE X2 OLED", "Refresh": "120Hz" },
            "Performance": { "Processor": "Snapdragon 8 Elite", "RAM": "12GB / 16GB / 24GB" },
            "Camera": { "Rear": "50MP (LYT-808) + 50MP (3x) + 50MP Ultra", "Front": "32 MP" },
            "Battery": { "Capacity": "6000 mAh", "Charging": "100W Wired, 50W Wireless" },
            "Connectivity": { "NFC": "Yes", "IR Blaster": "Yes", "WiFi": "Wi-Fi 7" }
        }
    },
    {
        "id": "xiaomi14_ultra",
        "name": "Xiaomi 14 Ultra",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
        "price": "₹99,999",
        "score": "95%",
        "amazonLink": "https://www.amazon.in/s?k=xiaomi+14+ultra",
        "highlights": { "perf": "Snapdragon 8 Gen 3", "ram": "16 GB", "cam": "50 MP Quad Leica", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Xiaomi", "Model": "14 Ultra", "OS": "Android 14 (HyperOS)" },
            "Display": { "Size": "6.73 inch LTPO AMOLED", "Resolution": "1440 x 3200", "Brightness": "3000 nits" },
            "Camera": { "Rear": "50MP (1-inch) + 50MP (3.2x) + 50MP (5x) + 50MP Ultra", "Front": "32 MP" },
            "Performance": { "Processor": "Snapdragon 8 Gen 3", "Cooling": "Dual-Channel IceLoop" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "90W Wired, 80W Wireless" }
        }
    },

    // --- 2023 FLAGSHIPS ---
    {
        "id": "iphone15_promax",
        "name": "Apple iPhone 15 Pro Max",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
        "price": "₹1,34,900",
        "score": "95%",
        "amazonLink": "https://www.amazon.in/s?k=iphone+15+pro+max",
        "highlights": { "perf": "A17 Pro", "ram": "8 GB", "cam": "48 MP Triple", "bat": "4441 mAh" },
        "specs": {
            "General": { "Brand": "Apple", "Release": "Sep 2023", "Build": "Titanium Frame" },
            "Display": { "Size": "6.7 inch Super Retina XDR", "Refresh": "120Hz ProMotion" },
            "Performance": { "Processor": "A17 Pro (3nm)", "RAM": "8 GB" },
            "Camera": { "Rear": "48MP Main + 12MP Ultra + 12MP 5x Zoom", "Front": "12 MP" },
            "Battery": { "Capacity": "4441 mAh", "Charging": "USB-C 3.0 Speed" }
        }
    },
    {
        "id": "s23_ultra",
        "name": "Samsung Galaxy S23 Ultra",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        "price": "₹89,999",
        "score": "94%",
        "amazonLink": "https://www.amazon.in/s?k=s23+ultra",
        "highlights": { "perf": "Snapdragon 8 Gen 2", "ram": "12 GB", "cam": "200 MP Quad", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Samsung", "Release": "Feb 2023", "OS": "Android 13 (Upgradable)" },
            "Display": { "Size": "6.8 inch QHD+", "Type": "Dynamic AMOLED 2X" },
            "Camera": { "Rear": "200MP + 10MP (10x) + 10MP (3x) + 12MP", "Front": "12 MP" },
            "Performance": { "Processor": "Snapdragon 8 Gen 2 for Galaxy", "RAM": "12 GB" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "45W Wired" }
        }
    },
    {
        "id": "pixel8_pro",
        "name": "Google Pixel 8 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
        "price": "₹93,999",
        "score": "91%",
        "amazonLink": "https://www.amazon.in/s?k=pixel+8+pro",
        "highlights": { "perf": "Tensor G3", "ram": "12 GB", "cam": "50 MP Triple", "bat": "5050 mAh" },
        "specs": {
            "General": { "Brand": "Google", "Release": "Oct 2023", "OS": "Android 14" },
            "Display": { "Size": "6.7 inch LTPO OLED", "Resolution": "1344 x 2992" },
            "Camera": { "Rear": "50MP Main + 48MP Ultra + 48MP Tele (5x)", "Front": "10.5 MP" },
            "Performance": { "Processor": "Google Tensor G3", "Security": "Titan M2 Chip" },
            "Battery": { "Capacity": "5050 mAh", "Charging": "30W Wired" }
        }
    },
    {
        "id": "oneplus11",
        "name": "OnePlus 11",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg",
        "price": "₹56,999",
        "score": "90%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+11",
        "highlights": { "perf": "Snapdragon 8 Gen 2", "ram": "16 GB", "cam": "50 MP Triple", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "OnePlus", "Release": "Jan 2023" },
            "Display": { "Size": "6.7 inch QHD+", "Type": "LTPO3 Fluid AMOLED" },
            "Camera": { "Rear": "50MP + 32MP (2x) + 48MP Ultra", "Front": "16 MP" },
            "Performance": { "Processor": "Snapdragon 8 Gen 2", "RAM": "8GB / 16GB" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "100W Wired" }
        }
    },

    // --- 2022 FLAGSHIPS ---
    {
        "id": "iphone14_promax",
        "name": "Apple iPhone 14 Pro Max",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",
        "price": "₹1,19,900",
        "score": "93%",
        "amazonLink": "https://www.amazon.in/s?k=iphone+14+pro+max",
        "highlights": { "perf": "A16 Bionic", "ram": "6 GB", "cam": "48 MP Triple", "bat": "4323 mAh" },
        "specs": {
            "General": { "Brand": "Apple", "Release": "Sep 2022" },
            "Display": { "Size": "6.7 inch OLED", "Feature": "Dynamic Island introduced" },
            "Performance": { "Processor": "A16 Bionic", "RAM": "6 GB" },
            "Camera": { "Rear": "48MP Main + 12MP Ultra + 12MP 3x Tele", "Front": "12 MP" },
            "Battery": { "Capacity": "4323 mAh", "Charging": "Lightning Port" }
        }
    },
    {
        "id": "s22_ultra",
        "name": "Samsung Galaxy S22 Ultra",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg",
        "price": "₹74,999",
        "score": "92%",
        "amazonLink": "https://www.amazon.in/s?k=s22+ultra",
        "highlights": { "perf": "Snapdragon 8 Gen 1", "ram": "12 GB", "cam": "108 MP Quad", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Samsung", "Release": "Feb 2022", "Feature": "Integrated S-Pen" },
            "Display": { "Size": "6.8 inch QHD+", "Type": "Dynamic AMOLED 2X" },
            "Camera": { "Rear": "108MP + 10MP (10x) + 10MP (3x) + 12MP", "Front": "40 MP" },
            "Performance": { "Processor": "Snapdragon 8 Gen 1 / Exynos 2200", "RAM": "12 GB" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "45W Wired" }
        }
    },
    {
        "id": "pixel7_pro",
        "name": "Google Pixel 7 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg",
        "price": "₹64,999",
        "score": "89%",
        "amazonLink": "https://www.amazon.in/s?k=pixel+7+pro",
        "highlights": { "perf": "Tensor G2", "ram": "12 GB", "cam": "50 MP Triple", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Google", "Release": "Oct 2022" },
            "Display": { "Size": "6.7 inch LTPO AMOLED", "Refresh": "120Hz" },
            "Camera": { "Rear": "50MP Main + 12MP Ultra + 48MP Tele (5x)", "Front": "10.8 MP" },
            "Performance": { "Processor": "Google Tensor G2", "RAM": "12 GB" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "23W Wired" }
        }
    },
    {
        "id": "oneplus10_pro",
        "name": "OnePlus 10 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-10-pro.jpg",
        "price": "₹44,999",
        "score": "88%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+10+pro",
        "highlights": { "perf": "Snapdragon 8 Gen 1", "ram": "12 GB", "cam": "48 MP Triple", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "OnePlus", "Release": "Jan 2022" },
            "Display": { "Size": "6.7 inch QHD+", "Type": "LTPO2 Fluid AMOLED" },
            "Camera": { "Rear": "48MP + 8MP (3.3x) + 50MP Ultra", "Front": "32 MP" },
            "Performance": { "Processor": "Snapdragon 8 Gen 1", "RAM": "8GB / 12GB" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "80W Wired" }
        }
    },

    // --- 2021 FLAGSHIPS ---
    {
        "id": "iphone13_promax",
        "name": "Apple iPhone 13 Pro Max",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
        "price": "₹1,09,900",
        "score": "91%",
        "amazonLink": "https://www.amazon.in/s?k=iphone+13+pro+max",
        "highlights": { "perf": "A15 Bionic", "ram": "6 GB", "cam": "12 MP Triple", "bat": "4352 mAh" },
        "specs": {
            "General": { "Brand": "Apple", "Release": "Sep 2021" },
            "Display": { "Size": "6.7 inch OLED", "Refresh": "120Hz ProMotion" },
            "Performance": { "Processor": "A15 Bionic", "RAM": "6 GB" },
            "Camera": { "Rear": "12MP Main + 12MP Ultra + 12MP 3x Tele", "Front": "12 MP" },
            "Battery": { "Capacity": "4352 mAh", "Charging": "Lightning Port" }
        }
    },
    {
        "id": "s21_ultra",
        "name": "Samsung Galaxy S21 Ultra",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg",
        "price": "₹59,999",
        "score": "90%",
        "amazonLink": "https://www.amazon.in/s?k=s21+ultra",
        "highlights": { "perf": "Snapdragon 888", "ram": "12 GB", "cam": "108 MP Quad", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Samsung", "Release": "Jan 2021" },
            "Display": { "Size": "6.8 inch QHD+", "Type": "Dynamic AMOLED 2X" },
            "Camera": { "Rear": "108MP + 10MP (10x) + 10MP (3x) + 12MP", "Front": "40 MP" },
            "Performance": { "Processor": "Snapdragon 888 / Exynos 2100", "RAM": "12GB / 16GB" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "25W Wired" }
        }
    },
    {
        "id": "pixel6_pro",
        "name": "Google Pixel 6 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg",
        "price": "₹44,999",
        "score": "87%",
        "amazonLink": "https://www.amazon.in/s?k=pixel+6+pro",
        "highlights": { "perf": "Google Tensor", "ram": "12 GB", "cam": "50 MP Triple", "bat": "5003 mAh" },
        "specs": {
            "General": { "Brand": "Google", "Release": "Oct 2021", "Feature": "First Tensor Chip" },
            "Display": { "Size": "6.71 inch LTPO AMOLED", "Resolution": "1440 x 3120" },
            "Camera": { "Rear": "50MP Main + 12MP Ultra + 48MP Tele (4x)", "Front": "11.1 MP" },
            "Performance": { "Processor": "Google Tensor (1st Gen)", "RAM": "12 GB" },
            "Battery": { "Capacity": "5003 mAh", "Charging": "23W Wired" }
        }
    },
    {
        "id": "oneplus9_pro",
        "name": "OnePlus 9 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg",
        "price": "₹39,999",
        "score": "86%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+9+pro",
        "highlights": { "perf": "Snapdragon 888", "ram": "12 GB", "cam": "48 MP Quad", "bat": "4500 mAh" },
        "specs": {
            "General": { "Brand": "OnePlus", "Release": "Mar 2021", "Feature": "Hasselblad Partnership" },
            "Display": { "Size": "6.7 inch QHD+", "Type": "LTPO Fluid AMOLED" },
            "Camera": { "Rear": "48MP + 8MP (3.3x) + 50MP Ultra + 2MP Mono", "Front": "16 MP" },
            "Performance": { "Processor": "Snapdragon 888", "RAM": "8GB / 12GB" },
            "Battery": { "Capacity": "4500 mAh", "Charging": "65W Wired" }
        }
    }
];
