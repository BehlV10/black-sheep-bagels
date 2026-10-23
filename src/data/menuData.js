export const sandwiches = [
  {
    id: 'lox-classic',
    name: 'Lox Classic',
    price: '$12.95',
    category: 'sandwiches',
    description: 'Cream cheese & lox, tomato, onion, and briny capers on your choice of bagel.',
    tags: ['Popular', 'House Favorite'],
    badge: 'Classic'
  },
  {
    id: 'lox-2',
    name: 'Lox 2.0',
    price: '$13.75',
    category: 'sandwiches',
    description: 'Scallion cream cheese & lox, crisp cucumber, fresh dill, lemon zest, tomato, and microgreens. Available as open-face toast or a sandwich.',
    tags: ['Chef Special'],
    badge: 'Signature'
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    price: '$12.95',
    category: 'sandwiches',
    description: 'Fresh diced avocado, squeeze of lemon, Aleppo pepper flakes, and microgreens on a toasted bagel.',
    suggestedAdditions: 'Diced tomato (+85¢), Hardboiled egg (+$1.85), Bacon (+$1.75), Lox (+$6.50)',
    tags: ['Vegetarian', 'Vegan Option'],
    badge: 'Plant-Based'
  },
  {
    id: 'the-favorite',
    name: 'The Favorite',
    price: '$10.85',
    category: 'sandwiches',
    description: 'Sliced hardboiled egg, creamy avocado, ripe tomato, and house chipotle aioli.',
    tags: ['Vegetarian'],
    badge: 'Staff Pick'
  },
  {
    id: 'deviled-egg-toast',
    name: 'Deviled Egg Salad Toast',
    price: '$10.95',
    category: 'sandwiches',
    description: 'House-whipped deviled eggs, crispy bacon bits, smoked paprika, and fresh scallions.',
    tags: ['Savory'],
    badge: 'Comfort'
  },
  {
    id: 'turkey-avocado',
    name: 'Turkey Avocado',
    price: '$12.95',
    category: 'sandwiches',
    description: 'Sliced roasted turkey, ripe avocado, melted swiss cheese, house chipotle aioli, lettuce, tomato, and red onion.',
    suggestedAdditions: 'Crispy bacon (+$1.75)',
    tags: ['Hearty Lunch'],
    badge: 'Best Seller'
  },
  {
    id: 'turkey-mozzarella',
    name: 'Turkey Mozzarella',
    price: '$12.25',
    category: 'sandwiches',
    description: 'Roasted turkey breast, fresh creamy mozzarella, and aromatic basil pesto.',
    suggestedAdditions: 'Sliced tomato (+85¢), Balsamic reduction (+35¢)',
    tags: ['Warm & Melty']
  },
  {
    id: 'caprese-toast',
    name: 'Caprese Toast',
    price: '$12.25',
    category: 'sandwiches',
    description: 'Fresh mozzarella, sliced ripe tomato, fragrant basil pesto, and rich balsamic glaze drizzle.',
    tags: ['Vegetarian'],
    badge: 'Italian Inspired'
  },
  {
    id: 'breakfast-blt',
    name: 'Breakfast BLT',
    price: '$9.55',
    category: 'sandwiches',
    description: 'Signature sweet & smoky maple bacon cream cheese, crisp lettuce, ripe tomato, and smoky bacon bits.',
    suggestedAdditions: 'Avocado (+$1.95), Turkey (+$2.25), Hardboiled egg (+$1.85)',
    tags: ['Breakfast']
  },
  {
    id: 'bacon-egg-fig',
    name: 'Bacon, Egg, & Fig',
    price: '$10.75',
    category: 'sandwiches',
    description: 'Zesty jalapeño cream cheese, sweet dark fig jam, crispy bacon, sliced hardboiled egg, and Cajun seasoning.',
    tags: ['Sweet & Spicy', 'Signature']
  }
];

