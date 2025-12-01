const allMobiles = [
    // ============================
    // 🚀 UPCOMING / CONCEPTS (2025-26)
    // ============================
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

    // ============================
    // 🔥 2024-25 PREMIUM FLAGSHIPS (1L+)
    // ============================
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
            "Battery": { "Capacity": "4685 mAh", "Charging": "30W MagSafe" }
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
            "General": { "Brand": "Samsung", "Model": "S24 Ultra", "OS": "Android 14" },
            "Display": { "Size": "6.8 inch QHD+", "Type": "Dynamic AMOLED 2X", "Protection": "Gorilla Armor" },
            "Performance": { "Processor": "Snapdragon 8 Gen 3 for Galaxy", "RAM": "12 GB" },
            "Camera": { "Rear": "200MP + 50MP + 12MP + 10MP", "Front": "12 MP", "Video": "8K@30fps" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "45W Wired" }
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

    // ============================
    // ⚔️ FLAGSHIP KILLERS (40k - 80k)
    // ============================
    {
        "id": "oneplus12",
        "name": "OnePlus 12",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
        "price": "₹64,999",
        "score": "94%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+12",
        "highlights": { "perf": "Snapdragon 8 Gen 3", "ram": "16 GB", "cam": "50 MP Triple", "bat": "5400 mAh" },
        "specs": {
            "General": { "Brand": "OnePlus", "Model": "12", "OS": "Android 14" },
            "Display": { "Size": "6.82 inch QHD+", "Type": "LTPO AMOLED" },
            "Performance": { "Processor": "Snapdragon 8 Gen 3", "RAM": "12/16 GB" },
            "Camera": { "Rear": "50MP Main + 64MP Periscope + 48MP Ultra", "Front": "32 MP" },
            "Battery": { "Capacity": "5400 mAh", "Charging": "100W Wired" }
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
        "id": "iqoo12",
        "name": "iQOO 12 5G",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-12.jpg",
        "price": "₹52,999",
        "score": "93%",
        "amazonLink": "https://www.amazon.in/s?k=iqoo+12",
        "highlights": { "perf": "Snapdragon 8 Gen 3", "ram": "12 GB", "cam": "50 MP Triple", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "iQOO", "Model": "12", "OS": "Android 14 (Funtouch)" },
            "Display": { "Size": "6.78 inch 1.5K", "Type": "LTPO AMOLED 144Hz" },
            "Performance": { "Processor": "Snapdragon 8 Gen 3", "RAM": "12/16 GB" },
            "Camera": { "Rear": "50MP Main + 64MP Periscope + 50MP Ultra", "Front": "16 MP" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "120W FlashCharge" }
        }
    },
    {
        "id": "vivo_x100_pro",
        "name": "Vivo X100 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
        "price": "₹89,999",
        "score": "95%",
        "amazonLink": "https://www.amazon.in/s?k=vivo+x100+pro",
        "highlights": { "perf": "Dimensity 9300", "ram": "16 GB", "cam": "50 MP Zeiss Triple", "bat": "5400 mAh" },
        "specs": {
            "General": { "Brand": "Vivo", "Model": "X100 Pro", "OS": "Android 14 (Funtouch 14)" },
            "Display": { "Size": "6.78 inch LTPO AMOLED", "Brightness": "3000 nits", "Refresh": "120Hz" },
            "Performance": { "Processor": "MediaTek Dimensity 9300", "RAM": "16 GB" },
            "Camera": { "Rear": "50MP (1-inch) + 50MP (Tele) + 50MP (Ultra)", "Front": "32 MP" },
            "Battery": { "Capacity": "5400 mAh", "Charging": "100W Wired, 50W Wireless" }
        }
    },

    // ============================
    // 💎 PREMIUM MID-RANGE (25k - 40k)
    // ============================
    {
        "id": "oneplus_12r",
        "name": "OnePlus 12R",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg",
        "price": "₹39,999",
        "score": "91%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+12r",
        "highlights": { "perf": "Snapdragon 8 Gen 2", "ram": "8 GB", "cam": "50 MP Triple", "bat": "5500 mAh" },
        "specs": {
            "General": { "Brand": "OnePlus", "Model": "12R", "OS": "Android 14" },
            "Display": { "Size": "6.78 inch 1.5K", "Type": "LTPO4 AMOLED 120Hz" },
            "Performance": { "Processor": "Snapdragon 8 Gen 2", "RAM": "8/16 GB" },
            "Camera": { "Rear": "50MP (IMX890) + 8MP Ultra + 2MP Macro", "Front": "16 MP" },
            "Battery": { "Capacity": "5500 mAh", "Charging": "100W SuperVOOC" }
        }
    },
    {
        "id": "realme_gt6",
        "name": "Realme GT 6",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/realme-gt6.jpg",
        "price": "₹40,999",
        "score": "92%",
        "amazonLink": "https://www.amazon.in/s?k=realme+gt+6",
        "highlights": { "perf": "Snapdragon 8s Gen 3", "ram": "12 GB", "cam": "50 MP Triple", "bat": "5500 mAh" },
        "specs": {
            "General": { "Brand": "Realme", "Model": "GT 6", "OS": "Android 14" },
            "Display": { "Size": "6.78 inch LTPO AMOLED", "Brightness": "6000 nits (Peak)" },
            "Performance": { "Processor": "Snapdragon 8s Gen 3", "RAM": "8/12/16 GB" },
            "Camera": { "Rear": "50MP OIS + 50MP Tele + 8MP Ultra", "Front": "32 MP" },
            "Battery": { "Capacity": "5500 mAh", "Charging": "120W SuperVOOC" }
        }
    },
    {
        "id": "nothing_phone_2",
        "name": "Nothing Phone (2)",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg",
        "price": "₹36,999",
        "score": "89%",
        "amazonLink": "https://www.amazon.in/s?k=nothing+phone+2",
        "highlights": { "perf": "Snapdragon 8+ Gen 1", "ram": "12 GB", "cam": "50 MP Dual", "bat": "4700 mAh" },
        "specs": {
            "General": { "Brand": "Nothing", "Model": "Phone (2)", "OS": "Nothing OS 2.5" },
            "Display": { "Size": "6.7 inch LTPO OLED", "Feature": "Glyph Interface" },
            "Performance": { "Processor": "Snapdragon 8+ Gen 1", "RAM": "12 GB" },
            "Camera": { "Rear": "50MP Main + 50MP Ultra", "Front": "32 MP" },
            "Battery": { "Capacity": "4700 mAh", "Charging": "45W Wired, 15W Wireless" }
        }
    },
    {
        "id": "poco_f6",
        "name": "Poco F6",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6.jpg",
        "price": "₹29,999",
        "score": "90%",
        "amazonLink": "https://www.amazon.in/s?k=poco+f6",
        "highlights": { "perf": "Snapdragon 8s Gen 3", "ram": "8 GB", "cam": "50 MP Dual", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Poco", "Model": "F6", "OS": "HyperOS" },
            "Display": { "Size": "6.67 inch AMOLED", "Resolution": "1.5K", "Refresh": "120Hz" },
            "Performance": { "Processor": "Snapdragon 8s Gen 3", "RAM": "8/12 GB" },
            "Camera": { "Rear": "50MP OIS + 8MP Ultra", "Front": "20 MP" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "90W Turbo" }
        }
    },

    // ============================
    // 💰 BUDGET KINGS (10k - 25k)
    // ============================
    {
        "id": "nothing_phone_2a",
        "name": "Nothing Phone (2a)",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2a.jpg",
        "price": "₹23,999",
        "score": "88%",
        "amazonLink": "https://www.amazon.in/s?k=nothing+phone+2a",
        "highlights": { "perf": "Dimensity 7200 Pro", "ram": "8 GB", "cam": "50 MP Dual", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Nothing", "Model": "Phone (2a)", "Design": "Transparent Back (Glyph)" },
            "Display": { "Size": "6.7 inch AMOLED", "Refresh": "120Hz Adaptive" },
            "Performance": { "Processor": "Dimensity 7200 Pro", "OS": "Nothing OS 2.5" },
            "Camera": { "Rear": "50MP Main + 50MP Ultrawide", "Front": "32 MP" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "45W Wired" }
        }
    },
    {
        "id": "poco_x6_pro",
        "name": "Poco X6 Pro",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg",
        "price": "₹26,999",
        "score": "90%",
        "amazonLink": "https://www.amazon.in/s?k=poco+x6+pro",
        "highlights": { "perf": "Dimensity 8300 Ultra", "ram": "12 GB", "cam": "64 MP Triple", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Poco", "Model": "X6 Pro", "OS": "Android 14 (HyperOS)" },
            "Display": { "Size": "6.67 inch AMOLED", "Resolution": "1.5K", "Refresh": "120Hz" },
            "Performance": { "Processor": "Dimensity 8300 Ultra", "Score": "AnTuTu 1.4 Million+" },
            "Camera": { "Rear": "64MP OIS + 8MP Ultra + 2MP Macro", "Front": "16 MP" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "67W Turbo" }
        }
    },
    {
        "id": "oneplus_nord_ce4",
        "name": "OnePlus Nord CE 4",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4.jpg",
        "price": "₹24,999",
        "score": "87%",
        "amazonLink": "https://www.amazon.in/s?k=oneplus+nord+ce+4",
        "highlights": { "perf": "Snapdragon 7 Gen 3", "ram": "8 GB", "cam": "50 MP Dual", "bat": "5500 mAh" },
        "specs": {
            "General": { "Brand": "OnePlus", "Model": "Nord CE 4", "OS": "Android 14" },
            "Display": { "Size": "6.7 inch AMOLED", "Refresh": "120Hz" },
            "Performance": { "Processor": "Snapdragon 7 Gen 3", "RAM": "8 GB" },
            "Camera": { "Rear": "50MP (Sony LYT600) + 8MP Ultra", "Front": "16 MP" },
            "Battery": { "Capacity": "5500 mAh", "Charging": "100W SuperVOOC" }
        }
    },
    {
        "id": "realme_12_pro_plus",
        "name": "Realme 12 Pro+",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
        "price": "₹29,999",
        "score": "88%",
        "amazonLink": "https://www.amazon.in/s?k=realme+12+pro+plus",
        "highlights": { "perf": "Snapdragon 7s Gen 2", "ram": "8 GB", "cam": "64 MP Periscope", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "Realme", "Model": "12 Pro+", "Design": "Luxury Watch Design" },
            "Display": { "Size": "6.7 inch Curved AMOLED", "Refresh": "120Hz" },
            "Performance": { "Processor": "Snapdragon 7s Gen 2", "RAM": "8/12 GB" },
            "Camera": { "Rear": "50MP Main + 64MP Periscope (3x) + 8MP Ultra", "Front": "32 MP" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "67W SuperVOOC" }
        }
    },
    {
        "id": "moto_g64",
        "name": "Moto G64 5G",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g64.jpg",
        "price": "₹14,999",
        "score": "84%",
        "amazonLink": "https://www.amazon.in/s?k=moto+g64",
        "highlights": { "perf": "Dimensity 7025", "ram": "12 GB", "cam": "50 MP OIS", "bat": "6000 mAh" },
        "specs": {
            "General": { "Brand": "Motorola", "Model": "G64", "OS": "Android 14" },
            "Display": { "Size": "6.5 inch LCD", "Refresh": "120Hz" },
            "Performance": { "Processor": "Dimensity 7025", "RAM": "8/12 GB" },
            "Camera": { "Rear": "50MP OIS + 8MP Ultra", "Front": "16 MP" },
            "Battery": { "Capacity": "6000 mAh", "Charging": "33W TurboPower" }
        }
    },
    {
        "id": "cmf_phone_1",
        "name": "CMF Phone 1",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/nothing-cmf-phone1.jpg",
        "price": "₹15,999",
        "score": "85%",
        "amazonLink": "https://www.amazon.in/s?k=cmf+phone+1",
        "highlights": { "perf": "Dimensity 7300", "ram": "6 GB", "cam": "50 MP Sony", "bat": "5000 mAh" },
        "specs": {
            "General": { "Brand": "CMF by Nothing", "Model": "Phone 1", "Design": "Modular Back" },
            "Display": { "Size": "6.67 inch AMOLED", "Refresh": "120Hz", "Brightness": "2000 nits" },
            "Performance": { "Processor": "Dimensity 7300", "RAM": "6/8 GB" },
            "Camera": { "Rear": "50MP Sony + Depth", "Front": "16 MP" },
            "Battery": { "Capacity": "5000 mAh", "Charging": "33W (No charger in box)" }
        }
    },

    // ============================
    // 🏆 HALL OF FAME (2021-2023 LEGENDS)
    // ============================
    {
        "id": "iphone13",
        "name": "Apple iPhone 13",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
        "price": "₹49,999",
        "score": "90%",
        "amazonLink": "https://www.amazon.in/s?k=iphone+13",
        "highlights": { "perf": "A15 Bionic", "ram": "4 GB", "cam": "12 MP Dual", "bat": "3240 mAh" },
        "specs": {
            "General": { "Brand": "Apple", "Release": "2021", "Status": "Best Value iPhone" },
            "Display": { "Size": "6.1 inch OLED", "Resolution": "Super Retina XDR" },
            "Performance": { "Processor": "A15 Bionic", "RAM": "4 GB" },
            "Camera": { "Rear": "12MP Main + 12MP Ultra", "Front": "12 MP" },
            "Battery": { "Capacity": "3240 mAh", "Charging": "20W Wired" }
        }
    },
    {
        "id": "s21_fe",
        "name": "Samsung S21 FE 5G",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-fe-5g.jpg",
        "price": "₹29,999",
        "score": "88%",
        "amazonLink": "https://www.amazon.in/s?k=samsung+s21+fe+5g",
        "highlights": { "perf": "Exynos 2100", "ram": "8 GB", "cam": "12 MP Triple", "bat": "4500 mAh" },
        "specs": {
            "General": { "Brand": "Samsung", "Model": "S21 FE (2023)", "OS": "Android 13" },
            "Display": { "Size": "6.4 inch AMOLED 2X", "Refresh": "120Hz" },
            "Performance": { "Processor": "Exynos 2100 / Snapdragon 888", "RAM": "8 GB" },
            "Camera": { "Rear": "12MP Main + 12MP Ultra + 8MP Tele (3x)", "Front": "32 MP" },
            "Battery": { "Capacity": "4500 mAh", "Charging": "25W Wired" }
        }
    },
    {
        "id": "pixel6a",
        "name": "Google Pixel 6a",
        "image": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6a.jpg",
        "price": "₹24,999",
        "score": "86%",
        "amazonLink": "https://www.amazon.in/s?k=pixel+6a",
        "highlights": { "perf": "Google Tensor", "ram": "6 GB", "cam": "12.2 MP Dual", "bat": "4410 mAh" },
        "specs": {
            "General": { "Brand": "Google", "Release": "2022", "Feature": "Best Camera under 25k" },
            "Display": { "Size": "6.1 inch OLED", "Refresh": "60Hz" },
            "Performance": { "Processor": "Google Tensor (1st Gen)", "RAM": "6 GB" },
            "Camera": { "Rear": "12.2MP Main + 12MP Ultra", "Front": "8 MP" },
            "Battery": { "Capacity": "4410 mAh", "Charging": "18W Wired" }
        }
    }
];
