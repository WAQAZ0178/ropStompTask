import {appIcons, appImages} from '../../global/utilities';
export const services = [
  {
    id: 1,
    name: 'Convenience',
    backgroundColor: '#FFF4D3',
    icon: appIcons.convenience,
    isNew: false,
    isSelected: false,
  },
  {
    id: 2,
    name: 'Deals',
    backgroundColor: '#D3FFE2',
    icon: appIcons.deals,
    isNew: true,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Grocery',
    backgroundColor: '#D3EFFF',
    icon: appIcons.groceryCart,
    isNew: false,
    isSelected: false,
  },
  {
    id: 4,
    name: 'Alcohol',
    backgroundColor: '#FFD3E5',
    icon: appIcons.noAlcohol,
    isNew: false,
    isSelected: false,
  },
  {
    id: 5,
    name: 'Pets Food',
    backgroundColor: '#FFD3D3',
    icon: appIcons.dogBowl,
    isNew: true,
    isSelected: false,
  },
  {
    id: 6,
    name: 'Convenience',
    backgroundColor: '#FFF4D3',
    icon: appIcons.convenience,
    isNew: false,
    isSelected: false,
  },
  {
    id: 7,
    name: 'Deals',
    backgroundColor: '#D3FFE2',
    icon: appIcons.deals,
    isNew: true,
    isSelected: false,
  },
];
export const foodType = [
  {
    id: 1,
    name: 'Burger',
    backgroundColor: '#00AEEF',
    icon: appIcons.burger,
    isSelected: true,
  },
  {
    id: 2,
    name: 'Donut',
    backgroundColor: '#00AEEF',
    icon: appIcons.donut,
    isNew: true,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Pizza',
    backgroundColor: '#00AEEF',
    icon: appIcons.pizza,
    isNew: false,
    isSelected: false,
  },
  {
    id: 4,
    name: 'Mexican',
    backgroundColor: '#00AEEF',
    icon: appIcons.mexican,
    isNew: false,
    isSelected: false,
  },
  {
    id: 5,
    name: 'Asian',
    backgroundColor: '#00AEEF',
    icon: appIcons.asian,
    isNew: true,
    isSelected: false,
  },
  {
    id: 6,
    name: 'Burger',
    backgroundColor: '#00AEEF',
    icon: appIcons.burger,
    isSelected: false,
  },
  {
    id: 7,
    name: 'Donut',
    backgroundColor: '#00AEEF',
    icon: appIcons.donut,
    isNew: true,
    isSelected: false,
  },
];
export const memberOffer = [
  {
    id: 1,
    description:
      '$0 delivery fee,reduced service fees and member only offers through 8/24',
    icon: appImages.freeFood,
    free: false,
  },
  {
    id: 2,
    description:
      '$0 delivery fee,reduced service fees and member only offers through 8/24',
    icon: appImages.freeFood,
    free: false,
  },
  {
    id: 3,
    description:
      '$0 delivery fee,reduced service fees and member only offers through 8/24',
    icon: appImages.freeFood,
    free: false,
  },
  {
    id: 4,
    description:
      '$0 delivery fee,reduced service fees and member only offers through 8/24',
    icon: appImages.freeFood,
    free: false,
  },
  {
    id: 5,
    description:
      '$0 delivery fee,reduced service fees and member only offers through 8/24',
    icon: appImages.freeFood,
    free: false,
  },
];
export const hotOffer = [
  {
    id: 1,
    name: 'Salman Salad',
    icon: appImages.onboardingTwo,
    price: 5.5,
    liked: true,
    rating: '3.0',
    totalRating: 25,
    description: 'Baked salmon fish',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Ground Beef',
    icon: appImages.salad,
    price: 5.6,
    liked: true,
    rating: '4.5',
    totalRating: 26,
    description: 'taste bite',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Starbucks',
    icon: appImages.onboardingOne,
    price: 5,
    liked: true,
    rating: '4.0',
    totalRating: 30,
    description: 'Fresh Coffee',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Salman Salan',
    icon: appImages.salad,
    price: 5.5,
    liked: false,
    rating: '4.5',
    totalRating: 25,
    description: 'Baked salmon fish',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Choco Cake',
    icon: appImages.cake,
    price: 5.5,
    liked: true,
    rating: '5.0',
    totalRating: 35,
    description: 'Yummy choco😍😘',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Starbucks',
    icon: appImages.onboardingOne,
    price: 5,
    liked: true,
    rating: '4.0',
    totalRating: 30,
    description: 'Fresh Coffee',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Salman Salan',
    icon: appImages.salad,
    price: 5.5,
    liked: false,
    rating: '4.5',
    totalRating: 25,
    description: 'Baked salmon fish',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Choco Cake',
    icon: appImages.cake,
    price: 5.5,
    liked: true,
    rating: '5.0',
    totalRating: 35,
    description: 'Yummy choco😍😘',
    quantity: 1,
  },
];
export const cart = [
  {
    id: 1,
    name: 'choco Cake',
    icon: appImages.cake,
    description: 'Sweet Yummy choco😍😘 ',
    price: 15.5,
    quantity: 1,
    list: [
      'Checken karahi',
      'Biryani ',
      'Salad',
      'Tikka ',
      'Desert',
      'Kulfa',
      'Pizza',
    ],
  },
  {
    id: 2,
    name: 'Chicken chowmian',
    icon: appImages.chomian,
    description: 'Spicy chicken,chowmian',
    price: 10.5,
    quantity: 1,
    list: [
      'Checken karahi',
      'Biryani ',
      'Salad',
      'Tikka ',
      'Desert',
      'Kulfa',
      'Pizza',
    ],
  },
  {
    id: 3,
    name: 'Starbucks',
    icon: appImages.onboardingOne,
    description: 'Fresh Coffee',
    price: 20.5,
    quantity: 1,
    list: [
      'Checken karahi',
      'Biryani ',
      'Salad',
      'Tikka ',
      'Desert',
      'Kulfa',
      'Pizza',
    ],
  },
  {
    id: 4,
    name: 'Greek salad ',
    icon: appImages.salad,
    description: 'Yummy Salad',
    price: 11.5,
    quantity: 1,
    list: [
      'Checken karahi',
      'Biryani ',
      'Salad',
      'Tikka ',
      'Desert',
      'Kulfa',
      'Pizza',
      'Checken karahi',
      'Biryani ',
      'Salad',
      'Tikka ',
      'Desert',
      'Kulfa',
      'Pizza',
    ],
  },
];
export const reviews = [
  {
    id: 1,
    name: 'Nikolaus',
    date: '7/17/2022',
    rating: 3.2,
    city: 'Souto de Cima',
    review:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
  },
  {
    id: 2,
    name: 'Hetty',
    date: '2/4/2022',
    rating: 1.6,
    city: 'Dharān Bāzār',
    review:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
  },
  {
    id: 3,
    name: 'Kassey',
    date: '7/12/2022',
    rating: 3.9,
    city: 'Turka',
    review:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  },
  {
    id: 4,
    name: 'Kelila',
    date: '8/18/2022',
    rating: 4.3,
    city: 'Jakubów',
    review:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
  },
  {
    id: 5,
    name: 'Tammy',
    date: '8/14/2022',
    rating: 4.8,
    city: 'Sebewe',
    review:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    id: 6,
    name: 'Susanne',
    date: '6/10/2022',
    rating: 2.9,
    city: 'Xiangjia',
    review:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
  },
  {
    id: 7,
    name: 'Andris',
    date: '9/28/2022',
    rating: 4.9,
    city: 'Tuzhai',
    review:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
  },
  {
    id: 8,
    name: 'Moe',
    date: '11/15/2021',
    rating: 4.8,
    city: 'Vigo',
    review:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  },
  {
    id: 9,
    name: 'Niven',
    date: '11/27/2021',
    rating: 2.1,
    city: 'Zhoinda',
    review:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  },
  {
    id: 10,
    name: 'Melodie',
    date: '7/25/2022',
    rating: 3.1,
    city: 'Arsen’yev',
    review:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
  },
  {
    id: 11,
    name: 'Marlie',
    date: '2/12/2022',
    rating: 1.1,
    city: 'Nagrak',
    review:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  },
  {
    id: 12,
    name: 'Jessy',
    date: '10/23/2021',
    rating: 2.6,
    city: 'Buea',
    review:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  },
  {
    id: 13,
    name: 'Gaile',
    date: '2/25/2022',
    rating: 3.7,
    city: 'Kota Kinabalu',
    review:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  },
  {
    id: 14,
    name: 'Leonerd',
    date: '8/2/2022',
    rating: 3.3,
    city: 'Yasnogorsk',
    review:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    id: 15,
    name: 'De',
    date: '11/8/2021',
    rating: 3.3,
    city: 'San Felipe',
    review:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
  },
  {
    id: 16,
    name: 'Konrad',
    date: '8/25/2022',
    rating: 2.9,
    city: 'San Isidro',
    review:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    id: 17,
    name: 'Giles',
    date: '9/4/2022',
    rating: 2.5,
    city: 'Montaneza',
    review:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
  },
  {
    id: 18,
    name: 'Lorelei',
    date: '8/17/2022',
    rating: 2.1,
    city: 'Manay',
    review:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
  },
  {
    id: 19,
    name: 'Effie',
    date: '2/24/2022',
    rating: 2.1,
    city: 'Skelivka',
    review:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
  },
  {
    id: 20,
    name: 'Tera',
    date: '8/17/2022',
    rating: 3.1,
    city: 'Barisāl',
    review:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
  },
];
export const featuredRestaurents = [
  {
    id: 1,
    name: 'Salman Salad',
    icon: appImages.onboardingTwo,
    price: 5.5,
    liked: true,
    rating: '3.0',
    totalRating: 25,
    description: 'Baked salmon fish',
    quantity: 1,
    delivery: '$1 delivery fee ',
    deliveryDuration: '10-20 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'islamabad',
  },
  {
    id: 2,
    name: 'Ground Beef',
    icon: appImages.salad,
    price: 5.6,
    liked: true,
    rating: '4.5',
    totalRating: 26,
    description: 'taste bite',
    quantity: 1,
    delivery: 'Free delivery',
    deliveryDuration: '10-15 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'islamabad',
  },
  {
    id: 3,
    name: 'Starbucks',
    icon: appImages.onboardingOne,
    price: 5,
    liked: true,
    rating: '4.0',
    totalRating: 30,
    description: 'Fresh Coffee',
    quantity: 1,
    delivery: 'Free delivery',
    deliveryDuration: '10-25 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'rawalpindi',
  },
  {
    id: 4,
    name: 'Salman Salan',
    icon: appImages.salad,
    price: 5.5,
    liked: false,
    rating: '4.5',
    totalRating: 25,
    description: 'Baked salmon fish',
    quantity: 1,
    delivery: '$1 delivery fee ',
    deliveryDuration: '10-30 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'islamabad',
  },
  {
    id: 5,
    name: 'Choco Cake',
    icon: appImages.cake,
    price: 5.5,
    liked: true,
    rating: '5.0',
    totalRating: 35,
    description: 'Yummy choco😍😘',
    quantity: 1,
    delivery: '$1 delivery fee ',
    deliveryDuration: '10-15 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'lahore',
  },
];
export const paymentMethods = [
  {
    id: 1,
    name: 'Apple Pay',
    image: appIcons.ApplePay,
    isSelected: true,
  },
  {
    id: 2,
    name: 'Google Pay',
    image: appIcons.GooglePay,
    isSelected: false,
  },
  {
    id: 1,
    name: 'Paypal',
    image: appIcons.PayPal,
    isSelected: false,
  },

  {
    id: 1,
    name: 'Amazon Payment',
    image: appIcons.Amzon,
    isSelected: false,
  },
];
export const completedOrders = [
  {
    id: 8,
    name: 'Sensitive',
    address: '800 Sauthoff Drive',
    price: '3991',
    orderCompleted: true,
    image: appImages.cake,
  },
  {
    id: 9,
    name: 'SHISEIDO BENEFIANCE WRINKLERESIST24 DAY',
    address: '707 Caliangt Court',
    price: '902',
    orderCompleted: true,
    image: appImages.chomian,
  },
  {
    id: 10,
    name: 'Alfuzosin Hydrochloride',
    address: '1 Colorado Place',
    price: '81',
    orderCompleted: true,
    image: appImages.onboardingOne,
  },

  {
    id: 12,
    name: 'Heparin Sodium',
    address: '83195 Johnson Center',
    price: '7955',
    orderCompleted: true,
    image: appImages.onboardingTwo,
  },
  {
    id: 13,
    name: 'Shopko Antibacterial Hand Sanitizer',
    address: '22 Spaight Crossing',
    price: '3070',
    orderCompleted: true,
    image: appImages.onboardingThree,
  },
  {
    id: 20,
    name: 'Alfuzosin Hydrochloride',
    address: '1 Colorado Place',
    price: '81',
    orderCompleted: true,
    image: appImages.onboardingOne,
  },
];
export const inCompletedOrders = [
  {
    id: 4,
    name: 'Clonazepam',
    address: '2528 Comanche Point',
    price: '554',
    orderCompleted: false,
    image: appImages.chomian,
  },
  {
    id: 5,
    name: 'Opana',
    address: '8763 Division Drive',
    price: '538',
    orderCompleted: false,
    image: appImages.cake,
  },
  {
    id: 6,
    name: 'Head and Shoulders',
    address: '4 Reinke Way',
    price: '12352',
    orderCompleted: false,
    image: appImages.onboardingTwo,
  },
  {
    id: 7,
    name: 'FENTANYL CITRATE',
    address: '30561 Eagle Crest Point',
    price: '1681',
    orderCompleted: false,
    image: appImages.onboardingOne,
  },

  {
    id: 11,
    name: 'Hydrogen Peroxide',
    address: '140 Emmet Place',
    price: '22196',
    orderCompleted: false,
    image: appImages.salad,
  },
  {
    id: 7,
    name: 'FENTANYL CITRATE',
    address: '30561 Eagle Crest Point',
    price: '1681',
    orderCompleted: false,
    image: appImages.onboardingOne,
  },
];
export const allergies = [
  'tomato',
  'onions',
  'cheese',
  'butter',
  'yogurt',
  'cream',
  'milk',
];

