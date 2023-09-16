export type Item = {
  id: string
  image: string
  name: string
  subtitle?: string
  desc?: string
  price: number
}

export type Category = {
  name: string
  link: string
  items: Item[]
}

const MENU_ENG: Category[] = [
  {
    name: 'Sets 🍱',
    link: 'sets',
    items: [
      {
        id: '1',
        image: '/set1.png',
        name: 'Set №1',
        subtitle: '950 g.',
        desc: 'Philadelphia with salmon, Philadelphia with eel, green dragon',
        price: 30
      },
      {
        id: '2',
        image: '/set2.png',
        name: 'Set №2',
        subtitle: '895 g.',
        desc: 'Nigiri salmon, Philadelphia with salmon, Nigiri eel, Philadelphia with eel',
        price: 38
      },
      {
        id: '3',
        image: '/set3.png',
        name: 'Set №3',
        subtitle: '2120 g.',
        desc: 'Nigiri salmon, Philadelphia with Salmon, Nigiri eel, Philadelphia with eel',
        price: 59
      },
      {
        id: '4',
        image: '/set4.png',
        name: 'Set №4',
        subtitle: '1315 g.',
        desc: 'Green Dragon, Creamy eel, Philadelphia with Salmon and Avocado, Baked shrimp',
        price: 49
      },
      {
        id: '5',
        image: '/set5.png',
        name: 'Set №5',
        subtitle: '1000 g.',
        desc: 'Baked shrimp, baked salmon, Apetito',
        price: 42
      },
      {
        id: '6',
        image: '/set6.png',
        name: 'Set №6',
        subtitle: '1600 g.',
        desc: 'Green Dragon, Canada, Alaska, Creamy Eel, Philadelphia with Salmon and Avocado',
        price: 46
      },
      {
        id: '7',
        image: '/set7.png',
        name: 'Set №7',
        subtitle: '900 g.',
        desc: 'Gunkan scallop, Gunkan salmon, Gunkan tuna, Gunkan eel, Gunkan shrimp',
        price: 47
      }
    ]
  },
  {
    name: 'Sushi 🍣',
    link: 'sushi',
    items: [
      {
        id: '8',
        image: '/sus1.png',
        name: 'Philadelphia',
        subtitle: 'with salmon & cheddar',
        desc: 'Nori, rice, cream cheese, avocado, caviar, cheddar cheese, red caviar, marinated salmon. 340 g.',
        price: 12
      },
      {
        id: '9',
        image: '/sus2.png',
        name: 'Sakura',
        subtitle: 'spicy 🌶',
        desc: 'Salmon, cucumber, rice, avocado, caviar, crab paste, Parmesan cheese, Japanese tamago omelette, sriracha sauce, Japanese. 290 g.',
        price: 12
      },
      {
        id: '10',
        image: '/sus3.png',
        name: 'Philadelphia',
        subtitle: 'with salmon & avocado',
        desc: 'salmon, nori, rice, cream cheese, avocado, caviar. 330 g.',
        price: 13
      },
      {
        id: '11',
        image: '/sus4.png',
        name: 'Philadelphia',
        subtitle: 'with salmon',
        desc: 'salmon, nori, rice, cream cheese, caviar. 320 g.',
        price: 12
      },
      {
        id: '12',
        image: '/sus5.png',
        name: 'Philadelphia',
        subtitle: 'with eel',
        desc: 'Nori, cucumber, rice, cream cheese, sesame, unagi sauce, eel. 320 g.',
        price: 14
      },
      {
        id: '13',
        image: '/sus6.png',
        name: 'Baked shrimp',
        subtitle: 'with caviar',
        desc: 'Nori, rice, cream cheese, avocado, caviar, shrimp, cheese cap. 350 g.',
        price: 14
      },
      {
        id: '14',
        image: '/sus7.png',
        name: 'Baked salmon',
        subtitle: 'with caviar',
        desc: 'Nori, rice, cream cheese, avocado, caviar, salmon, cheese cap. 350 g.',
        price: 13
      },
      {
        id: '15',
        image: '/sus8.png',
        name: 'Green Dragon',
        subtitle: 'special',
        desc: 'Nori, rice, cream cheese, unagi sauce, avocado, shrimp, mango. 310 g.',
        price: 14
      },
      {
        id: '16',
        image: '/sus9.png',
        name: 'Baked Salmon',
        subtitle: 'spicy 🌶',
        desc: 'Salmon, nori, rice, cream cheese, avocado, caviar, sriracha sauce, Japanese sauce. 350 g.',
        price: 16
      },
      {
        id: '17',
        image: '/sus10.png',
        name: 'California',
        subtitle: 'with eel',
        desc: 'Nori, cucumber, rice, eel, avocado, caviar. 290 g.',
        price: 15
      },
      {
        id: '18',
        image: '/sus11.png',
        name: 'Bonsai',
        subtitle: 'special',
        desc: 'Nori, rice, cream cheese, unagi sauce, eel, avocado, caviar, mango. 315 g.',
        price: 17
      },
      {
        id: '19',
        image: '/sus12.png',
        name: 'Maki',
        subtitle: 'with salmon',
        desc: 'Salmon, nori, rice. 110 g.',
        price: 8
      },
      {
        id: '20',
        image: '/sus13.png',
        name: 'Apetito',
        subtitle: 'special',
        desc: 'Salmon, nori, rice, cream cheese, crab batter, Japanese tamago omelet, cheese cap, Japanese mayonnaise. 300 g.',
        price: 14
      }
    ]
  },
  {
    name: 'Cold 🥗',
    link: 'cold',
    items: [
      {
        id: '21',
        image: '/bowl1.jpeg',
        name: 'Potato bowl',
        subtitle: 'with corn',
        desc: 'Baby potatoes, pork ribs, chicken egg, grilled corn, tomatoes, bacon, parsley, sesame seeds, tomato sauce',
        price: 14
      },
      {
        id: '22',
        image: '/bowl2.jpeg',
        name: 'Potato bowl',
        subtitle: 'with tuna',
        desc: 'Baby potatoes, baked tuna, chicken egg, feta in herbs, tomatoes, parsley, sesame seeds, nut-hazelnut sauce',
        price: 12
      },
      {
        id: '23',
        image: '/bowl3.jpeg',
        name: 'Bowl-tabbouleh',
        subtitle: 'with tuna & mango',
        desc: 'Tabbouleh with mint, baked tuna, mango, cucumbers, chicken egg, arugula, parmesan, sesame seeds, nut-hazelnut sauce',
        price: 15
      },
      {
        id: '24',
        image: '/bowl4.jpeg',
        name: 'Bowl-tabbouleh',
        subtitle: 'with roast beef',
        desc: 'Tabbouleh with mint, roast beef, eringa mushrooms, olives, tomatoes, parmesan, parsley, sesame seeds, demi sauce',
        price: 12
      },
      {
        id: '25',
        image: '/bowl5.jpeg',
        name: 'Bowl-tabbouleh',
        subtitle: 'with tofu',
        desc: 'Tabbouleh with mint, tofu, caramelized carrots, baked bell pepper, grilled corn, spinach, Asian sauce',
        price: 11
      },
      {
        id: '26',
        image: '/salad1.png',
        name: 'Ocean',
        subtitle: 'salad',
        desc: 'Lettuce, tomatoes, cucumbers, salmon, cream cheese, egg. Lemon-honey sauce',
        price: 8
      },
      {
        id: '27',
        image: '/salad2.png',
        name: 'Brize',
        subtitle: 'salad',
        desc: 'Lettuce, fresh bell pepper, cucumbers, tuna, shrimp, arugula',
        price: 12
      },
      {
        id: '28',
        image: '/salad3.png',
        name: 'Dijon DLX',
        subtitle: 'salad',
        desc: 'Lettuce, tomatoes, chicken breast, mushroom mix, egg, bacon, spinach',
        price: 13
      }
    ]
  },
  {
    name: 'Hot 🥘',
    link: 'hot',
    items: [
      {
        id: '29',
        image: '/miso1.jpeg',
        name: 'Miso soup',
        subtitle: 'with shrimp',
        desc: 'Meat broth, linguini, chicken egg, wakame seaweed, shrimp, sesame seeds, green onion',
        price: 10
      },
      {
        id: '30',
        image: '/miso2.jpeg',
        name: 'Miso soup',
        subtitle: 'with tuna',
        desc: 'Meat broth, linguini, baked tuna, chicken egg, wakame seaweed, sesame seeds, green onion',
        price: 14
      },
      {
        id: '31',
        image: '/miso3.jpeg',
        name: 'Miso soup',
        subtitle: 'with pork',
        desc: 'Meat broth, linguine, pork ribs, chicken egg, wakame seaweed, sesame seeds, green onion',
        price: 11
      },
      {
        id: '32',
        image: '/soup1.png',
        name: 'Tom Yum',
        subtitle: 'soup',
        desc: 'Mix of seafood - squid, octopus, shrimp, coconut milk, chicken broth, mushrooms, tomatoes, tom yum pasta',
        price: 10
      },
      {
        id: '33',
        image: '/rice1.jpg',
        name: 'Chicken-vegie',
        subtitle: 'in sweet & sour sauce',
        desc: 'Vegie chicken in sweet and sour sauce with vegetables (350g)',
        price: 14
      },
      {
        id: '34',
        image: '/rice2.jpg',
        name: 'Glass noodles',
        subtitle: 'with chicken',
        desc: 'Glass noodles, chicken, lime, onion, sauce',
        price: 12
      },
      {
        id: '35',
        image: '/rice3.jpg',
        name: 'Thai rice',
        subtitle: 'with chicken',
        desc: 'Rice, chicken, lime, lemon, salt, pepper, mint',
        price: 15
      },
      {
        id: '36',
        image: '/rice4.jpg',
        name: 'Thai rice',
        subtitle: 'with shrimp',
        desc: 'Rice, shrimp, lime, lemon, salt, pepper, mint, pineapple',
        price: 12
      }
    ]
  },
  {
    name: 'Drink 🍷',
    link: 'drink',
    items: [
      {
        id: '37',
        image: '/alco1.jpg',
        name: 'Martini Asti',
        subtitle: 'white sweet 0.75l',
        desc: 'Alcohol',
        price: 14
      },
      {
        id: '38',
        image: '/alco2.jpg',
        name: 'Fragolino Fiorelli',
        subtitle: 'red sweet 0.75l',
        desc: 'Alcohol',
        price: 12
      },
      {
        id: '39',
        image: '/alco3.jpg',
        name: 'Martini Prosecco',
        subtitle: 'white extra dry 0.75l',
        desc: 'Alcohol',
        price: 15
      },
      {
        id: '40',
        image: '/alco4.jpg',
        name: 'Saperavi Badagoni',
        subtitle: 'pink dry 0.75l',
        desc: 'Alcohol',
        price: 12
      },
      {
        id: '41',
        image: '/alco5.jpg',
        name: 'French Boulevard',
        subtitle: 'white brut 0.75l',
        desc: 'Alcohol',
        price: 11
      },
      {
        id: '42',
        image: '/alco6.jpg',
        name: 'Kindzmarauli Badagoni',
        subtitle: 'red semi-sweet 0.75l',
        desc: 'Alcohol',
        price: 10
      }
    ]
  }
]

