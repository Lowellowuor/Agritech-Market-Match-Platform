export const siteConfig = {
  name: "AgriConnect",
  description: "Advanced agricultural marketplace connecting farmers directly to markets",
  navItems: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Marketplace",
      href: "/marketplace",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Logistics",
      href: "/logistics",
    },
    {
      title: "Financial",
      href: "/financial",
    },
  ],
  languages: [
    { name: "English", code: "en" },
    { name: "Swahili", code: "sw" },
    { name: "Kikuyu", code: "ki" },
    { name: "French", code: "fr" },
    { name: "Arabic", code: "ar" },
  ],
  footerLinks: [
    {
      title: "About",
      links: [
        { title: "About Us", href: "/about" },
        { title: "How It Works", href: "/how-it-works" },
        { title: "Success Stories", href: "/success-stories" },
        { title: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Help Center", href: "/help" },
        { title: "Contact Us", href: "/contact" },
        { title: "FAQ", href: "/faq" },
        { title: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", href: "/blog" },
        { title: "Market Reports", href: "/reports" },
        { title: "Training", href: "/training" },
        { title: "Partners", href: "/partners" },
      ],
    },
  ],
  socialLinks: [
    { name: "Twitter", href: "https://twitter.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const testimonials = [
  {
    id: "1",
    quote: "AgriConnect has transformed my business. I now sell directly to hotels at better prices than I ever got from middlemen.",
    author: "Sarah Kimani",
    role: "Tomato Farmer, Nakuru",
    image: "https://images.pexels.com/photos/1139345/pexels-photo-1139345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    quote: "The price forecasting feature helped me plan my planting schedule to maximize profits during peak seasons.",
    author: "James Odhiambo",
    role: "Maize Farmer, Kisumu",
    image: "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    quote: "I've been able to secure loans based on my transaction history with AgriConnect. This has helped me expand my farm.",
    author: "Fatima Hassan",
    role: "Poultry Farmer, Mombasa",
    image: "https://images.pexels.com/photos/3727530/pexels-photo-3727530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

export const marketInsights = [
  {
    id: "1",
    title: "Tomatoes",
    currentPrice: 120,
    priceChange: 15,
    trend: "up",
    forecast: "rising",
    region: "Central",
  },
  {
    id: "2",
    title: "Maize",
    currentPrice: 45,
    priceChange: -5,
    trend: "down",
    forecast: "stable",
    region: "Western",
  },
  {
    id: "3",
    title: "Onions",
    currentPrice: 80,
    priceChange: 8,
    trend: "up",
    forecast: "rising",
    region: "Eastern",
  },
  {
    id: "4",
    title: "Potatoes",
    currentPrice: 50,
    priceChange: 0,
    trend: "stable",
    forecast: "stable",
    region: "Rift Valley",
  },
];

export const featuredProducts = [
  {
    id: "1",
    title: "Premium Tomatoes",
    price: 120,
    unit: "kg",
    quantity: 500,
    location: "Nakuru",
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    seller: {
      name: "Sarah Kimani",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "2",
    title: "Fresh Maize",
    price: 45,
    unit: "kg",
    quantity: 1000,
    location: "Kisumu",
    image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    seller: {
      name: "James Odhiambo",
      rating: 4.6,
      verified: true,
    },
  },
  {
    id: "3",
    title: "Organic Onions",
    price: 80,
    unit: "kg",
    quantity: 300,
    location: "Machakos",
    image: "https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    seller: {
      name: "John Mutua",
      rating: 4.7,
      verified: true,
    },
  },
];

export const logisticsProviders = [
  {
    id: "1",
    name: "FastTrack Logistics",
    rating: 4.7,
    pricePerKm: 25,
    availableVehicles: [
      { type: "Small Truck", capacity: "1 ton", refrigerated: false },
      { type: "Medium Truck", capacity: "3 tons", refrigerated: true },
    ],
  },
  {
    id: "2",
    name: "ColdChain Solutions",
    rating: 4.9,
    pricePerKm: 35,
    availableVehicles: [
      { type: "Refrigerated Van", capacity: "800 kg", refrigerated: true },
      { type: "Large Refrigerated Truck", capacity: "5 tons", refrigerated: true },
    ],
  },
  {
    id: "3",
    name: "AgriMove",
    rating: 4.5,
    pricePerKm: 20,
    availableVehicles: [
      { type: "Pickup", capacity: "500 kg", refrigerated: false },
      { type: "Medium Truck", capacity: "2 tons", refrigerated: false },
    ],
  },
];

export const financialServices = [
  {
    id: "1",
    name: "Harvest Loans",
    type: "Micro-loans",
    minAmount: 5000,
    maxAmount: 50000,
    interestRate: 12,
    termDays: 90,
    requirements: ["6+ months on platform", "Verified identity"],
  },
  {
    id: "2",
    name: "Crop Insurance",
    type: "Insurance",
    coverage: "Weather, pests, disease",
    premiumRate: 5,
    payoutConditions: ["Verified crop loss", "Weather data confirmation"],
  },
  {
    id: "3",
    name: "AgriSave",
    type: "Savings",
    interestRate: 7,
    minimumDeposit: 1000,
    features: ["Automatic deductions from sales", "Goal-based saving plans"],
  },
];