export const menu = [
  {
    id: 1,
    name: 'Barclay Prime',
    icon: appImages.menu1,
    price: 5.5,
    liked: true,
    rating: '3.0',
    totalRating: 25,
    description: 'Habibi',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Barrique Venice',
    icon: appImages.menu2,
    price: 5.6,
    liked: true,
    rating: '4.5',
    totalRating: 26,
    description: 'Saviour',
    quantity: 1,
  },
  {
    id: 3,
    name: 'BONDST',
    icon: appImages.menu3,
    price: 5,
    liked: true,
    rating: '4.0',
    totalRating: 30,
    description: 'Chezious',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Bavette s',
    icon: appImages.menu4,
    price: 5.5,
    liked: false,
    rating: '4.5',
    totalRating: 25,
    description: 'Al khabib',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Café Monarch',
    icon: appImages.menu5,
    price: 5.5,
    liked: true,
    rating: '5.0',
    totalRating: 35,
    description: 'Lasania',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Cafe Provence',
    icon: appImages.menu1,
    price: 5,
    liked: true,
    rating: '4.0',
    totalRating: 30,
    description: 'Stone ove',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Charleston',
    icon: appImages.menu5,
    price: 5.5,
    liked: false,
    rating: '4.5',
    totalRating: 25,
    description: 'Butt',
    quantity: 1,
  },
  {
    id: 5,
    name: 'CRUST',
    icon: appImages.menu3,
    price: 5.5,
    liked: true,
    rating: '5.0',
    totalRating: 35,
    description: 'Alkhabib',
    quantity: 1,
  },
];
export const faqs = [
  {
    id: 1,
    title: 'What is Chief affordable?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet.',
  },
  {
    id: 2,
    title: 'How it working?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet.',
  },
  {
    id: 3,
    title: 'How we use the app?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet.',
  },
  {
    id: 4,
    title: 'What are the benefits of this app?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet.',
  },
  {
    id: 5,
    title: 'Customer-focused composite extranet',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
  },
  {
    id: 6,
    title: 'Switchable holistic task-force',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
  },
  {
    id: 7,
    title: 'Future-proofed executive help-desk',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  },
  {
    id: 8,
    title: 'Fundamental intermediate toolset',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  },
  {
    id: 9,
    title: 'Versatile solution-oriented service-desk',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  },
  {
    id: 10,
    title: 'Realigned attitude-oriented task-force',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
  },
];
export const restaurentList = [
  {
    id: 1,
    name: 'Habibi',
    icon: appImages.onboardingTwo,
    price: 5.5,
    liked: true,
    rating: '3.0',
    totalRating: 25,
    description: 'Baked salmon fish',
    quantity: 1,
    delivery: '$1 delivery fee ',
    deliveryDuration: '10-20 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'Brooklyn, NY',
  },
  {
    id: 2,
    name: 'Savour',
    icon: appImages.salad,
    price: 5.6,
    liked: true,
    rating: '4.5',
    totalRating: 26,
    description: 'taste bite',
    quantity: 1,
    delivery: 'Free delivery',
    deliveryDuration: '10-15 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'Brooklyn, NY',
  },
  {
    id: 3,
    name: 'MC donald',
    icon: appImages.onboardingOne,
    price: 5,
    liked: true,
    rating: '4.0',
    totalRating: 30,
    description: 'Fresh Coffee',
    quantity: 1,
    delivery: 'Free delivery',
    deliveryDuration: '10-25 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'Brooklyn, NY',
  },
  {
    id: 4,
    name: 'Pizza hut',
    icon: appImages.salad,
    price: 5.5,
    liked: false,
    rating: '4.5',
    totalRating: 25,
    description: 'Baked salmon fish',
    quantity: 1,
    delivery: '$1 delivery fee ',
    deliveryDuration: '10-30 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'Brooklyn, NY',
  },
  {
    id: 5,
    name: 'Cheezious',
    icon: appImages.cake,
    price: 5.5,
    liked: true,
    rating: '5.0',
    totalRating: 35,
    description: 'Yummy choco😍😘',
    quantity: 1,
    delivery: '$1 delivery fee ',
    deliveryDuration: '10-15 mins',
    tags: ['Burger', 'chicken', 'Fast Food'],
    location: 'Brooklyn, NY',
  },
];

