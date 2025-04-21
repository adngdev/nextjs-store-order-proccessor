export type Product = {
    id: number
    code: string
    name: string
    price: number
    width: number
    height: number
    length: number
    weight: number
}

export const Products: Product[] = [
    { id: 1,  code: 'PRD001', name: 'Iphone 16',                         price: 46000000, width: 71.6,  height: 146.7, length: 8.1,  weight: 205  },
    { id: 2,  code: 'PRD002', name: 'Galaxy S25',                        price: 41400000, width: 76.4,  height: 159.8, length: 7.6,  weight: 228  },
    { id: 3,  code: 'PRD003', name: 'MacBook Pro 16"',                   price: 80477000, width: 355.7, height: 247.6, length: 16.2, weight: 2000 },
    { id: 4,  code: 'PRD004', name: 'Dell XPS 13',                       price: 36777000, width: 295.7, height: 196.3, length: 14.8, weight: 1200 },
    { id: 5,  code: 'PRD005', name: 'Sony WH-1000XM5 Headphones',        price: 11477000, width: 185,   height: 187,   length: 72,   weight: 250  },
    { id: 6,  code: 'PRD006', name: 'Logitech MX Master 3 Mouse',        price: 2277000,  width: 84.3,  height: 124.9, length: 51,   weight: 141  },
    { id: 7,  code: 'PRD007', name: 'Anker PowerCore 10000',             price: 1035000,  width: 92,     height: 60,    length: 22.3, weight: 180  },
    { id: 8,  code: 'PRD008', name: 'Samsung T7 Portable SSD (1TB)',   price: 3427000,  width: 88,     height: 57,    length: 8,    weight: 58   },
    { id: 9,  code: 'PRD009', name: 'Asus ZenBook 14',                   price: 34500000, width: 307,   height: 217,   length: 14.9, weight: 1150 },
    { id: 10, code: 'PRD010', name: 'Keychron K2 Mechanical Keyboard',   price: 2300000,  width: 360,   height: 40,    length: 130,  weight: 800  },
    { id: 11, code: 'PRD011', name: 'Apple iPad Pro 11"',              price: 18377000, width: 178.5, height: 247.6, length: 5.9,  weight: 468  },
    { id: 12, code: 'PRD012', name: 'Google Pixel 8',                  price: 16077000, width: 71.8,  height: 150.5, length: 8.9,  weight: 175  },
    { id: 13, code: 'PRD013', name: 'OnePlus 12',                      price: 18377000, width: 75,     height: 160,   length: 8,    weight: 190  },
    { id: 14, code: 'PRD014', name: 'HP Spectre x360',                 price: 27577000, width: 306,   height: 194,   length: 16,   weight: 1360 },
    { id: 15, code: 'PRD015', name: 'Lenovo ThinkPad X1 Carbon',       price: 34477000, width: 314,   height: 221,   length: 14.9, weight: 1120 },
    { id: 16, code: 'PRD016', name: 'Microsoft Surface Pro 9',         price: 22977000, width: 207,   height: 292,   length: 8.5,  weight: 879  },
    { id: 17, code: 'PRD017', name: 'Razer Blade 15',                  price: 45977000, width: 355,   height: 235,   length: 19,   weight: 2140 },
    { id: 18, code: 'PRD018', name: 'FujiFilm X-T4 Camera',            price: 39077000, width: 134,   height: 93,    length: 67,   weight: 607  },
    { id: 19, code: 'PRD019', name: 'Canon EOS R6',                    price: 57477000, width: 138,   height: 98,    length: 88,   weight: 680  },
    { id: 20, code: 'PRD020', name: 'Nikon Z6 II',                     price: 45977000, width: 134,   height: 100,   length: 69,   weight: 705  },
    { id: 21, code: 'PRD021', name: 'Bose QuietComfort Earbuds',       price: 6417000,  width: 21.7,  height: 25.6,  length: 21.7, weight: 50   },
    { id: 22, code: 'PRD022', name: 'Beats Studio3 Wireless',          price: 8027000,  width: 170,   height: 210,   length: 85,   weight: 260  },
    { id: 23, code: 'PRD023', name: 'Samsung Galaxy Buds Pro',         price: 4577000,  width: 20,    height: 17,    length: 20,   weight: 6    },
    { id: 24, code: 'PRD024', name: 'Apple Watch Series 9',            price: 9177000,  width: 38,    height: 40,    length: 10.7, weight: 33   },
    { id: 25, code: 'PRD025', name: 'Fitbit Charge 6',                 price: 4117000,  width: 22,    height: 40,    length: 12,   weight: 29   },
    { id: 26, code: 'PRD026', name: 'GoPro HERO11',                    price: 11477000, width: 35,    height: 71,    length: 33,   weight: 154  },
    { id: 27, code: 'PRD027', name: 'DJI Mavic Air 2 Drone',           price: 18377000, width: 183,   height: 85,    length: 245,  weight: 570  },
    { id: 28, code: 'PRD028', name: 'Nintendo Switch',                 price: 6877000,  width: 239,   height: 102,   length: 13.9, weight: 297  },
    { id: 29, code: 'PRD029', name: 'Sony PS5',                        price: 11477000, width: 390,   height: 104,   length: 260,  weight: 4490 },
    { id: 30, code: 'PRD030', name: 'Xbox Series X',                   price: 11477000, width: 151,   height: 151,   length: 301,  weight: 4725 },
    { id: 31, code: 'PRD031', name: 'LG 27UK850-W Monitor',            price: 12627000, width: 613,   height: 379,   length: 48,   weight: 5400 },
    { id: 32, code: 'PRD032', name: 'Dell UltraSharp U2720Q',          price: 14927000, width: 613,   height: 367,   length: 48,   weight: 6000 },
    { id: 33, code: 'PRD033', name: 'HP OfficeJet Pro 9015 Printer',   price: 5267000,  width: 431,   height: 249,   length: 379,  weight: 8100 },
    { id: 34, code: 'PRD034', name: 'Epson EcoTank ET-2760 Printer',   price: 6877000,  width: 375,   height: 235,   length: 370,  weight: 9100 },
    { id: 35, code: 'PRD035', name: 'Amazon Echo Dot',                 price: 1127000,  width: 99,    height: 99,    length: 43,   weight: 480  },
    { id: 36, code: 'PRD036', name: 'Google Nest Mini',                price: 1127000,  width: 98,    height: 43,    length: 98,   weight: 181  },
    { id: 37, code: 'PRD037', name: 'Sonos One Speaker',               price: 5037000,  width: 119,   height: 161,   length: 119,  weight: 1360 },
    { id: 38, code: 'PRD038', name: 'Samsung Smart TV 55"',           price: 16077000, width: 1230,  height: 710,   length: 60,   weight: 14700 },
    { id: 39, code: 'PRD039', name: 'LG OLED TV 65"',                 price: 45977000, width: 1445,  height: 830,   length: 58,   weight: 20000 },
    { id: 40, code: 'PRD040', name: 'Sony WH-CH710N Headphones',       price: 3427000,  width: 170,   height: 190,   length: 85,   weight: 223  },
    { id: 41, code: 'PRD041', name: 'Corsair K95 RGB Platinum Keyboard', price: 4577000, width: 465,   height: 40,    length: 171,  weight: 1300 },
    { id: 42, code: 'PRD042', name: 'SteelSeries Rival 600 Mouse',     price: 1817000,  width: 63,    height: 130,   length: 52,   weight: 96   },
    { id: 43, code: 'PRD043', name: 'WD My Passport 2TB HDD',         price: 2047000,  width: 110,   height: 75,    length: 15,   weight: 250  },
    { id: 44, code: 'PRD044', name: 'Seagate Backup Plus 4TB HDD',    price: 2277000,  width: 117,   height: 83,    length: 17,   weight: 406  },
    { id: 45, code: 'PRD045', name: 'SanDisk Extreme Pro 1TB SSD',    price: 4577000,  width: 80,    height: 100,   length: 7,    weight: 30   },
    { id: 46, code: 'PRD046', name: 'UGREEN USB-C Hub',               price: 805000,   width: 100,   height: 15,    length: 30,   weight: 100  },
    { id: 47, code: 'PRD047', name: 'Anker Soundcore Bluetooth Speaker', price: 1127000, width: 165, height: 68,    length: 56,   weight: 430  },
    { id: 48, code: 'PRD048', name: 'Philips Hue White Bulb',         price: 1127000,  width: 47,    height: 110,   length: 47,   weight: 240  },
    { id: 49, code: 'PRD049', name: 'Nanoleaf Light Panels',          price: 4600000,  width: 280,   height: 280,   length: 15,   weight: 545  },
    { id: 50, code: 'PRD050', name: 'Google Chromecast with Google TV', price: 1127000, width: 162, height: 42,    length: 162,  weight: 55   },
]