export const bagels = [
  { name: 'Plain', note: 'Everyday' },
  { name: 'Everything', note: 'Everyday' },
  { name: 'Sesame', note: 'Black & white seeds' },
  { name: 'Sea Salt', note: 'Flaky Maldon' },
  { name: 'Whole Wheat', note: 'Hearty grain' },
  { name: 'Whole Wheat Everything', note: 'Full flavor' },
  { name: 'Garlic & Onion', note: 'Savory classic' },
  { name: 'Asiago Cheese', note: 'Crisped crust' },
  { name: 'Cajun Spice', note: 'Southern kick' },
  { name: 'Za’atar', note: 'Middle-Eastern blend' },
  { name: 'Rosemary Sea Salt', note: 'Fri – Sun only' },
  { name: 'Poppy Seed', note: 'Sat – Sun only' },
  { name: 'Gluten Free Bagel', note: '+$1.50 add-on' }
];

export const spreads = {
  priceNote: 'Any bagel with spread: $4.95',
  creamCheeses: [
    { name: 'Plain Cream Cheese', extra: null },
    { name: 'Lox Cream Cheese', extra: '+$1.25' },
    { name: 'Scallion Cream Cheese', extra: null },
    { name: 'Veggie Cream Cheese', extra: null },
    { name: 'Fresh Jalapeño Cream Cheese', extra: null },
    { name: 'Maple Bacon Cream Cheese', extra: '+$1.25' },
    { name: 'Strawberry Cream Cheese', extra: null }
  ],
  nonCreamCheeses: [
    { name: 'House Hummus', extra: null, vegan: true },
    { name: 'Basil Pesto', extra: null },
    { name: 'Peanut Butter', extra: null, vegan: true },
    { name: 'Strawberry Jam', extra: null, vegan: true },
    { name: 'Fig Jam', extra: null, vegan: true },
    { name: 'Cinnamon Honey Butter', extra: null }
  ]
};

export const additions = [
  { name: 'Avocado', price: '$1.95' },
  { name: 'Tomato', price: '85¢' },
  { name: 'Microgreens', price: '95¢' },
  { name: 'Red Onion', price: '50¢' },
  { name: 'Lettuce', price: '50¢' },
  { name: 'Cucumber', price: '85¢' },
  { name: 'Capers', price: '65¢' },
  { name: 'Swiss Cheese', price: '85¢' },
  { name: 'Mozzarella', price: '$1.95' },
  { name: 'Hardboiled Egg', price: '$1.85' },
  { name: 'Crisp Bacon', price: '$1.75' },
  { name: 'Sliced Turkey', price: '$2.25' },
  { name: 'Cold Smoked Lox', price: '$6.50' }
];

export const drinks = [
  { name: 'House Blend Drip Coffee', size: '12oz / 16oz', price: '$3.45 / $3.95', desc: 'Locally sourced freshly roasted beans' },
  { name: 'House Cold Brew', size: '16oz / 20oz', price: '$4.55 / $5.00', desc: 'Slow steeped for 20 hours, ultra smooth' },
  { name: 'Double Espresso Shot', size: 'Hot or Iced', price: '$3.55', desc: 'Rich crema, concentrated extraction' },
  { name: 'Americano', size: 'Hot or Iced', price: '$3.55', desc: 'Double espresso over filtered hot or cold water' },
  { name: 'Cafe Con Leche (Caribbean Style)', size: 'Hot $3.75 / $4.25 • Iced $4.45 / $4.95', price: 'From $3.75', desc: 'Espresso with sweetened condensed & steamed milk' },
  { name: 'Latte or Cappuccino', size: 'Hot $4.85 / $5.30 • Iced $4.95 / $5.45', price: 'From $4.85', desc: 'Micro-foamed whole, oat, or almond milk' },
  { name: 'Chai Latte', size: 'Hot $4.95 / $5.45 • Iced $5.25 / $5.65', price: 'From $4.95', desc: 'Spiced black tea brew with creamy steamed milk' },
  { name: 'MEM Specialty Hot Teas', size: 'Single Size', price: '$3.75', desc: 'Selection of premium loose leaf teas from MEM Tea Imports' }
];