export const subCategoriesData = [
  // pizzz
  {
    category: 'pizza',
    name: 'hot pizza',
    image:
      'https://media.istockphoto.com/photos/neapolitan-pizza-on-black-background-picture-id1295797149?b=1&k=20&m=1295797149&s=170667a&w=0&h=pvcxQRi0VJvzSr6VW6UBH-TfBEamd_fM5dPpYzUGNg4=',
  },
  {
    category: 'pizza',
    name: 'Chezious pizza',
    image:
      'https://media.istockphoto.com/photos/fresh-italian-pizza-picture-id1045841884?k=20&m=1045841884&s=612x612&w=0&h=NMPrk4Vd9j3FYICHwBIwCcOvxrY88Ne3mLLzAHpoZ9s=',
  },
  {
    category: 'pizza',
    name: 'Italiennne pizza',
    image:
      'https://thumbs.dreamstime.com/z/flat-lay-italian-pizza-flat-lay-italian-pizza-wooden-board-various-ingredients-125144804.jpg',
  },
  {
    category: 'pizza',
    name: 'Homemade pizza',
    image:
      'https://st4.depositphotos.com/16122460/21136/i/1600/depositphotos_211366350-stock-photo-flat-lay-composition-tasty-homemade.jpg',
  },
  // burger
  {
    category: 'burger',
    name: 'Beed&chhez burger',
    image:
      'https://thumbs.dreamstime.com/b/burger-beef-cheese-homemade-hamburger-fresh-vegetables-120783099.jpg',
  },
  {
    category: 'burger',
    name: 'vegetable burger',
    image:
      'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?cs=srgb&dl=pexels-anna-tukhfatullina-food-photographerstylist-2702674.jpg&fm=jpg',
  },
  {
    category: 'burger',
    name: 'Classic burger',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a4f01c82667439.5d24aafde4b5e.jpg',
  },

  // donut
  {
    category: 'donut',
    name: 'Dunkin donut',
    image:
      'https://gibranmallick.com/wp-content/uploads/2020/06/Dunkin-Donuts_Commercial_Advert_Gibran-Mallick-Creative-Studio_Kuala-Lumpur_Malaysia_Thumbnail.jpg',
  },
  {
    category: 'donut',
    name: 'donut of the month',
    image: 'https://img.salehere.co.th/p/1200x0/2022/03/05/nwhctc6yvugk.jpg',
  },

  // mexican
  {
    category: 'mexican',
    name: 'Mexican special',
    image:
      'https://media.istockphoto.com/photos/street-vendor-hands-making-taco-outdoors-picture-id846279030?k=20&m=846279030&s=612x612&w=0&h=fhxA3hmQSQEoOxOFaJX1QRdWgfcIhTn7uZtroJ7wKvI=',
  },
  // asian
  {
    category: 'asian',
    name: 'Asian special',
    image:
      'https://t4.ftcdn.net/jpg/02/64/00/51/360_F_264005197_kz8P2s6Z6RMw3wUtvURy9z9B2i50m0IN.jpg',
  },
];
export const PrivacyPolicyText =
  'Lorem ipsum dolor sit amet, consectetur a adipiscing elitempor,convallis interduction id et,' +
  ' sed ut egestas. Aliquam volutpat leo,sodales proin sapien turpis id ac dictumst. Aenean tortor nulla viverraelit' +
  ' iaculis in. A, et metus ac, fermentum netus dolor. Orcien semperdui amet lacus, facilisi us sit enimd a. Gravida eu ' +
  'semper purus ornare.Diamu ornare amet tincidunt. Auctor lorem quisan habitasse cursus.Viverra ac eu dui, est pick condimentum mauris ornare';
