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
        "id": "oneplus1