export const locations = [
  {
    type: 'flagship',
    name: 'Black Sheep Bagel Cafe',
    subtitle: 'Harvard Square',
    address: '56 John F. Kennedy Street',
    cityStateZip: 'Cambridge, MA 02138',
    phone: '617-945-2189',
    phoneClean: '6179452189',
    hours: [
      { days: 'Monday – Friday', time: '7:00 AM – 3:00 PM (or sellout)' },
      { days: 'Saturday – Sunday', time: '8:00 AM – 2:00 PM (or sellout)' }
    ],
    features: ['Takeout & Indoor Seating', 'Full Made-to-Order Sandwich Menu', 'MEM Tea & Full Espresso Bar', 'Walk-in counter ordering'],
    mapUrl: 'https://maps.google.com/?q=56+John+F.+Kennedy+Street+Cambridge+MA+02138'
  },
  {
    type: 'outpost',
    name: 'Black Sheep Market',
    subtitle: 'Cambridgeport Outpost',
    address: '101 Magazine Street',
    cityStateZip: 'Cambridge, MA 02139',
    phone: '617-945-1156',
    phoneClean: '6179451156',
    hours: [
      { days: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 5:00 PM' },
      { days: 'Sunday', time: '8:00 AM – 3:00 PM' }
    ],
    features: ['Fresh Bagels & DIY Spreads', 'Union Square Donuts (Sat-Sun)', "Iggy's & Nashoba Bakery Breads", 'Local Craft Beers & Natural Wines', 'Specialty Groceries & Daily Needs'],
    mapUrl: 'https://maps.google.com/?q=101+Magazine+Street+Cambridge+MA+02139'
  }
];

export const events = [
  { title: 'Curio Spice Co. Tasting', date: 'Tasting & Pairings', location: 'Black Sheep Market (101 Magazine St)', note: 'Explore small-batch spice blends & bagel pairings' },
  { title: 'Vine Farmer Wines', date: 'Natural Wine Pop-Up', location: 'Black Sheep Market (101 Magazine St)', note: 'Low-intervention European natural wines' },
  { title: 'Mei Mei Dumplings', date: 'Local Food Showcase', location: 'Black Sheep Market (101 Magazine St)', note: 'Pasture-raised farm-to-table dumpling specials' },
  { title: 'Oz Wines Showcase', date: 'Sommelier Series', location: 'Black Sheep Market (101 Magazine St)', note: 'Curated organic & biodynamic tastings' }
];

export const instagramPosts = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1570990394410-ZVEVCGYZ89LJLG5TF01D/48787299966_f23d0587b3_o.jpg',
    caption: 'Golden sesame and everything bagels straight from the oven.',
    link: 'https://www.instagram.com/blacksheepbagelcafe/'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1570990396542-HWPH9BC7SMVXPH39CA0R/48786940328_46259094f4_o.jpg',
    caption: 'Fresh lox with capers, red onion, and dill cream cheese.',
    link: 'https://www.instagram.com/blacksheepbagelcafe/'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1570990468100-YZ9R26800MP0PZM2HRVW/48786931568_fb2137fe71_o.jpg',
    caption: 'The favorite sandwich on a toasted asiago bagel.',
    link: 'https://www.instagram.com/blacksheepbagelcafe/'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1570990486135-08LNKJCPF5V9W13EEK3X/IMG_20190819_104153_718.jpg',
    caption: 'Cozy mornings in Harvard Square with fresh espresso.',
    link: 'https://www.instagram.com/blacksheepbagelcafe/'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1570990506995-HYTSDJQP02TM0TEZN79W/48786930178_e9d243217e_o.jpg',
    caption: 'Avocado toast topped with Aleppo pepper and microgreens.',
    link: 'https://www.instagram.com/blacksheepbagelcafe/'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5a891244d7bdce4550a72efa/1586712895862-SF4H7VGEJMYHZL63Z1OX/IMG_4625.jpg',
    caption: 'Fresh morning bake cooling on the baker racks.',
    link: 'https://www.instagram.com/blacksheepbagelcafe/'
  }
];