export const TermsAndConditionText =
  'Lorem ipsum dolor sit amet, consectetur a adipiscing elitempor,convallis interduction id et, sed ut egestas.' +
  ' Aliquam volutpat leo,sodales proin sapien turpis id ac dictumst. Aenean tortor nulla viverraelit iaculis in. ' +
  'A, et metus ac, fermentum netus dolor. Orcien semperdui amet lacus, facilisi us sit enimd a. Gravida eu semper purus' +
  ' ornare.Diamu ornare amet tincidunt. Auctor lorem quisan habitasse cursus.Viverra ac eu dui, est pick condimentum mauris ' +
  "ornare.'\n\n'Lorem ipsum dolor sit amet, consectetur a adipiscing elitempor,convallis interduction id et, sed ut egestas." +
  ' Aliquam volutpat leo,sodales proin sapien turpis id ac dictumst. Aenean tortor nulla viverraelit iaculis in. A, et metus ' +
  ' ac, fermentum netus dolor. Orcien semperdui amet lacus, facilisi us sit enimd a. Gravida eu semper purus ornare.Diamu ornare amet tincidunt.' +
  ' Auctor lorem quisan habitasse cursus.Viverra ac eu dui, est pick condimentum mauris ornare.';
export const chatList = [
  {
    image:
      'https://www.shutterstock.com/image-photo/smiling-businesswoman-looking-camera-webcam-600w-1302585136.jpg',
    name: 'Lona Giraudat',
    status: 'Malanie Forten',
    date: '5/16/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/portrait-beautiful-smiling-woman-looking-600w-720383680.jpg',
    name: 'Aeriell MacAdam',
    status: 'Pegeen Andrusyak',
    date: '3/22/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/charming-young-secretary-portrait-600w-374504419.jpg',
    name: 'Lemmie Couldwell',
    status: 'Anica Vedmore',
    date: '12/22/2021',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/close-happy-thoughtful-office-woman-600w-293142572.jpg',
    name: 'Esmeralda Hinrichsen',
    status: 'Lanni Jakoviljevic',
    date: '10/30/2021',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600w-1714666150.jpg',
    name: 'Jerri Wittleton',
    status: 'Emilio Ponde',
    date: '3/10/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/portrait-smiling-mature-businessman-standing-600w-1572225790.jpg',
    name: 'Lilla Pods',
    status: 'Padriac Murney',
    date: '9/7/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/young-perplexed-disgusted-irritated-man-600w-1521512924.jpg',
    name: 'Archaimbaud Frise',
    status: 'Kaspar Massey',
    date: '12/3/2021',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/smile-joyful-man-white-tshirt-600w-1084528142.jpg',
    name: 'Mario Kensall',
    status: 'Ruby Ezzell',
    date: '3/12/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/portrait-smart-serious-young-man-600w-211757935.jpg',
    name: 'Marcus Flewan',
    status: 'Kermy Yeardley',
    date: '8/19/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/portrait-smart-serious-young-man-600w-211761715.jpg',
    name: 'Christopher Kaubisch',
    status: 'Gray Brayford',
    date: '11/15/2021',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1768126784.jpg',
    name: 'Archaimbaud Frise',
    status: 'Kaspar Massey',
    date: '12/3/2021',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/young-blond-man-wearing-glasses-600w-1415009519.jpg',
    name: 'Mario Kensall',
    status: 'Ruby Ezzell',
    date: '3/12/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/adult-hispanic-man-wearing-glasses-600w-1217339572.jpg',
    name: 'Marcus Flewan',
    status: 'Kermy Yeardley',
    date: '8/19/2022',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/adult-hispanic-catholic-priest-man-600w-1250185162.jpg',
    name: 'Christopher Kaubisch',
    status: 'Gray Brayford',
    date: '11/15/2021',
  },
];
