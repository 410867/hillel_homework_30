const colors = {
    white: 'white',
    black: 'black',
    purple: 'purple',
    grey: 'grey',
    blue: 'blue',
    gold: 'gold',
    green: 'green',
    red: 'red',
    pink: 'pink',
    silver: 'silver',
};

const countries = {
    usa: 'USA',
    korea: 'Korea',
    china: 'China',
    japan: 'Japan',
};

const OS = {
    android: 'Android',
    ios: 'iOS',
};

const products = [
    {
        categoryId: 1,
        brand: 'Samsung',
        model: 'Galaxy M52',
        memory: 128,
        price: 12999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.white,
        country: countries.korea,
        os: OS.android,
        photo: 'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 11',
        memory: 64,
        price: 19999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.purple,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/37393876.jpg',
    },
    {
        categoryId: 1,
        brand: 'Xiaomi',
        model: 'Redmi Note 10S',
        memory: 64,
        price: 8999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.china,
        os: OS.android,
        photo: 'https://content1.rozetka.com.ua/goods/images/big/179450853.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13',
        memory: 256,
        price: 33999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.red,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
    },
    {
        categoryId: 1,
        brand: 'Samsung',
        model: 'Galaxy A52',
        memory: 128,
        price: 10999,
        haveDiscount: true,
        isStoredInFacility: false,
        color: colors.blue,
        country: countries.korea,
        os: OS.android,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/166279502.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13 mini',
        memory: 512,
        price: 35999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.green,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
    },
    {
        categoryId: 1,
        brand: 'Xiaomi',
        model: 'Redmi Note 11',
        memory: 128,
        price: 8499,
        haveDiscount: false,
        isStoredInFacility: false,
        color: colors.grey,
        country: countries.china,
        os: OS.android,
        photo: 'https://content.rozetka.com.ua/goods/images/big/250762458.jpg',
    },
    {
        categoryId: 1,
        brand: 'Samsung',
        model: 'Galaxy M12',
        memory: 64,
        price: 6499,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.white,
        country: countries.korea,
        os: OS.android,
        photo: 'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
    },
    {
        categoryId: 1,
        brand: 'Samsung',
        model: 'Galaxy A32',
        memory: 128,
        price: 9499,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.purple,
        country: countries.korea,
        os: OS.android,
        photo: 'https://content1.rozetka.com.ua/goods/images/big/165917377.jpg',
    },
    {
        categoryId: 1,
        brand: 'Samsung',
        model: 'Galaxy M52',
        memory: 128,
        price: 12999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.green,
        country: countries.korea,
        os: OS.android,
        photo: 'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13 Pro Max',
        memory: 128,
        price: 43999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.gold,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/221216158.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 12',
        memory: 64,
        price: 24999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.green,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
    },
    {
        categoryId: 1,
        brand: 'Sony',
        model: 'Xperia 1 III',
        memory: 512,
        price: 39999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.black,
        country: countries.japan,
        os: OS.android,
        photo: 'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
    },
    {
        categoryId: 1,
        brand: 'Sony',
        model: 'Xperia 1 III',
        memory: 512,
        price: 39999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.gold,
        country: countries.japan,
        os: OS.android,
        photo: 'https://content1.rozetka.com.ua/goods/images/big/215587054.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 12',
        memory: 64,
        price: 24999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.purple,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content.rozetka.com.ua/goods/images/big/173867780.jpg',
    },
    {
        categoryId: 1,
        brand: 'Samsung',
        model: 'Galaxy M12',
        memory: 64,
        price: 6499,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.black,
        country: countries.korea,
        os: OS.android,
        photo: 'https://content1.rozetka.com.ua/goods/images/big/175471717.jpg',
    },
    {
        categoryId: 1,
        brand: 'Motorola',
        model: 'Moto G60',
        memory: 128,
        price: 8999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.usa,
        os: OS.android,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/220713124.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13 mini',
        memory: 512,
        price: 35999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.red,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/221273383.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13',
        memory: 256,
        price: 33999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.black,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/221212843.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 12',
        memory: 128,
        price: 27999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.purple,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content.rozetka.com.ua/goods/images/big/175435401.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13',
        memory: 128,
        price: 29999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.pink,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content.rozetka.com.ua/goods/images/big/221214152.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13 mini',
        memory: 128,
        price: 25999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.pink,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
    },
    {
        categoryId: 1,
        brand: 'Apple',
        model: 'iPhone 13 Pro Max',
        memory: 256,
        price: 48999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.gold,
        country: countries.usa,
        os: OS.ios,
        photo: 'https://content2.rozetka.com.ua/goods/images/big/221268401.jpg',
    },
    {
        categoryId: 2,
        brand: 'HP',
        name: 'Ноутбук HP ZBook Studio G8 Turbo Silver (46N54AV_V1)',
        screenSize: '15,6"',
        processorType: 'Intel Core i9-11900H',
        RAM: 32,
        memory: 2000,
        videoProcessor: 'NVIDIA RTX A3000',
        price: 163199,
        haveDiscount: false,
        isStoredInFacility: false,
        color: colors.silver,
        country: countries.usa,
        os: 'DOS',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/e/8/e85655c5a2348769f9d9792bdf982efb.jpg',
    },
    {
        categoryId: 2,
        brand: 'Apple',
        name: 'MacBook Air M1 Chip 13"/256 (MGN63UA/A) Space Gray 2020',
        screenSize: '13,3"',
        processorType: 'Apple M1',
        RAM: 8,
        memory: 256,
        videoProcessor: 'Apple 7-ядерний',
        price: 42999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.usa,
        os: 'macOS Big Sur',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/c/1/c1026e47af36b4c550af108577f48c6b.jpg',
    },
    {
        categoryId: 2,
        brand: 'Apple',
        name: 'MacBook Air M2 Chip 13" 8/256GB Midnight (MLY33) 2022',
        screenSize: '13,6"',
        processorType: 'Apple M2',
        RAM: 8,
        memory: 256,
        videoProcessor: 'Apple 8-ядерний',
        price: 54999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.black,
        country: countries.usa,
        os: 'macOS Monterey',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/a/a/aa53c4082bee337674eb8611d70d0c4f.jpg',
    },
    {
        categoryId: 2,
        brand: 'Lenovo',
        name: 'Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 Shadow Black (82K101FKRA)',
        screenSize: '15,6"',
        processorType: 'Intel Core i5-11320H',
        RAM: 8,
        memory: 1000,
        videoProcessor: 'NVIDIA GeForce GTX 1650',
        price: 35499,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.black,
        country: countries.china,
        os: 'DOS',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/5/7/57438b46ec290d0eb2b4ca32938ae76b.jpg',
    },
    {
        categoryId: 2,
        brand: 'Apple',
        name: 'MacBook Pro M1 Pro Chip 16" 16/512GB (Space Gray)',
        screenSize: '16,2"',
        processorType: 'Apple M1 Pro',
        RAM: 16,
        memory: 512,
        videoProcessor: 'Apple 16-ядерний',
        price: 114999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.usa,
        os: 'macOS Monterey',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/b/4/b4be9bc3ae8d689a9d1060d3b40eacd1.jpg',
    },
    {
        categoryId: 2,
        brand: 'Lenovo',
        name: 'Ноутбук Lenovo ThinkPad P1 Gen 4 Black (20Y30013RA)',
        screenSize: '16"',
        processorType: 'Intel Core i7-11850H',
        RAM: 32,
        memory: 1000,
        videoProcessor: 'NVIDIA GeForce GTX 3070',
        price: 152944,
        haveDiscount: false,
        isStoredInFacility: false,
        color: colors.black,
        country: countries.china,
        os: 'Windows 10 Pro',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/d/0/d04f1878970b272c0660081fbdc9c45d.jpg',
    },
    {
        categoryId: 2,
        brand: 'HP',
        name: 'Ноутбук НР ProBook 430 G8 Silver (2X7U2EA)',
        screenSize: '13,3"',
        processorType: 'Intel Core i3-1115G4',
        RAM: 8,
        memory: 256,
        videoProcessor: 'Intel UHD Graphics',
        price: 27999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.silver,
        country: countries.usa,
        os: 'DOS',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/d/9/d9e35f3629013e97c51b2fcfd66ec25b.jpg',
    },
    {
        categoryId: 2,
        brand: 'Apple',
        name: 'MacBook Pro M2 Chip 13" 8/512GB Touch Bar Silver (MNEJ3) 2022',
        screenSize: '13,3"',
        processorType: 'Apple M2',
        RAM: 8,
        memory: 512,
        videoProcessor: 'Apple 10-ядерний',
        price: 62999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.silver,
        country: countries.usa,
        os: 'macOS Monterey',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/d/a/da7b9e6173366861b29d481cf2905e0a.jpg',
    },
    {
        categoryId: 2,
        brand: 'Apple',
        name: 'MacBook Pro M1 Max Chip 16" 32/1TB(Silver)',
        screenSize: '16,2"',
        processorType: 'Apple M1 Max',
        RAM: 32,
        memory: 1000,
        videoProcessor: 'Apple 32-ядерний',
        price: 153999,
        haveDiscount: false,
        isStoredInFacility: false,
        color: colors.silver,
        country: countries.usa,
        os: 'macOS Monterey',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/6/6/66eba1e72d6acedecf8ed1a68267c668.jpg',
    },
    {
        categoryId: 2,
        brand: 'Lenovo',
        name: 'Ноутбук Lenovo IdeaPad 3 15ADA05 Platinum Grey (81W101R0RA)',
        screenSize: '15,6"',
        processorType: 'AMD Ryzen 3 3250U',
        RAM: 8,
        memory: 256,
        videoProcessor: 'AMD Radeon Graphics',
        price: 19999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.china,
        os: 'DOS',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/e/4/e48a034d54f044e0bb23ac1d3a229e57.jpeg',
    },
    {
        categoryId: 2,
        brand: 'HP',
        name: 'Ноутбук HP Elitebook x360 1030 G8 Silver (1G7F2AV_V2)',
        screenSize: '13,3"',
        processorType: 'Intel Core i5-1135G7',
        RAM: 16,
        memory: 512,
        videoProcessor: 'Intel Iris Xe Graphics',
        price: 72855,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.silver,
        country: countries.usa,
        os: 'DOS',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/e/6/e6a56444cd6866bd7495234b05a45739.jpg',
    },
    {
        categoryId: 3,
        brand: 'Samsung',
        name: 'Galaxy Tab А7 Lite 8.7" 4/64Gb Wi-Fi Grey (SM-T220NZAFSEK)',
        screenSize: '8,7"',
        processor: 'MediaTek Helio P22T',
        RAM: 4,
        memory: 64,
        price: 6999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.korea,
        os: OS.android,
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/3/9/394b82a53551a8a86081b74fca608e49.jpg',
    },
    {
        categoryId: 3,
        brand: 'Apple',
        name: 'iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
        screenSize: '10,2"',
        processor: 'Apple A13 Bionic',
        RAM: 3,
        memory: 64,
        price: 14999,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.silver,
        country: countries.usa,
        os: 'iPadOS 15',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/3/9/394b82a53551a8a86081b74fca608e49.jpg',
    },
    {
        categoryId: 3,
        brand: 'Samsung',
        name: 'Galaxy Tab S6 Lite 10.4" 4/64GB Wi-Fi Grey (SM-P613NZAASEK)',
        screenSize: '10,4"',
        processor: 'Qualcomm Snapdragon 720G',
        RAM: 4,
        memory: 64,
        price: 12499,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.korea,
        os: 'Android 12',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/b/1bb8c8d5b1e78a8599542f3eff6fb882.jpg',
    },
    {
        categoryId: 3,
        brand: 'Samsung',
        name: 'Samsung Galaxy Tab А8 10.5" 4/64GB LTE Dark Grey (SM-X205NZAESEK)',
        screenSize: '10,5"',
        processor: 'Unisoc Tiger T618',
        RAM: 4,
        memory: 64,
        price: 9799,
        haveDiscount: true,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.korea,
        os: 'Android 11',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/0/1063856dd2688ed21280e6db1bb25ec1.jpg',
    },
    {
        categoryId: 3,
        brand: 'Lenovo',
        name: 'Tab P11 Plus LTE 6/128GB Slate Grey (ZA9L0127UA)',
        screenSize: '11"',
        processor: 'MediaTek Helio G90T',
        RAM: 6,
        memory: 128,
        price: 15999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.china,
        os: 'Android 11',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/f/d/fdf8baef16d3724b6f2981df92869aea.jpg',
    },
    {
        categoryId: 3,
        brand: 'Apple',
        name: 'iPad Pro 12.9" 512GB M2 Wi-Fi Space Gray (MNXU3) 2022',
        screenSize: '12,9"',
        processor: 'Apple M2',
        RAM: 8,
        memory: 512,
        price: 72999,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.grey,
        country: countries.usa,
        os: 'iPadOS 16',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1666951154-ipad-pro-q123-cellular-5g-12-9-in-6th-generation-space-gray-pdp-image-position-1b-wwce.jpg',
    },
    {
        categoryId: 3,
        brand: 'Huawei',
        name: 'MatePad T10s 10.1" 3/64GB LTE Deepsea Blue (53011DUN)',
        screenSize: '10,1"',
        processor: 'HiSilicon Kirin 710A',
        RAM: 3,
        memory: 64,
        price: 6799,
        haveDiscount: false,
        isStoredInFacility: false,
        color: colors.blue,
        country: countries.china,
        os: 'Android 10.0',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/c/4/c426b9c4d74107599fa152bc76e06467.jpg',
    },
    {
        categoryId: 3,
        brand: 'Apple',
        name: 'iPad mini 8.3" 64GB Wi-Fi Starlight (MK7P3) 2021',
        screenSize: '8,3"',
        processor: 'Apple A15',
        RAM: 4,
        memory: 64,
        price: 25499,
        haveDiscount: false,
        isStoredInFacility: true,
        color: colors.purple,
        country: countries.usa,
        os: 'iPadOS 15',
        photo: 'https://i.citrus.world/imgcache/size_800/uploads/shop/a/1/a18822280eeb2ed74c26a70158fc6ba6.jpg',
    },
];

export const findByCategory = (categoryId) => {
    return products.filter((value) => {
        return value.categoryId === categoryId
    })
}