const MENU_UKR: Category[] = [
  {
    name: 'Сети 🍱',
    link: 'sets',
    items: [
      {
        id: '1',
        image: '/set1.png',
        name: 'Сет №1',
        subtitle: '950 гр.',
        desc: 'Філадельфія з лососем, Філадельфія з вугром, зелений дракон',
        price: 30 * 40
      },
      {
        id: '2',
        image: '/set2.png',
        name: 'Сет №2',
        subtitle: '895 гр.',
        desc: 'Нігірі лосось, Філадельфія з лососем, Нігірі вугор, Філадельфія з вугром',
        price: 38 * 40
      },
      {
        id: '3',
        image: '/set3.png',
        name: 'Сет №3',
        subtitle: '2120 гр.',
        desc: 'Нігірі лосось, Філадельфія з лососем, Нігірі вугор, Філадельфія з вугром',
        price: 59 * 40
      },
      {
        id: '4',
        image: '/set4.png',
        name: 'Сет №4',
        subtitle: '1315 гр.',
        desc: 'Зелений дракон, вершковий вугор, філадельфія з лососем та авокадо, запечені креветки',
        price: 49 * 40
      },
      {
        id: '5',
        image: '/set5.png',
        name: 'Сет №5',
        subtitle: '1000 гр.',
        desc: 'Запечені креветки, запечений лосось, апетито',
        price: 42 * 40
      },
      {
        id: '6',
        image: '/set6.png',
        name: 'Сет №6',
        subtitle: '1600 гр.',
        desc: 'Зелений дракон, Канада, Аляска, кремовий вугор, Філадельфія з лососем і авокадо',
        price: 46 * 40
      },
      {
        id: '7',
        image: '/set7.png',
        name: 'Сет №7',
        subtitle: '900 гр.',
        desc: 'Гребінець гункан, лосось гункан, тунець гункан, вугор гункан, креветка гункан',
        price: 47 * 40
      }
    ]
  },
  {
    name: 'Суші 🍣',
    link: 'sushi',
    items: [
      {
        id: '8',
        image: '/sus1.png',
        name: 'Філадельфія',
        subtitle: 'з лососем і чеддером',
        desc: 'Норі, рис, вершковий сир, авокадо, ікра, сир чеддер, червона ікра, маринований лосось. 340 г.',
        price: 12 * 40
      },
      {
        id: '9',
        image: '/sus2.png',
        name: 'Сакура',
        subtitle: 'гострі 🌶',
        desc: 'Лосось, огірок, рис, авокадо, ікра, крабова паста, сир пармезан, японський омлет тамаго, соус шрірача, японський. 290 г.',
        price: 12 * 40
      },
      {
        id: '10',
        image: '/sus3.png',
        name: 'Філадельфія',
        subtitle: 'з лососем і авокадо',
        desc: 'Лосось, норі, рис, вершковий сир, авокадо, ікра. 330 г.',
        price: 13 * 40
      },
      {
        id: '11',
        image: '/sus4.png',
        name: 'Філадельфія',
        subtitle: 'з лососем',
        desc: 'Лосось, норі, рис, вершковий сир, ікра. 320 г.',
        price: 12 * 40
      },
      {
        id: '12',
        image: '/sus5.png',
        name: 'Філадельфія',
        subtitle: 'з вугром',
        desc: 'Норі, огірок, рис, вершковий сир, кунжут, соус унагі, вугор. 320 г.',
        price: 14 * 40
      },
      {
        id: '13',
        image: '/sus6.png',
        name: 'Запечені креветки',
        subtitle: 'з ікрою',
        desc: 'Норі, рис, вершковий сир, авокадо, ікра, креветки, сирник. 350 г.',
        price: 14 * 40
      },
      {
        id: '14',
        image: '/sus7.png',
        name: 'Запечений лосось',
        subtitle: 'з ікрою',
        desc: 'Норі, рис, вершковий сир, авокадо, ікра, лосось, сирник. 350 г.',
        price: 13 * 40
      },
      {
        id: '15',
        image: '/sus8.png',
        name: 'Зелений Дракон',
        subtitle: 'преміум',
        desc: 'Норі, рис, вершковий сир, соус унагі, авокадо, креветки, манго. 310 г.',
        price: 14 * 40
      },
      {
        id: '16',
        image: '/sus9.png',
        name: 'Запечений лосось',
        subtitle: 'гострі 🌶',
        desc: 'Лосось, норі, рис, вершковий сир, авокадо, ікра, соус шрірача, японський соус. 350 г.',
        price: 16 * 40
      },
      {
        id: '17',
        image: '/sus10.png',
        name: 'Каліфорнія',
        subtitle: 'з вугром',
        desc: 'Норі, огірок, рис, вугор, авокадо, ікра. 290 г.',
        price: 15 * 40
      },
      {
        id: '18',
        image: '/sus11.png',
        name: 'Бонсай',
        subtitle: 'Преміум',
        desc: 'Норі, рис, вершковий сир, соус унагі, вугор, авокадо, ікра, манго. 315 г.',
        price: 17 * 40
      },
      {
        id: '19',
        image: '/sus12.png',
        name: 'Макі',
        subtitle: 'з лососем',
        desc: 'Лосось, норі, рис. 110 г.',
        price: 8 * 40
      },
      {
        id: '20',
        image: '/sus13.png',
        name: 'Апетіто',
        subtitle: 'преміум',
        desc: 'Лосось, норі, рис, вершковий сир, крабове тісто, японський омлет тамаго, сирна шапка, японський майонез. 300 г.',
        price: 14 * 40
      }
    ]
  },
  {
    name: 'Холодне 🥗',
    link: 'cold',
    items: [
      {
        id: '21',
        image: '/bowl1.jpeg',
        name: 'Картопляна миска',
        subtitle: 'з кукурудзою',
        desc: 'Картопля молода, свинячі ребра, яйце куряче, кукурудза гриль, помідори, бекон, петрушка, кунжут, томатний соус',
        price: 14 * 40
      },
      {
        id: '22',
        image: '/bowl2.jpeg',
        name: 'Картопляна миска',
        subtitle: 'з тунцем',
        desc: 'Картопля молода, тунець запечений, яйце куряче, фета в травах, помідори, петрушка, кунжут, горіхово-горіховий соус',
        price: 12 * 40
      },
      {
        id: '23',
        image: '/bowl3.jpeg',
        name: 'Чаша-табуле',
        subtitle: 'з тунцем і манго',
        desc: 'Табуле з мятою, запечений тунець, манго, огірки, яйце куряче, рукола, пармезан, кунжут, горіхово-горіховий соус',
        price: 15 * 40
      },
      {
        id: '24',
        image: '/bowl4.jpeg',
        name: 'Чаша-табуле',
        subtitle: 'з ростбіфом',
        desc: 'Табуле з мятою, ростбіфом, грибами ерінга, оливками, помідорами, пармезаном, петрушкою, кунжутом, соусом Демі',
        price: 12 * 40
      },
      {
        id: '25',
        image: '/bowl5.jpeg',
        name: 'Чаша-табуле',
        subtitle: 'з тофу',
        desc: 'Табуле з мятою, тофу, карамелізована морква, запечений болгарський перець, кукурудза гриль, шпинат, азіатський соус',
        price: 11 * 40
      },
      {
        id: '26',
        image: '/salad1.png',
        name: 'Океан',
        subtitle: 'салат',
        desc: 'Салат, помідори, огірки, лосось, вершковий сир, яйце. Лимонно-медовий соус',
        price: 8 * 40
      },
      {
        id: '27',
        image: '/salad2.png',
        name: 'Бріз',
        subtitle: 'салат',
        desc: 'Салат, свіжий болгарський перець, огірки, тунець, креветки, рукола',
        price: 12 * 40
      },
      {
        id: '28',
        image: '/salad3.png',
        name: 'Діжон DLX',
        subtitle: 'салат',
        desc: 'Салат, помідори, куряча грудка, грибна суміш, яйце, бекон, шпинат',
        price: 13 * 40
      }
    ]
  },
  {
    name: 'Гаряче 🥘',
    link: 'hot',
    items: [
      {
        id: '29',
        image: '/miso1.jpeg',
        name: 'Місо суп',
        subtitle: 'з креветкою',
        desc: 'Мясний бульйон, лінгвіні, яйце куряче, водорості вакаме, креветки, кунжут, зелена цибуля',
        price: 10 * 40
      },
      {
        id: '30',
        image: '/miso2.jpeg',
        name: 'Місо суп',
        subtitle: 'з тунцем',
        desc: 'Мясний бульйон, лінгвіні, запечений тунець, яйце куряче, водорості вакаме, кунжут, зелена цибуля',
        price: 14 * 40
      },
      {
        id: '31',
        image: '/miso3.jpeg',
        name: 'Місо суп',
        subtitle: 'зі свининою',
        desc: 'Мясний бульйон, лінгвіні, свинячі ребра, яйце куряче, водорості вакаме, кунжут, зелена цибуля',
        price: 11 * 40
      },
      {
        id: '32',
        image: '/soup1.png',
        name: 'Том Ям',
        subtitle: 'суп',
        desc: 'Мікс з морепродуктів - кальмари, восьминоги, креветки, кокосове молоко, курячий бульйон, гриби, помідори, паста том ям',
        price: 10 * 40
      },
      {
        id: '33',
        image: '/rice1.jpg',
        name: 'Курка-вегі',
        subtitle: 'в кисло-солодкому соусі',
        desc: 'Вегі курка в кисло-солодкому соусі з овочами (350г)',
        price: 14 * 40
      },
      {
        id: '34',
        image: '/rice2.jpg',
        name: 'Скляна локшина',
        subtitle: 'з куркою',
        desc: 'Скляна локшина, курка, лайм, цибуля, соус',
        price: 12 * 40
      },
      {
        id: '35',
        image: '/rice3.jpg',
        name: 'Тайський рис',
        subtitle: 'з куркою',
        desc: 'Рис, курка, лайм, лимон, сіль, перець, мята',
        price: 15 * 40
      },
      {
        id: '36',
        image: '/rice4.jpg',
        name: 'Тайський рис',
        subtitle: 'з креветками',
        desc: 'Рис, креветки, лайм, лимон, сіль, перець, мята, ананас',
        price: 12 * 40
      }
    ]
  },
  {
    name: 'Алкоголь 🍷',
    link: 'drink',
    items: [
      {
        id: '37',
        image: '/alco1.jpg',
        name: 'Martini Asti',
        subtitle: 'біле солодке 0.75л',
        desc: 'Алкоголь',
        price: 14 * 40
      },
      {
        id: '38',
        image: '/alco2.jpg',
        name: 'Fragolino Fiorelli',
        subtitle: 'червоне солодке 0.75л',
        desc: 'Алкоголь',
        price: 12 * 40
      },
      {
        id: '39',
        image: '/alco3.jpg',
        name: 'Martini Prosecco',
        subtitle: 'біле екстра сухе 0.75л',
        desc: 'Алкоголь',
        price: 15 * 40
      },
      {
        id: '40',
        image: '/alco4.jpg',
        name: 'Saperavi Badagoni',
        subtitle: 'рожеве сухе 0.75л',
        desc: 'Алкоголь',
        price: 12 * 40
      },
      {
        id: '41',
        image: '/alco5.jpg',
        name: 'French Boulevard',
        subtitle: ' біле брют 0.75л',
        desc: 'Алкоголь',
        price: 11 * 40
      },
      {
        id: '42',
        image: '/alco6.jpg',
        name: 'Kindzmarauli Badagoni',
        subtitle: 'червоне напів сухе 0.75l',
        desc: 'Алкоголь',
        price: 10 * 40
      }
    ]
  }
]

const DELIVERY_PRICE_ENG = 2
const MINIMUM_ORDER_AMOUNT_ENG = 50
const DELIVERY_PRICE_UKR = 90
const MINIMUM_ORDER_AMOUNT_UKR = 2000

export {
  MENU_ENG,
  MENU_UKR,
  DELIVERY_PRICE_ENG,
  MINIMUM_ORDER_AMOUNT_ENG,
  DELIVERY_PRICE_UKR,
  MINIMUM_ORDER_AMOUNT_UKR
}
